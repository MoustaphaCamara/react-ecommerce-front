import FooterBanner from "../components/FooterBanner";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/Product.tsx";
import useFetch from "../hooks/useFetch.ts";

const query = "*[_type == 'product']";

const Home: React.FC = () => {
  const { data, loading, error, Loader } = useFetch(query);
  if (error) return error;
  if (loading) return <Loader />;
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {data?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
