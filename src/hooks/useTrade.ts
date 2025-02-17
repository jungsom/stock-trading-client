import { useEffect, useState } from 'react';
import { Trade } from '../interfaces/Trade';
import { fetchTrade } from '../services/TradeService';

const useTrades = (code: string): Trade[] => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetchTrade(code).then(setTrades);
  }, []);

  return trades;
};

export default useTrades;
