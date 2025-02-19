import useTradeHistory from '../../hooks/useTradeHistory';
import './TradeList.css';

const TradeHistory = ({ code }: { code: string }) => {
  const tradeHistory = useTradeHistory(code);

  return (
    <>
      <div className='order-list'>
        <h3>
          <span>매도량</span>
          <span>가격</span>
          <span>매수량</span>
        </h3>
        <div className='order-list-content' style={{ backgroundColor: '#d9ff9d'}}>
          <ul>
            {tradeHistory.map((trade, index) => (
              <li key={index}>
                <span>{trade.type === 'ALL_TRADE' ? '전체 거래' : '부분 거래'}</span>
                <span>{trade.price} 원</span>
                <span>{trade.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TradeHistory;
