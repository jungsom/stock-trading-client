export const fetchTrade = async (code: String) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/trade/${code}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('주식 상세 정보를 받아올 수 없습니다.');
  }
};

export const fetchTradeHistory = async (code: String) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/trade/history/${code}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('주식 거래 내역을 받아올 수 없습니다.');
  }
};
