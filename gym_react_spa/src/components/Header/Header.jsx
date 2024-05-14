import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="./logo.png" alt="logo" className="logo" />
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#programs">Programs</a>
          </li>
          <li className="nav-item">
            <a href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a href="#plans">Plans</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
