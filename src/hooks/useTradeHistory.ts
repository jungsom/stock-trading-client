import { useEffect, useState } from 'react';
import { Trade, TradeHistory } from '../interfaces/Trade';
import { fetchTradeHistory } from '../services/TradeService';

const useTradeHistory = (code: string): TradeHistory[] => {
  const [tradeHistory, setTradeHistory] = useState([]);

  useEffect(() => {
    fetchTradeHistory(code).then(setTradeHistory);
  }, []);

  return tradeHistory;
};

export default useTradeHistory;
