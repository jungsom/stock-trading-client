import { useState } from 'react';
import { postTrade } from '../../services/TradeService';
import { TradeInput } from '../../interfaces/Trade';
import { Button, Form, Tab, Tabs } from 'react-bootstrap';
import './../stock/StockItem.css';

const TradeOrder = ({ code }: { code: string }) => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (orderType: 'BUY' | 'SELL') => {
    const orderData: TradeInput = {
      code: code,
      price: price,
      quantity: quantity,
      type: orderType,
    };

    postTrade(orderData)
      .then((response) => {
        console.log(response);
        alert(`주문 성공: ${response.isSuccess ? '성공' : '실패'}`);
        window.location.reload();
      })
      .catch((error) => {
        alert(`주문 실패: ${error.message}`);
      });
  };

  return (
    <>
        <Tabs
          defaultActiveKey='buy'
          id='filled-tab-example'
          className='mb-3'
          fill
        >
          {/* 주문 탭 */}
          <Tab eventKey='buy' title='구매'>
            <div className='form-group'>
              <Form.Label>구매 유형</Form.Label>
              <Form.Select size='sm'>
                <option value='1'>일반 구매</option>
                <option value='2' disabled>
                  예약 구매
                </option>
                <option value='3' disabled>
                  조건 구매
                </option>
              </Form.Select>
            </div>
            <div className='form-group'>
              <Form.Label>구매 가격</Form.Label>
              <Form.Control type='price' id='inputprice' size='sm' onChange={(e) => setPrice(Number(e.target.value))} />
            </div>
            <div className='form-group'>
              <Form.Label>수량</Form.Label>
              <Form.Control type='quantity' id='inputquantity' size='sm' onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>
            <p style={{ marginBottom: '55px' }}> = 총 주문 금액: {price * quantity} 원 </p>
            <Button variant='danger' onClick={() => handleSubmit('BUY')}>구매 예약하기</Button>
          </Tab>

          {/* 판매 탭 */}
          <Tab eventKey='profile' title='판매'></Tab>
          <Button variant='danger' onClick={() => handleSubmit('SELL')}>판매 예약하기</Button>
        </Tabs>
    </>
    );
};

export default TradeOrder;
