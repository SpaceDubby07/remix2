import { Link } from '@remix-run/react';

export default function Footer() {
  return (
    <footer className="footer bg-base-300 items-center p-4 text-gray-700">
      <aside className="grid-flow-col items-center">
        <p>
          Copyright © {new Date().getFullYear()} - Zachary Clark
          Designs
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          to="/thanks"
          className="hover:underline hover:text-primary"
        >
          Attributions
        </Link>
      </nav>
    </footer>
  );
}
