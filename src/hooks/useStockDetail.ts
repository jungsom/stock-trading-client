import { useEffect, useState } from 'react';
import { fetchStockDetail } from '../services/StockService';
import { Stock } from '../interfaces/Stock';

const useStockDetail = (code: string): Stock | undefined => {
  const [stockDetail, setStockDetail] = useState();

  useEffect(() => {
    fetchStockDetail(code).then(setStockDetail);
  }, []);

  return stockDetail;
};

export default useStockDetail;
