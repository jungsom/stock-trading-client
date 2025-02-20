import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './component/common/header';
import StockPage from './pages/StockPage';
import LoginPage from './pages/LoginPage';
import { isAuthenticated } from './helper/auth';
import MainPage from './pages/MainPage';
import StockDetailPage from './pages/StockDetailPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/stock' element={<StockPage />} />
        <Route path='/stock/:code' element={<StockDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/my'
          element={
            isAuthenticated() ? (
              <MyPage /> 
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
