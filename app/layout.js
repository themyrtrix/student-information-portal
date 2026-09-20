// The root layout wraps every page in the app.
// Placing the Navbar here ensures it appears on every route automatically.
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Student Information Portal',
  description: 'A Next.js file-based routing demonstration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}