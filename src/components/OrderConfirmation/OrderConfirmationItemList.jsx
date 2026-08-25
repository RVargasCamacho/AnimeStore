import { OrderConfirmationItem } from './OrderConfirmationItem';

export function OrderConfirmationItemList({items}) {
  return (
    <div className='flex flex-col'>
      {items.map((item, index) => (
        <OrderConfirmationItem
          key={item.id}
          item={item}
          isLastItem={index === items.length - 1}
        />
      ))}
    </div>
  );
}
