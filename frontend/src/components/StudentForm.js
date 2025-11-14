import axios from "axios";
import { useState } from "react";
import API_BASE from "../config";

export default function StudentForm({ reload }) {
  const [student, setStudent] = useState({ name: "", email: "", dept: "" });

  const submit = async () => {
    await axios.post(API_BASE, student);
    reload();
  };

  return (
    <div>
      <input placeholder="Name" onChange={e => setStudent({...student, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setStudent({...student, email:e.target.value})}/>
      <input placeholder="Department" onChange={e => setStudent({...student, dept:e.target.value})}/>
      <button onClick={submit}>Add</button>
    </div>
  );
}
