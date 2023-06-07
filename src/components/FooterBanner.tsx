import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { urlFor } from "../client";
const query = "*[_type == 'banner']";

const FooterBanner = () => {
  const { data, error, loading, Loader } = useFetch(query);
  const [footer] = data;
  if (error) return error;
  if (loading) return <Loader />;
  return (
    <>
      {data && footer && (
        <div className="footer-banner-container">
          <div className="banner-desc">
            <div className="left">
              <p>{footer.discount}</p>
              <h3>{footer.largeText1}</h3>
              <h3>{footer.largeText2}</h3>
              <p>{footer.saleTime}</p>
            </div>
            <div className="right">
              <p>{footer.smallText}</p>
              <p>{footer.midText}</p>
              <p>{footer.desc}</p>
              <NavLink to={`/product/${footer.product}`}>
                <button type="button">{footer.buttonText}</button>
              </NavLink>
            </div>
            <img
              src={urlFor(footer.image)}
              alt={footer.name}
              className="footer-banner-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FooterBanner;
