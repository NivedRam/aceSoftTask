import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(apiUrl,refresh) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const datas = await axios.get(apiUrl);
          console.log("data here", datas);

          const response = datas.data;

          setData(response.slice(0, 10));
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }, 2000);
    };
    fetchData();
  }, [apiUrl,refresh]);
  return { loading, error, data };
}

export default useFetch;
