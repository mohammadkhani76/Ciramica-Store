import axios from "axios";
import { useEffect, useState } from "react";

export const useShops = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function getProductShop() {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("/data/shops.json");
      const data = response.data;
      // console.log(data);
      setShops(data.shops || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductShop();
  }, []);
  return { shops, loading, error };
};
