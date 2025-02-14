import { useEffect, useState } from 'react';
import { fetchStocks } from '../services/StockService';
import { Stock } from '../interfaces/Stock';

const useStocks = (): Stock[] => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks().then(setStocks);
  }, []);

  return stocks;
};

export default useStocks;
