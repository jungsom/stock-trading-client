import { useEffect, useState } from "react";
import { fetchStocks } from "../api/stock";
import StockList from "../component/StockList";

const StockContainer = () => {
    const [stocks, setStocks] = useState([]);
    
    useEffect(() => {
        const getStock = async () => {
            const data = await fetchStocks();
            console.log(data);
            if (data) {
                setStocks(data);
            } else {
                console.error('데이터를 가져오는 데 실패하였습니다.');
            }
        };

        getStock();
    }, []);


    return <StockList stocks= {stocks} />;
}

export default StockContainer;