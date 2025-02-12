export const fetchStocks = async() => {
    try {
        const response = await fetch('http://localhost:3000/stock');
        if (!response.ok) {
            throw new Error('데이터를 가져오는 데 실패하였습니다.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}