import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getOrderByID } from '../../services/ordersService';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { NotFound } from '../../components/NotFound/NotFound';
import { OrderConfirmationContainer } from '../../components/OrderConfirmation/OrderConfirmationContainer';

export function OrderConfirmation() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError('Order ID no especificado');
      return;
    }
    getOrderResult();
  }, [id]);

  const getOrderResult = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getOrderByID(id);
      setOrder(data);
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
    return <ErrorMessage message='Error al cargar el pedido' />;
  }

  if (!order) {
    return <NotFound message='Pedido no encontrado' />;
  }

  return <OrderConfirmationContainer order={order} />;
}
