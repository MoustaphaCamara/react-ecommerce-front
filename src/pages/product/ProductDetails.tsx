import { useLocation } from "react-router-dom";
import { urlFor } from "../../client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import useFetch from "../../hooks/useFetch";
import Product from "../../components/Product";
import { useState } from "react";
import { useStateContext } from "../../../context/StateContext";
import { ProductInt } from "../../models/product";

const query = "*[_type == 'product']";

const ProductDetails = () => {
  const [index, setIndex] = useState(0);
  const { decQtt, incQtt, qtt, onAdd }: any = useStateContext();
  const { data, loading, error, Loader } = useFetch(query);
  if (error) return error;
  if (loading) return <Loader />;

  const location = useLocation();
  const { product } = location.state;
  const { name, image, details, price } = product;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image[index] ? image[index] : image[0])}
              alt={name}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image.length > 0 &&
              image.map((item: string, i: number) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name} </h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details :</h4>
          <p>{details}</p>
          <p className="price">{price}€</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQtt}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qtt}</span>
              <span className="plus" onClick={incQtt}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qtt)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like..</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {data?.map((product: ProductInt) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
