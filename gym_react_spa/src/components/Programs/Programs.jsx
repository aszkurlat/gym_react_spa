import "./Programs.css";
import { programsData } from "../../../data/programsData.jsx";

const Programs = () => {
  return (
    <div className="programs-container" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore Our </span>
        <span>Programs </span>
        <span className="stroke-text">to shape youself</span>
      </div>
      {/* program categories */}
      <div className="program-categories">
        {programsData.map((program) => (
          <div key={program.details} className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src="./rightArrow.png" alt="right arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
