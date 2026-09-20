// This creates the nested route /students/profile by nesting folders.
import Link from 'next/link';

export default function StudentProfilePage() {
  return (
    <div>
      <h1>Student Profile</h1>
      <ul>
        <li><strong>Name:</strong> Juan Dela Cruz</li>
        <li><strong>Student ID:</strong> 2023-0001</li>
        <li><strong>Course:</strong> BS Computer Science</li>
        <li><strong>Year Level:</strong> 3rd Year</li>
      </ul>
      <br />
      <Link href="/students">[Back to Students]</Link>
    </div>
  );
}