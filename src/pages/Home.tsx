import FooterBanner from "../components/FooterBanner";
import HeroBanner from "../components/HeroBanner";
// import useFetch from "../hooks/useFetch.ts";

// const query = "*[_type == 'product']";

const Home = () => {
  // const { data, loading, error } = useFetch(query);

  // if (error) return error;
  // if (loading) return <p>Loading...</p>;
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      {/* <div className="products-container">{data?.map((item) => item.name)}</div> */}
      <FooterBanner />
    </>
  );
};

export default Home;
