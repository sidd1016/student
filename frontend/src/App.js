import React, { useRef } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default function App() {
  const listRef = useRef();

  return (
    <div>
      <h1>Student Management</h1>
      <StudentForm reload={() => listRef.current.loadStudents()} />
      <StudentList ref={listRef} />
    </div>
  );
}
