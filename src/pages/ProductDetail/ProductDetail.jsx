import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProductById } from '../../services/productsService';
import { Loader } from '../../components/Loader/Loader';
import { NotFound } from '../../components/NotFound/NotFound';

export function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setError('Product ID no especificado');
      return;
    }
    getProductResult();
  }, [productId]);

  const getProductResult = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getProductById(productId);
      setProduct(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center py-12'>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message='Error al cargar el producto' />;
  }

  if (!product) {
    return <NotFound message='Producto no encontrado' />;
  }

  return <div>ProductDetail : {JSON.stringify(product, null, 2)}</div>;
}
