import StockList from '../component/StockList';
import useStocks from '../hooks/useStock';

const StockPage = () => {
  const stocks = useStocks();

  return <StockList stocks={stocks} />;
};

export default StockPage;
