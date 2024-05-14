import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              We will help you shape and build your ideal body and live your
              life to the fullest
            </span>
            {/* hero buttons */}
            <div className="hero-buttons">
              <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
