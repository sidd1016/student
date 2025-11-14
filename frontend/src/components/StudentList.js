import axios from "axios";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import API_BASE from "../config";

const StudentList = forwardRef((props, ref) => {
  const [students, setStudents] = useState([]);

  const loadStudents = () => {
    axios.get(API_BASE).then(res => setStudents(res.data));
  };

  useImperativeHandle(ref, () => ({
    loadStudents
  }));

  useEffect(() => {
    loadStudents();
  }, []);

  const del = async (id) => {
    await axios.delete(`${API_BASE}/${id}`);
    loadStudents();
  };

  return (
    <div>
      {students.map(s => (
        <div key={s._id}>
          {s.name} - {s.email} - {s.dept}
          <button onClick={() => del(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
});

export default StudentList;
