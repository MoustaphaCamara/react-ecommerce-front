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
  const { name, image, price } = product;

  return (
    <div>
      <NavLink
        to={`/product/${product.slug.current}`}
        state={{ product: product }}
      >
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            alt={name}
            className="product-image"
          />
          <p className="product-name">{name} </p>
          <p className="product-price">{price} €</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
