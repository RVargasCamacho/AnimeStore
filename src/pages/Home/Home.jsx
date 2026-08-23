import { useEffect, useState } from 'react';

import { getProducts } from '../../services/productsService';

import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer';

export function Home() {
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
    <ItemListContainer
      title='Productos'
      products={products}
      isLoading={loading}
      hasError={error}
    />
  );
}
