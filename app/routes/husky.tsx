/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from '@remix-run/react';
import { useEffect } from 'react';
import Footer from '~/components/footer';
import Hero from '~/components/hero';

function Carousel() {
  useEffect(() => {
    const interval = setInterval(() => {
      const items = document.querySelectorAll('.carousel-item');
      const activeItem = document.querySelector(
        '.carousel-item.active'
      );

      if (activeItem) {
        let nextItem = activeItem.nextElementSibling;

        if (!nextItem) {
          nextItem = items[0]; // Restart from the first item
        }

        activeItem.classList.remove('active');
        nextItem.classList.add('active');
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="carousel carousel-vertical rounded-box h-full w-full p-4 md:p-8 lg:p-12">
      <div className="carousel-item active" id="slide1">
        <img
          src="https://images.unsplash.com/photo-1698009144255-449094a61be9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGh1c2t5fGVufDB8MXwwfHx8MA%3D%3D"
          alt="carousel"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item" id="slide2">
        <img
          src="https://images.unsplash.com/photo-1541451563641-c2bdc370f58a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVza3l8ZW58MHwxfDB8fHww"
          alt="carousel"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item" id="slide3">
        <img
          src="https://plus.unsplash.com/premium_photo-1669769591345-b1dc7f2d2bde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGh1c2t5fGVufDB8MXwwfHx8MA%3D%3D"
          alt="carousel"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item" id="slide4">
        <img
          src="https://images.unsplash.com/photo-1536572743959-90cb37883a36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh1c2t5fGVufDB8MXwwfHx8MA%3D%3D"
          alt="carousel"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item" id="slide5">
        <img
          src="https://images.unsplash.com/photo-1687189616461-58d888e0d9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpYmVyaWFuJTIwaHVza3l8ZW58MHwxfDB8fHww"
          alt="carousel"
          className="rounded-box"
        />
      </div>
    </div>
  );
}

function MaxRating({
  title,
  rating,
}: {
  title: string;
  rating: string;
}) {
  return (
    <div id="stats" className="stats shadow p-6">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value text-primary">
          <div className="rating gap-4 flex items-center -skew-y-3">
            <input
              disabled
              type="radio"
              name={`rating-${rating}`}
              className="mask mask-heart bg-blue-300 h-6"
            />
            <input
              disabled
              type="radio"
              name={`rating-${rating}`}
              className="mask mask-heart bg-lime-400 h-8"
            />
            <input
              disabled
              type="radio"
              name={`rating-${rating}`}
              className="mask mask-heart bg-yellow-400 h-16"
            />
            <input
              disabled
              type="radio"
              name={`rating-${rating}`}
              className="mask mask-heart bg-orange-400 h-24"
            />
            <input
              disabled
              type="radio"
              name={`rating-${rating}`}
              className="mask mask-heart bg-red-400 h-28"
              defaultChecked
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Husky() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header hero and nav */}
      <Hero
        img="https://images.unsplash.com/photo-1647591413270-469a0393da0c?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Meet the Majestic Huskies"
        description="Known for their striking blue eyes and playful
              personalities, Huskies are a breed like no other. These
              intelligent and energetic dogs are not just great
              companions but also have a rich history as sled dogs in
              harsh Arctic conditions. Whether it's their
              friendly nature or their stunning appearance, Huskies
              capture hearts everywhere they go."
      />

      {/* Care */}
      <section
        id="husky-general"
        className="flex flex-col justify-center items-center p-4 md:p-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          What To Expect When Caring For a Siberian Husky
        </h2>
        <p className="max-w-2xl">
          Owning a dog is not just a privilege; it’s a responsibility.
          They depend on us for, at minimum, food and shelter, and
          deserve much more. When you take a dog into your life, you
          need to understand the commitment that dog ownership
          entails.
        </p>

        <Link to="/care#average">
          <button className="btn mt-10 hover:scale-110">
            Learn More
          </button>
        </Link>
      </section>

      {/* General info */}
      <section
        id="husky-general"
        className="flex flex-col items-center p-4 md:p-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Breed Traits & Characteristics
        </h2>

        <div className="flex flex-wrap justify-center items-start gap-4 max-w-[82rem] mb-8">
          {[
            'Affection Levels',
            'Energy Levels',
            'Good with Children',
          ].map((title, index) => (
            <MaxRating
              key={index}
              title={title}
              rating={String(index + 1)}
            />
          ))}
        </div>

        <Link to="/care#traits">
          <button className="btn btn-primary text-white">
            See All{' '}
          </button>
        </Link>
      </section>

      {/* Carousel & Gallery */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6 md:px-24">
        <Carousel />
        <div className="flex flex-col items-center justify-center space-y-6 p-4">
          <div className="text-center text-base-content">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The Spirit of the Arctic
            </h2>
            <p className="mt-4 text-sm md:text-lg">
              Discover the beauty and resilience of Huskies. These
              magnificent dogs are more than just pets; they embody
              the spirit of adventure and the wild Arctic landscapes
              they once roamed.
            </p>
          </div>

          <Link to="/gallery">
            <button className="mt-4 btn btn-secondary text-white">
              View Gallery
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
