import { useEffect, useState } from 'react';


import { useParams } from 'react-router-dom';
import { getOrderByID } from '../../services/ordersService';


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
      console.log(data);
      
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>OrderConfirmation</div>
  )
}
