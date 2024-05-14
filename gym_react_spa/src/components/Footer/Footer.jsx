import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="
  Footer-container"
      id="footer"
    >
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src="facebook.png" alt="" />
          <img src="youtube.png" alt="" />
          <img src="instagram.png" alt="" />
        </div>
        <div className="logo-f">
          <img src="./logo.png" alt="" />
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
    </div>
  );
};

export default Footer;
