import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="./logo.png" alt="logo" className="logo" />
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-item">
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="programs" smooth={true} duration={500}>
              Programs
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="team" smooth={true} duration={500}>
              Team
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="plans" smooth={true} duration={500}>
              Plans
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
