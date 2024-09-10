import { Link } from '@remix-run/react';

export default function Thanks() {
  return (
    <div className="text-gray-700 h-screen">
      <Link to="/husky">
        <button className="mx-auto btn btn-secondary mt-4 ml-4 rounded-full">
          Back
        </button>
      </Link>

      <div className="max-w-4xl text-center mt-10 p-12 ">
        <h1 className="text-4xl mb-4">Attributions</h1>
        <ul className="attributions">
          <li>
            <Link to="https://unsplash.com/photos/a-dog-pulling-a-sled-with-two-people-on-it-PsgHfWXjfuc">
              Fredrik Solli Wandem - Home page
            </Link>
          </li>
          <li>
            <Link to="https://unsplash.com/es/fotos/perro-de-pelo-corto-blanco-y-marron-kyAD2FI1Abc">
              Valeriia Miller - History page
            </Link>
          </li>
          <li>
            <Link to="https://www.deviantart.com/camilaxiao/art/Husky-in-a-snowy-mountain-Pixel-Art-Animation-885421281">
              camilaxiao - DeviantArt Pixel Gif
            </Link>
          </li>
          <li>
            <Link to="https://www.pexels.com/">
              Pexels.com - Gallery
            </Link>
          </li>
          <li>
            <Link to="https://unsplash.com">Unsplash.com</Link>
          </li>
        </ul>
      </div>

      <footer className="footer text-xs bg-base-300 items-center p-4 text-gray-700">
        <aside className="grid-flow-col items-center">
          <p>
            Copyright © {new Date().getFullYear()} - Zachary Clark
            Designs
          </p>
        </aside>
      </footer>
    </div>
  );
}
