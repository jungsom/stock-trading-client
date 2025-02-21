import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { StockHistory } from '../interfaces/Stock';

const useStockPrice = (code: string) => {
  const [stockPrice, setStockPrice] = useState<StockHistory>();

  useEffect(() => {
    const socket = io(import.meta.env.VITE_SERVER_URL);

    const handleStockUpdate = (data: any[]) => {
      console.log(`📩 Received stock :`, data);
      setStockPrice(data);
    };

    socket.on('stock', handleStockUpdate);

    socket.emit('sent-stock', code);
    return () => {
      socket.disconnect();
    };
  }, []);

  return stockPrice;
};

export default useStockPrice;
