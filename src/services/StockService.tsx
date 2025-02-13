export const fetchStocks = async () => {
  try {
    const response = await fetch('http://localhost:3000/stock');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
