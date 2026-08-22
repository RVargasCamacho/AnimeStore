import { useEffect } from 'react';
import { getProducts } from './services/productsService';

function App() {
  useEffect(() => {
    getProducts().then((products) => {
      console.log(products);
    });
  }, []);

  return (
    <>
      <h1 className='text-red-400'>Anime Store</h1>
    </>
  );
}

export default App;
