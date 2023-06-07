import { useEffect, useState } from "react";
import { client } from "../client";

export default function useFetch(query: any) {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await client.fetch(query);
        setData(response);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
    //https://usefulangle.com/post/248/javascript-async-anonymous-function-iife
  }, [query]);

  return { data, error, loading };
}
