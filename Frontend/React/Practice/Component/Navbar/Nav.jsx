import "Nav.css";
function Nav() {
  return (
    <header>
      <div className="logo">
        {/* <img src="image/logo/MR LOGO COLORFULL.png" alt="logo" /> */}
      </div>
      <div className="nav">
        <a href="#herosection">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#footer">Footer</a>
      </div>
      <div className="headbutton">
        <button>Hire Me</button>
      </div>
    </header>
  );
}

export default Nav;
