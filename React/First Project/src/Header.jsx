import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h3>My Header</h3>
      </div>
      <div className="nav">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Portfolio</a>
        <a href="">Contact</a>
      </div>
      <div className="button">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
