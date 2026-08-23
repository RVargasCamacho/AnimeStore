import React from 'react'
import { ItemCart } from './ItemCart';

export function ItemCartList({cart}) {
  return (
    <div className='flex flex-col'>
      {cart.map((item, index) => (
        <ItemCart key={cart.id} item={item} isFirstItem={index === 0} />
      ))}
    </div>
  )
}
