import { useEffect, useState } from 'react';
import { fetchTradeHistoryByUser } from '../../services/TradeService';
import { TradeHistory } from '../../interfaces/Trade';
import './UserTradeHistory.css';
import { Col, Nav, Row, Tab } from 'react-bootstrap';

function UserTradeHistory() {
  const [buyerHistory, setBuyerHistroy] = useState<TradeHistory[]>([]);
  const [sellerHistory, setSellerHistory] = useState<TradeHistory[]>([]);

  useEffect(() => {
    fetchTradeHistoryByUser('BUY').then(setBuyerHistroy);
    fetchTradeHistoryByUser('SELL').then(setSellerHistory);
  }, []);

  return (
    <div className='user-history-container'>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col sm={2}>
            <Nav variant='pills' className='flex-column user-history-nav'>
              <Nav.Item>
                <Nav.Link eventKey='first'>내 자산</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>구매 내역</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'>판매 내역</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <div className='user-history-title'> 🛒 내 자산 </div>
                <div className='user-history-account'> </div>
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <div className='user-history-title'> 🛒 구매 내역 </div>
                {buyerHistory?.map((item) => (
                  <>
                    <div className='user-history-content'>
                      <span style={{ float: 'left' }}>
                        {new Date(item.createdAt).toLocaleString('ko-KR', {
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric'
                        })}
                      </span>
                      <span> {item.price * item.quantity}원 | </span>
                      <span> {item.quantity}주 </span>
                      <span style={{ float: 'right' }}>
                        {new Date(item.createdAt).toLocaleString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                        {item.type === 'ALL_TRADE'
                          ? '  | 부분 거래'
                          : '  | 전체 거래'}
                      </span>
                    </div>
                  </>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey='third'>
                <div className='user-history-title'> 🛒 판매 내역 </div>
                {sellerHistory?.map((item) => (
                  <>
                    <div className='user-history-content'>
                      <span style={{ float: 'left' }}>
                        {new Date(item.createdAt).toLocaleString('ko-KR', {
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric'
                        })}
                      </span>
                      <span> {item.price * item.quantity}원 | </span>
                      <span> {item.quantity}주 </span>
                      <span style={{ float: 'right' }}>
                        {new Date(item.createdAt).toLocaleString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                        {item.type === 'ALL_TRADE'
                          ? '  | 부분 거래'
                          : '  | 전체 거래'}
                      </span>
                    </div>
                  </>
                ))}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default UserTradeHistory;
