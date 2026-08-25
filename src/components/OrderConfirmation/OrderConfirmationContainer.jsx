import { formatPrice } from '../../utils/formatPrice';
import { TitleSection } from '../TitleSection/TitleSection';
import { OrderConfirmationHeader } from './OrderConfirmationHeader';
import { OrderConfirmationItemList } from './OrderConfirmationItemList';

export function OrderConfirmationContainer({ order }) {
  return (
    <section className='flex w-full flex-col gap-4'>
      <TitleSection title='Pedido confirmado' />

      <div className='flex flex-col gap-4 border border-gray-200 rounded-lg p-4 bg-white'>
        <OrderConfirmationHeader
          orderDate={order.date.seconds * 1000}
          orderId={order.id}
          orderTotal={formatPrice(order.total)}
        />
        <div className='h-px bg-gray-200 w-full'></div>
        <OrderConfirmationItemList items={order.items} />
      </div>
    </section>
  );
}
