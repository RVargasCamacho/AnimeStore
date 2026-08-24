import { useState } from 'react';

import { useCart } from '../../context/CartContext';
import { createOrder } from '../../services/ordersService';

import { toast } from 'sonner';
import { Button } from '../Button/Button';
import { ItemCartList } from '../Cart/ItemCartList';
import { CheckoutBill } from './CheckoutBill';

export function CartCheckout({ validateForm, checkoutData, setOrderId }) {
  const { cart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendForm = async () => {
    if (!validateForm()) {
      toast.error('Por favor, rellena todos los campos del formulario.');
      return;
    }
    setIsLoading(true);
    try {
      const order = await createOrder(checkoutData());
      console.log(order);
      setOrderId(order.id);
      toast.success(`Orden enviada con éxito`);
    } catch (error) {
      setOrderId('');
      toast.error('Ocurrió un error al enviar el pedido');
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
