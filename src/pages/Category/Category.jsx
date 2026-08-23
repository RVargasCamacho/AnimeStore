import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../services/productsService';
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer';

export function Category() {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategoryProducts();
  }, [categoryId]);

  const getCategoryProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProductsByCategory(categoryId);
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
      title={categoryId}
      products={products}
      loading={loading}
      error={error}
    />
  );
}
