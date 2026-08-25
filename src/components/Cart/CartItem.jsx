import clsx from 'clsx';
import { Check, X } from 'lucide-react';
import React, { useState } from 'react'
import { formatPrice } from '../../utils/formatPrice';

export function CartItem({ item, isFirstItem }) {
  const [hasStock, setHasStock] = useState(item.stock > 0);

  return (
    <article
      className={clsx(
        'w-full flex gap-4 border-b border-gray-200 p-4',
        isFirstItem && 'border-t',
      )}
    >
      <section className='w-40 h-40 md:w-44 md:h-44 bg-gray-300 rounded-lg overflow-hidden'>
        <img
          src={item.image}
          alt={item.title}
          className='w-full h-full object-cover'
        />
      </section>

      <section className='flex flex-col justify-between w-full'>
        <article className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
          <div className='grid grid-cols-1 gap-2'>
            <h2 className='text-md lg:text-lg font-semibold font-biorhyme'>
              {item.title}
            </h2>
            <p className='text-gray-500'>{formatPrice(item.price)}</p>
          </div>

          <div className='flex lg:flex-col gap-2 items-center'>
            <p>Cantidades: </p>
            <p className='font-regular lg:font-semibold text-lg'>
              {item.quantity}
            </p>
          </div>

          <div className='flex lg:flex-col gap-2 items-end'>
            <p>Subtotal:</p>
            <p className='font-regular lg:font-semibold text-lg'>
              {formatPrice(item.quantity * item.price)}
            </p>
          </div>
        </article>

        <article className='flex gap-2 items-center'>
          <span>
            {hasStock ? (
              <Check size={16} color='green' />
            ) : (
              <X size={16} color='red' />
            )}
          </span>
          <span> {hasStock ? 'En stock' : 'Sin stock'}</span>
        </article>
      </section>
    </article>
  );
}
