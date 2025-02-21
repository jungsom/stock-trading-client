import { useParams } from 'react-router-dom';
import useStockDetail from '../../hooks/useStockDetail';
import './StockItem.css';
import TradeList from '../trade/TradeList';
import StockGraph from './StockGraph';
import TradeHistory from '../trade/TradeHistory';
import TradeOrder from '../trade/TradeOrder';

const StockItem = () => {
  const { code } = useParams();
  if (!code) {
    return <p> 주식 코드를 찾을 수 없습니다. </p>;
  }
  const stockDetail = useStockDetail(code);

  return (
    <>
      <div className='stock-info-header'>
        <div className='stock-detail-1'>
          <span>💰 {stockDetail?.name} </span>
          <span>({code})</span>
          <span>{stockDetail?.index},</span>
          <span>{stockDetail?.category}</span>
        </div>
        <div className='stock-info-container'>
          <div className='row-container'>
            <div className='stock-item_1'>
              <p> 주가 그래프 </p>
              <StockGraph code={code} />
            </div>
            <div className='row-container_1'>
              <div className='stock-item_2'>
                <p> 호가창 </p>
                <TradeList code={code} />
              </div>
              <div className='stock-item_2_1'>
                <p> 체결 내역 </p>
                <TradeHistory code={code} />
              </div>
            </div>
          </div>
          <div className='stock-item_3'>
            <p> 주문하기 </p>
            <TradeOrder code={code} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StockItem;
