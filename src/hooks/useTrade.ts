import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Trade } from '../interfaces/Trade';

const useTrade = (code: string) => {
  const [trade, setTrade] = useState<Trade[]>([]);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_SERVER_URL);

    const handleTradeUpdate = (data: any[]) => {
      console.log(`📩 Received trade :`, data);
      setTrade(data);
    };

    socket.on('trade', handleTradeUpdate);

    socket.emit('sent-trade', code);
    return () => {
      socket.disconnect();
    };
  }, []);

  return trade;
};

export default useTrade;
