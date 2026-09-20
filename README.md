# Student Information Portal

A beginner-friendly Next.js application demonstrating File-Based Routing using the App Router.

## How to Run

1. Clone or download the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Route Table

| URL Route | File Location | Page Description |
|---|---|---|
| `/` | `app/page.js` | Home Page |
| `/about` | `app/about/page.js` | About the Portal |
| `/students` | `app/students/page.js` | List of Students |
| `/students/profile` | `app/students/profile/page.js` | Student Profile |
| `/contact` | `app/contact/page.js` | Contact Information |

## Folder Structure
Routes are created purely by organizing files and folders inside the `app` directory. A reusable `Navbar` component is located in the `components` directory and injected globally via `app/layout.js`.