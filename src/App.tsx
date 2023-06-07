import { useEffect, useState } from "react";
import { client } from "./client";

function App() {
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
      <h1>App</h1>
    </>
  );
}

export default App;
