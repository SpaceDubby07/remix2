import Header from './header';

export default function Hero({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <Header />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-6xl">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">
            {title}
          </h1>
          <p className="mb-5 text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
