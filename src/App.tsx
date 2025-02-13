import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StockContainer from './container/stock';
import Header from './container/header';
import LoginContainer from './container/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/stock' element={<StockContainer />} />
        <Route path='/my' element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
