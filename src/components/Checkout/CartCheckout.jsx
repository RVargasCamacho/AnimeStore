import { useCart } from '../../context/CartContext';
import { Button } from '../Button/Button';
import { ItemCartList } from '../Cart/ItemCartList';
import { CheckoutBill } from './CheckoutBill';

export function CartCheckout({ onSendForm }) {
  const { cart } = useCart();

  return (
    <div className='w-full flex flex-col gap-4 bg-white p-6 md:p-8 rounded-xl border border-gray-100'>
      <ItemCartList cart={cart} />

      <CheckoutBill>
        <Button onClick={onSendForm} size='lg'>
          Confirmar orden
        </Button>
      </CheckoutBill>
    </div>
  );
}
