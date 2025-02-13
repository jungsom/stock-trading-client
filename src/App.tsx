import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import LoginContainer from './component/Login';
import StockPage from './pages/StockPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/stock' element={<StockPage />} />
        <Route path='/my' element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
