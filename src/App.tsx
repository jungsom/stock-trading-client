import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StockContainer from './container/stock';
import Header from './container/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/stock' element={<StockContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
