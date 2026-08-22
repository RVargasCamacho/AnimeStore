import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Category } from './pages/Category/Category';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { Cart } from './pages/Cart/Cart';
import { Checkout } from './pages/Checkout/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category/:categoryId' element={<Category />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}

export default App;
