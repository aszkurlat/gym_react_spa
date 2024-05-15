import "./Plans.css";
import { plansData } from "../../../data/plansData.jsx";
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">START</span>
        <span>YOUR FITNESS JOURNEY</span>
        <span className="stroke-text">WITH US NOW</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price} €</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src="./whiteTick.png" alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>
                See more benefits{" "}
                <img className="benefitArrow" src="./rightArrow.png" alt="" />
              </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
