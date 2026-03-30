import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="header-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
