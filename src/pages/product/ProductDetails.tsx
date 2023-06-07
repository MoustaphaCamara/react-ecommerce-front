import { useLocation } from "react-router-dom";
import { urlFor, client } from "../../client";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <h1>{product.name}</h1>
          <div className="image-container">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
