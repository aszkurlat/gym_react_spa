import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="
  footer-container"
      id="footer"
    >
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src="facebook.png" alt="facebook logo" />
          <img src="youtube.png" alt="youtube logo" />
          <img src="instagram.png" alt="instagram logo" />
        </div>
        <div className="logo-f">
          <a href="#home">
            <img src="logo.png" alt="logo" className="logo" />
          </a>
        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
    </div>
  );
};

export default Footer;
