import { useEffect, useState } from "react";
import axios from "axios";

export const useData = (category: String) => {
  // Pull to refresh
  const [refreshing, setRefresing] = useState(false);
  const [data, setData] = useState({});

  const getData = async () => {
    setRefresing(true);
    await axios
      .get(`https://api.reddit.com/r/pics/${category}`)
      .then((response) => {
        setRefresing(false);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    refreshing,
    data,
    getData,
  };
};
