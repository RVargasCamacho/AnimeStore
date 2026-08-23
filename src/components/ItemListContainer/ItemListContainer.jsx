import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { getProducts } from '../../services/productsService';
import { Loader } from '../Loader/Loader';

export function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductResult();
  }, []);

  const getProductResult = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8'>
      <h1 className='mb-6 text-2xl font-biorhyme font-semibold'>Productos</h1>
      {loading ? (
        <div className='flex justify-center'>
          <Loader />
        </div>
      ) : error ? (
        <div className='flex justify-center'>
          <p>Error al cargar los productos</p>
        </div>
      ) : products.length === 0 ? (
        <div className='flex justify-center'>
          <p>No hay productos disponibles</p>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
}
