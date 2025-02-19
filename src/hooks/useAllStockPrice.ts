import { useEffect, useState } from 'react';
import { fetchAllStockPrices } from '../services/StockService';
import { StockHistory } from '../interfaces/Stock';

const useAllStockPrices = (code: string): StockHistory[] | undefined => {
  const [allStockPrices, setAllStockPrices] = useState();

  useEffect(() => {
    fetchAllStockPrices(code).then(setAllStockPrices);
  }, []);

  return allStockPrices;
};

export default useAllStockPrices;
