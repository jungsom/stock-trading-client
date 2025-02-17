import useTrades from '../../hooks/useTrade';
import { Table } from 'react-bootstrap';

const TradeList = ({ code }: { code: string }) => {
  const trades = useTrades(code);

  return (
    <>
     <div style={{ overflowY: 'auto', maxHeight: '160px' }}>
      <Table className='trade-table' size='sm' hover={true}>
        <thead style={{ backgroundColor: '#ffffff' }}>
          <tr>
            <th style={{ fontSize: '1rem', fontWeight: '500' }}>가격 (원)</th>
            <th style={{ fontSize: '1rem', fontWeight: '500' }}>수량 (주)</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => {
            const rowStyle =
              trade.type === 'SELL'
                ? { backgroundColor: '#e0f7fa' }
                : { backgroundColor: '#ffebee' };

            return (
              <tr key={trade.id} style={rowStyle}>
                <td  style={{ fontSize: '0.8rem', fontWeight: '500' }}>{trade.price}</td>
                <td  style={{ fontSize: '0.8rem', fontWeight: '500' }}>{trade.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default TradeList;
