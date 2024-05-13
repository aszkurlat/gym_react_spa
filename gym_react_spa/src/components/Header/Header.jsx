import "./Header.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="home">
      <img src="./logo.png" alt="logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: ".5rem",
            borderRadius: "5px",
          }}
          onClick={() => {
            setMenuOpened(true);
          }}
        >
          <img
            src="./bars.png"
            alt="bars_menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpened(false)}>
            <Link to="home" activeClass="active" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="programs" spy={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="reasons" spy={true} smooth={true}>
              Why Us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="plans" spy={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="testimonials" spy={true} smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
