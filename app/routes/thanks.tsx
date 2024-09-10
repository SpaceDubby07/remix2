import { Link } from '@remix-run/react';
import Footer from '~/components/footer';
import Hero from '~/components/hero';

export default function Thanks() {
  return (
    <div className="text-gray-700">
      <Hero
        title="Attributions"
        description="Thank you to all the artists and photographers who create amazing content. Below you will find attributions to these amazing people. "
        img=""
      />
      <div className="max-w-4xl text-center mt-10">
        <ul>
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
      <Footer />
    </div>
  );
}
