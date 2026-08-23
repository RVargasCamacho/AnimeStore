import React from 'react'
import { ProductDetailInfo } from './ProductDetailInfo';

export function ProductDetailContainer({product}) {
  return (
    <div className='flex w-full flex-col gap-4 md:flex-row'>
      <section className='order-2 w-full flex-1 md:order-1'>
        <ProductDetailInfo product={product} />
      </section>

      <section className='order-1 w-full h-100 max-h-125 flex-1 lg:h-150 lg:max-h-150 overflow-hidden rounded-4xl md:order-2'>
        <img
          src={product.image}
          alt={product.title}
          className='h-full w-full object-cover'
        />
      </section>
    </div>
  )
}
