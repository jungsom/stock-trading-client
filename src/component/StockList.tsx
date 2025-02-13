import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { io } from 'socket.io-client';
import './StockList.css';

interface Stock {
  id: number;
  name: string;
  code: string;
  category: string;
  index: string;
  latestHistory?: {
    currentPrice: number;
  };
}

interface StockListProps {
  stocks: Stock[];
}

const StockList: React.FC<StockListProps> = ({ stocks }) => {
  const [stockPrices, setStockPrices] = useState<{ [key: string]: number }>({});
  const socket = io(import.meta.env.VITE_SERVER_URL); 

  useEffect(() => {
    socket.on('stock', (data) => {
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
      socket.disconnect(); 
    };
  }, [stocks]);

  return (
    <div className='stock-container'>
      <div className='stock-header'>
        <p>📈 현재 주식 종목</p>
      </div>
      <div className='stock-body'>
        <Table responsive='lg' className='stock-table' variant='striped'>
          <thead>
            <tr>
              <th>종목명</th>
              <th>종목코드</th>
              <th>지수</th>
              <th>현재가</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.name}</td>
                <td>{stock.code}</td>
                <td>{stock.index}</td>
                <td>{stockPrices[stock.code] ?? '조회 중...'}</td> {/* 가격 표시 */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StockList;
