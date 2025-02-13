import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { Stock, StockHistory } from '../interfaces/Stock';

const useStockPrice = (stocks: Stock[]) => {
  const [stockPrices, setStockPrices] = useState<{ [key: string]: number }>({});
  const socketRef = useRef(io(import.meta.env.VITE_SERVER_URL));

  useEffect(() => {
    const socket = socketRef.current;

    socket.on('stock', (data: StockHistory) => {
      console.log(`📩 Received stock :`, data);
      setStockPrices((prevPrices) => ({
        ...prevPrices,
        [data.code]: data.currentPrice,
      }));
    });

    stocks.forEach((stock) => {
      socket.emit('sent-stock', { code: stock.code });
    });

    return () => {
      socket.off('stock');
    };
  }, [stocks]);

  return stockPrices;
};

export default useStockPrice;
