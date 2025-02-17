import { Table } from 'react-bootstrap';
import './StockList.css';
import useStocks from '../../hooks/useStock';
import useStockPrice from '../../hooks/useStockPrice';
import { useNavigate } from 'react-router-dom';

const StockList = () => {
  const navigate = useNavigate();
  const stocks = useStocks();
  const stockPrices = useStockPrice(stocks);

  const handleStockInfo = (stockCode: string) => {
    navigate(`/stock/${stockCode}`);
  };


  return (
    <div className='stock-container'>
      <div className='stock-header'>
        <p>📈 현재 주식 종목</p>
      </div>
      <div className='stock-body'>
        <Table responsive='lg' className='stock-table'>
          <thead>
            <tr>
              <th>종목명</th>
              <th>종목코드</th>
              <th>지수</th>
              <th>현재가</th>
              <th>카테고리</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.id}>
                <td onClick={() => handleStockInfo(stock.code)} style={{cursor: 'pointer', color: 'Blue'}}>{stock.name}</td>
                <td>{stock.code}</td>
                <td>{stock.index}</td>
                <td>
                  {stockPrices[stock.code] ??
                    stock.latestHistory?.currentPrice ??
                    '조회 중...'}
                </td>
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
