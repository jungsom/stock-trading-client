import { TradeInput } from '../interfaces/Trade';

export const postTrade = async (orderType: TradeInput) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/trade`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      credentials: 'include',
      body: JSON.stringify(orderType)
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('주식 거래를 할 수 없습니다.');
  }
};

export const fetchTradeHistoryByUser = async (type: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/trade/my/history?type=${type}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        credentials: 'include'
      }
    );
    console.log(response);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('사용자 주식 거래 내역을 받아올 수 없습니다.');
  }
};
