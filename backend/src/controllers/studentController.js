import Student from "../models/student.js";

export const getStudents = async (req, res) =>
  res.json(await Student.find());

export const addStudent = async (req, res) =>
  res.json(await Student.create(req.body));

export const updateStudent = async (req, res) =>
  res.json(await Student.findByIdAndUpdate(req.params.id, req.body));

export const deleteStudent = async (req, res) =>
  res.json(await Student.findByIdAndDelete(req.params.id));
