import { useState } from 'react';

import { useCart } from '../../context/CartContext';
import { createOrder } from '../../services/ordersService';

import { toast } from 'sonner';
import { Button } from '../Button/Button';
import { ItemCartList } from '../Cart/ItemCartList';
import { CheckoutBill } from './CheckoutBill';
import { useNavigate } from 'react-router-dom';

export function CartCheckout({ validateForm, checkoutData }) {
  const { cart, cleanCart } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendForm = async () => {
    if (!validateForm()) {
      toast.error('Por favor, rellena todos los campos del formulario.');
      return;
    }
    setIsLoading(true);
    try {
      const order = await createOrder(checkoutData());
      cleanCart();
      navigate(`/order-confirmation/${order.id}`, {
        replace: true,
      });
    } catch (error) {
      const message = error.message || 'Ocurrió un error al enviar el pedido';
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full flex flex-col gap-4 bg-white p-6 md:p-8 rounded-xl border border-gray-100'>
      <ItemCartList cart={cart} />

      <CheckoutBill>
        <Button
          onClick={handleSendForm}
          size='lg'
          disabled={isLoading}
          isLoading={isLoading}
        >
          {isLoading ? 'Enviando' : 'Confirmar orden'}
        </Button>
      </CheckoutBill>
    </div>
  );
}
