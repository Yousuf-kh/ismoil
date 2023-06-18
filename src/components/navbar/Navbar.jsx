import "./navbar.css";

import logo from "../../../images/logo.png"
import fi from "../../../images/fi.png"

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <a href="/">
              <img src={logo} />
            </a>
          </div>

          <div className="aloqa">
            <p>
              Biz bilan bog'laning:
              <br />
              <span>+9989 99 821 33 91</span>
            </p>
            <img src={fi} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
