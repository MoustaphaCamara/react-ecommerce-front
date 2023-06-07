import { useEffect, useState } from "react";
import FooterBanner from "../components/FooterBanner";
import HeroBanner from "../components/HeroBanner";
import { client } from "../client";

const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("*[_type == 'product']");

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.fetch(query);
      setData(response);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Prod1", "Prod2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
