import "./GymGalery.css";

const GymGalery = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src="./image1.png" alt="gym member" />
        <img src="./image2.png" alt="gym member" />
        <img src="./image3.jpg" alt="gym member" />
        <img src="./image4.png" alt="gym member" />
      </div>
      <div className="right-r">
        <span>Our Trainers</span>
        <div>
          <span className="stroke-text">meet</span>
          <span> our team </span>
        </div>
        <div className="details-r">
          <div>
            <img src="./tick.png" alt=""></img>
            <span>
              Expert Knowledge: Certified professionals with extensive training
              expertise
            </span>
          </div>
          <div>
            <img src="./tick.png" alt="" />
            <span>
              Personalized Plans: Customized workout plans tailored to
              individual needs
            </span>
          </div>
          <div>
            <img src="./tick.png" alt="" />
            <span>
              Motivational Support: Continuous encouragement to help you reach
              your goals
            </span>
          </div>
          <div>
            <img src="./tick.png" alt="" />
            <span>
              Flexible Scheduling: Sessions available at times that fit your
              lifestyle
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymGalery;
