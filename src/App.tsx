import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './component/common/header';
import StockPage from './pages/StockPage';
import LoginPage from './pages/LoginPage';
import { isAuthenticated } from './helper/auth';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/stock' element={<StockPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/my'
          element={
            isAuthenticated() ? (
              <div>어서오세요. 마이페이지입니다.</div>
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
