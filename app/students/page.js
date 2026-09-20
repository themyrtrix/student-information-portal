// This file creates the /students route.
import Link from 'next/link';

export default function StudentsPage() {
  const students = ['Juan Dela Cruz', 'Maria Santos', 'Pedro Reyes'];

  return (
    <div>
      <h1>Students</h1>
      <ol>
        {students.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
      <br />
      <Link href="/students/profile">[View Student Profile]</Link>
    </div>
  );
}