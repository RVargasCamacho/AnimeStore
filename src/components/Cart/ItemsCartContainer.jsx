import { Button } from '../Button/Button';
import { TitleSection } from '../TitleSection/TitleSection';
import { ItemCartList } from './ItemCartList';

export function ItemsCartContainer({cart}) {

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className='mx-auto w-full flex flex-col gap-4'>
      <TitleSection title="Carrito de compras" />

      <ItemCartList cart={cart} />

      <section className="w-full flex gap-4">
        <div className="w-0 md:w-44"></div>
        <div className="w-full flex flex-col gap-4">
          <section className="w-full bg-indigo-50 p-4 rounded-xl flex justify-between items-center text-xl">
            <span>Total: </span>
            <span className="font-bold font-biorhyme">${total}</span>
          </section>

          <Button size="lg" className="font-semibold text-lg">Checkout</Button>
        </div>
      </section>
    </section>
  )
}
