import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = fetch(url);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData(url);
  }, [url]);
  return {data,error,loading}
};
export default useFetch;
