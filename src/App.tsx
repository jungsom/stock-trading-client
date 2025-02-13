import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import StockPage from './pages/StockPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/stock' element={<StockPage />} />
        <Route path='/my' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
