import { useEffect, useState } from 'react';
import { fetchStocks } from '../services/StockService';

const useStocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks().then(setStocks);
  }, []);

  return stocks;
};

export default useStocks;
