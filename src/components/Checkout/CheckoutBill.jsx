import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';

export function CheckoutBill({ children }) {
  const { total, shippingValue, subtotal, cart } = useCart();

  return (
    <section className='w-full flex flex-col gap-6 p-4'>
      <article className='w-full flex flex-col gap-3'>
        <div className='font-medium text-lg w-full flex justify-between'>
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <div className='font-medium text-lg w-full flex justify-between'>
          <span>Envío</span>
          <span>{formatPrice(shippingValue)}</span>
        </div>
      </article>

      <div className='w-full h-px bg-gray-200'></div>
      <article className='font-medium text-lg w-full flex justify-between'>
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </article>

      <div className='w-full flex flex-col gap-4'>{children}</div>
    </section>
  );
}
