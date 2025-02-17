import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { Stock, StockHistory } from '../interfaces/Stock';

const useStockPrice = (stocks: Stock[]) => {
  const [stockPrices, setStockPrices] = useState<{ [key: string]: number }>({});
  const socketRef = useRef(io(import.meta.env.VITE_SERVER_URL));

  useEffect(() => {
    const socket = socketRef.current;

    const handleStockUpdate = (data: StockHistory) => {
      console.log(`📩 Received stock :`, data);
      setStockPrices((prevPrices) => ({
        ...prevPrices,
        [data.code]: data.currentPrice
      }));
    };

    socket.on('stock', handleStockUpdate);

    stocks.forEach((stock) => {
      socket.emit('sent-stock', { code: stock.code });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return stockPrices;
};

export default useStockPrice;
