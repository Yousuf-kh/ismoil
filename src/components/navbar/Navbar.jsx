import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <a href="/">
              <img src="./images/logo.png" />
            </a>
          </div>

          <div className="aloqa">
            <p>
              Biz bilan bog'laning:
              <br />
              <span>+9989 99 821 33 91</span>
            </p>
            <img src="./images/fi.png" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
