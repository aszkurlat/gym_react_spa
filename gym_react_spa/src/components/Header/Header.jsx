import { Link as ScrollLink } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 923) {
      return { right: !menuOpened && "-250%" };
    }
    console.log("menuOpened:", menuOpened);
  };
  return (
    <header className="header">
      <img src="./logo.png" alt="logo" className="logo" />
      <OutsideClickHandler
        onOutsideClick={() => {
          setMenuOpened(false);
        }}
      >
        <nav className="nav">
          <ul className="nav-menu" style={getMenuStyles(menuOpened)}>
            <li className="nav-item" onClick={() => setMenuOpened(false)}>
              <ScrollLink to="home" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li className="nav-item" onClick={() => setMenuOpened(false)}>
              <ScrollLink to="programs" smooth={true} duration={500}>
                Programs
              </ScrollLink>
            </li>
            <li className="nav-item" onClick={() => setMenuOpened(false)}>
              <ScrollLink to="team" smooth={true} duration={500}>
                Team
              </ScrollLink>
            </li>
            <li className="nav-item" onClick={() => setMenuOpened(false)}>
              <ScrollLink to="plans" smooth={true} duration={500}>
                Plans
              </ScrollLink>
            </li>
            <li className="nav-item" onClick={() => setMenuOpened(false)}>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </OutsideClickHandler>
      <div className="menu-icon">
        <BiMenu
          size={30}
          onClick={() => setMenuOpened((prevState) => !prevState)}
        />
      </div>
    </header>
  );
};

export default Header;
