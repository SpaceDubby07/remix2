import Nav from './nav';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <img src="./logo.png" alt="logo" className="h-8 md:h-12" />
        <h1 className="text-2xl md:text-4xl text-white">Huskies</h1>
      </div>
      <nav className="w-full md:w-auto">
        <ul className="list-none flex flex-wrap justify-center md:justify-end p-0 items-center gap-2 md:gap-4">
          <Nav title="Home" src="/" />
          <Nav title="History" src="/history" />
          <Nav title="Gallery" src="/gallery" />
          <Nav title="Contact" src="#" />
        </ul>
      </nav>
    </header>
  );
}
