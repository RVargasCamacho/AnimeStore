import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Category } from './pages/Category/Category';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { Cart } from './pages/Cart/Cart';
import { Checkout } from './pages/Checkout/Checkout';
import { MainLayout } from './components/layout/MainLayout';
import { NotFound } from './components/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoryId' element={<Category />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />

        <Route path='*' element={<NotFound message='Página no encontrada' />} />
      </Route>
    </Routes>
  );
}

export default App;
