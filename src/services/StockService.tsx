export const fetchStocks = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/stock`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('주식 정보를 받아올 수 없습니다.');
  }
};

