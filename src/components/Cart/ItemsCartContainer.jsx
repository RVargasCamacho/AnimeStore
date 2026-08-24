import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { TitleSection } from '../TitleSection/TitleSection';
import { ItemCartList } from './ItemCartList';
import { useCart } from '../../context/CartContext';

export function ItemsCartContainer({ cart }) {
  const navigate = useNavigate();
  const { subtotal } = useCart();

  const handleGoToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <section className='mx-auto w-full flex flex-col gap-4'>
      <TitleSection title='Carrito de compras' />

      <ItemCartList cart={cart} />

      <section className='w-full flex gap-4'>
        <div className='w-0 md:w-44'></div>
        <div className='w-full flex flex-col gap-4'>
          <section className='w-full bg-indigo-50 p-4 rounded-xl flex justify-between items-center text-xl'>
            <span>Subtotal: </span>
            <span className='font-bold font-biorhyme'>${subtotal}</span>
          </section>

          <Button
            size='lg'
            className='font-semibold text-lg'
            onClick={handleGoToCheckout}
          >
            Checkout
          </Button>
        </div>
      </section>
    </section>
  );
}
