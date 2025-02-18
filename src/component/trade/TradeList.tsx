import useTrades from '../../hooks/useTrade';
import './TradeList.css';

const TradeList = ({ code }: { code: string }) => {
  const trades = useTrades(code);

  return (
    <>
      <div className='order-list'>
        <h3>
          <span>매도량</span>
          <span>가격</span>
          <span>매수량</span>
        </h3>
        <div className='order-list-content'>
          <ul>
            {trades.map((trade, index) => (
              <li key={index} className={trade.type === 'BUY' ? 'buy' : 'sell'}>
                <span>{trade.type === 'SELL' ? trade.quantity : '-'}</span>
                <span>{trade.price} 원</span>
                <span>{trade.type === 'BUY' ? trade.quantity : '-'}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TradeList;
