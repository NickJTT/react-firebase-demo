import { useState, useEffect } from 'react';
import { db } from './services/firebase';

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const snapshot = await db.collection('students').get();
        const data = [];
        snapshot.docs.map(student => data.push(student.data()));
        setStudents(data);
      } catch(exception) {
        console.error(exception);
      }
    }
    fetchData();
  }, []);

  const createStudent = async () => {
    db.collection('students').add({
      name: 'Alexander',
      age: 16,
      joined_at: new Date(),
      graduated: false,
      points: 2304
    });
  }

  return <>
    <h1>Students</h1>
    { students && students.map(student =>
      <p key = { student.name }>
        Name: { student.name }<br/>Age: { student.age }<br/>Joined at: { student.joined_at.toDate().toString() }<br/><br/>
      </p>)
    }
    <button disabled onClick = { createStudent }>Create Student</button>
  </>;
}
