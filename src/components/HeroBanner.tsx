import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const query = "*[_type == 'banner']";

const HeroBanner = () => {
  const { data, loading, error } = useFetch(query);
  const [banner] = data;
  if (error) console.log(error);
  if (loading) return <p>Loading...</p>;
  return (
    <>
      {data && banner && (
        <div className="hero-banner-container">
          <div>
            <p className="beats-solo">{banner.smallText}</p>
            <h3>{banner.midText}</h3>
            <h1>{banner.largeText1}</h1>
            <img src="" alt="headphones" className="hero-banner-image" />
            <div>
              <NavLink to="/product/ID">
                <button type="button">BUTTON TEXT</button>
              </NavLink>
              <div className="desc">
                <h5>Description</h5>
                <p>DESCRIPTION</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBanner;
