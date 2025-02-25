import { Table } from 'react-bootstrap';
import './StockList.css';
import useStocks from '../../hooks/useStock';
import { useNavigate } from 'react-router-dom';

const StockList = () => {
  const navigate = useNavigate();
  const stocks = useStocks();

  const handleStockInfo = (stockCode: string) => {
    navigate(`/stock/${stockCode}`);
  };

  return (
    <div className='stock-list-container'>
      <p>📈 현재 주식 종목</p>
      <div className='stock-list-body'>
        <Table responsive='lg' striped bordered hover>
          <thead>
            <tr>
              <td>종목명</td>
              <td>종목코드</td>
              <td>지수</td>
              <td>현재가</td>
              <td>카테고리</td>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
                <tr key={stock.id}>
                  <td
                    onClick={() => handleStockInfo(stock.code)}
                    style={{ cursor: 'pointer', color: 'Blue' }}
                  >
                    {stock.name}
                  </td>
                  <td>{stock.code}</td>
                  <td>{stock.index}</td>
                  <td>{stock.latestHistory?.currentPrice ?? '조회 중...'}</td>
                  <td>{stock.category}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StockList;
