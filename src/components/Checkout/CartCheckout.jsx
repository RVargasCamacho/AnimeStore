import { ItemCartList } from '../Cart/ItemCartList';
import { CheckoutBill } from './CheckoutBill';

export function CartCheckout({cart}) {
  return (
    <div className='w-full flex flex-col gap-4 bg-white p-6 md:p-8 rounded-xl border border-gray-100'>
      <ItemCartList cart={cart}/>

      <CheckoutBill/>
    </div>
  )
}
