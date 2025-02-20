import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Trade, TradeHistory } from '../interfaces/Trade';

const useTradeHistory = (code: string) => {
  const [tradeHistory, setTradeHistory] = useState<TradeHistory[]>([]);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_SERVER_URL);

    const handleTradeHistoryUpdate = (data: any[]) => {
      console.log(`📩 Received trade history :`, data);
      setTradeHistory(data);
    };

    socket.on('trade-history', handleTradeHistoryUpdate);

    socket.emit('sent-trade-history', code);
    return () => {
      socket.disconnect();
    };
  }, []);

  return tradeHistory;
};

export default useTradeHistory;
