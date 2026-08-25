import React from 'react'
import { CartItem } from './CartItem';

export function ItemCartList({ cart }) {
  return (
    <div className='flex flex-col'>
      {cart.map((item, index) => (
        <CartItem key={item.id} item={item} isFirstItem={index === 0} />
      ))}
    </div>
  );
}
