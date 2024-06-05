import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    } catch (error) {
      console.log(error)
    }
   
  }, []);

  return data;
};

export default useFetch;
