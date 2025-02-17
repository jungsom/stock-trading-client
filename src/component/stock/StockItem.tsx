import { useParams } from 'react-router-dom';
import useStockDetail from '../../hooks/useStockDetail';
import './StockItem.css';
import { Button, Form, Tab, Tabs } from 'react-bootstrap';
import { LineChart } from '@mui/x-charts';
import TradeList from '../trade/TradeList';

const StockItem = () => {
  const { code } = useParams();
  if (!code) {
    return <p> 주식 코드를 찾을 수 없습니다. </p>;
  }
  const stockDetail = useStockDetail(code);

  return (
    <>
      <div className='stock-info-header'>
        <div className='stock-detail'>
          <p>{stockDetail?.name}</p>
          <p>{code}</p>
          <p>{stockDetail?.index}</p>
          <p>{stockDetail?.category}</p>
        </div>
        <div className='stock-info-container'>
          <div className='row-container'>
            <div className='stock-item_1'>
              <p> 주가 그래프 </p>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true
                  }
                ]}
                width={880}
                height={200}
              />
            </div>
            <div className='stock-item_2'>
              <p> 호가창 </p>
              <TradeList code={code} />
            </div>
          </div>
          <div className='stock-item_3'>
            <p> 매수/매도 주문창 </p>
            <Tabs
              defaultActiveKey='buy'
              id='filled-tab-example'
              className='mb-3'
              fill
            >
              {/* 주문 탭 */}
              <Tab eventKey='buy' title='주문'>
                <div className='form-group'>
                  <Form.Label>주문 유형</Form.Label>
                  <Form.Select size='sm'>
                    <option value='1'>일반 주문</option>
                    <option value='2'>예약 주문</option>
                    <option value='3'>조건 주문</option>
                  </Form.Select>
                </div>
                <div className='form-group'>
                  <Form.Label>구매 가격</Form.Label>
                  <Form.Control type='price' id='inputprice' size='sm' />
                </div>
                <div className='form-group'>
                  <Form.Label>수량</Form.Label>
                  <Form.Control type='quantity' id='inputquantity' size='sm' />
                </div>
                <p style={{ marginBottom: '55px' }}>
                  {' '}
                  = 총 주문 금액: 200 만원{' '}
                </p>
                <Button variant='danger'>구매 예약하기</Button>
              </Tab>

              {/* 판매 탭 */}
              <Tab eventKey='profile' title='판매'></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockItem;
