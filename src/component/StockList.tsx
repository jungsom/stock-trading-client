import React from 'react';
import { Col, ListGroup, Row, Table } from 'react-bootstrap';
import './StockList.css';

interface Stock {
  id: number;
  name: string;
  code: string;
  category: string;
  index: string;
  latestHistory: {
    currentPrice: number;
  };
}

interface StockListProps {
  stocks: Stock[];
}

const StockList: React.FC<StockListProps> = ({ stocks }) => {
  return (
    <div className='stock-container'>
      <div className='stock-header'>
      <p> 📈 현재 주식 종목 </p>
      </div>
      <div className='stock-body'>
      <Table responsive='lg' className='stock-table' variant='striped'>
        <thead>
          <tr>
            <th>종목명</th>
            <th>종목코드</th>
            <th>지수</th>
            <th>현재가</th>
            {/* <th>카테고리</th> */}
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.code}</td>
              <td>{stock.index}</td>
              {/* <td>{stock.latestHistory.currentPrice}원</td> */}
              <td>{stock.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
};
export default StockList;
