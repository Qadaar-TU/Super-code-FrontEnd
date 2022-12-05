import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        {/* <a href="/">Home</a>
        <a href="/about">Speisekarte</a>
        <a href="/contact">Kontakt</a>
        <a href="/service">Öffnungszeiten</a>
        <a href="/service">Galerie</a> */}

        <Link to="/home">Home</Link>
        <Link to="/speisekarte">Speisekarte</Link>
        <Link to="/öffnungszeiten">Öffnungszeiten</Link>
        <Link to="/galerie">Galerie</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
    </div>
  );
};

export default Header;
