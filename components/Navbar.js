// This component uses next/link for client-side navigation between routes.
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ borderTop: '1px dashed #000', borderBottom: '1px dashed #000', padding: '10px 0', marginBottom: '20px' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/about">About</Link> |{' '}
      <Link href="/students">Students</Link> |{' '}
      <Link href="/contact">Contact</Link>
    </nav>
  );
}