import { NavLink } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src="" alt="headphones" className="hero-banner-image" />
        <div>
          <NavLink to="/product/ID">hi</NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
