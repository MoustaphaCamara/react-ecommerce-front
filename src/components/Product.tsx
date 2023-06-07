import { NavLink } from "react-router-dom";
import { urlFor } from "../client";

interface ProductInt {
  product: {
    image: string;
    name: string;
    slug: {
      current: string;
      _type: "slug";
    };
    price: number;
  };
}

const Product = ({ product }: ProductInt) => {
  return (
    <div>
      <NavLink
        to={`/product/${product.slug.current}`}
        state={{ product: product }}
      >
        {/* https://ui.dev/react-router-pass-props-to-link */}
        <div className="product-card">
          <img
            src={urlFor(product.image && product.image[0])}
            width={250}
            height={250}
            alt={product.name}
            className="product-image"
          />
          <p className="product-name">{product.name} </p>
          <p className="product-price">{product.price} €</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
