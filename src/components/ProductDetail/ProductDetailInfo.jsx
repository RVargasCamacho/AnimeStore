import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';

export function ProductDetailInfo({ product }) {
  return (
    <section className='flex flex-col gap-8'>
      <Link
        to={`/category/${product.category}`}
        className='uppercase text-sm text-gray-500'
      >
        {product.category}
      </Link>

      <article className='flex flex-col gap-2'>
        <header className='font-biorhyme text-4xl flex items-center gap-2 font-semibold'>
          <h1>{product.title}</h1>
        </header>
        <p className='text-gray-600 text-xl'>{formatPrice(product.price)}</p>
      </article>

      <article className='text-lg text-gray-500'>{product.description}</article>

      <article className='flex items-center gap-2'>
        {product.stock > 0 ? (
          <Check size={24} color='green' />
        ) : (
          <X size={24} color='red' />
        )}
        <span className='text-gray-500 text-md'>
          {product.stock > 0 ? 'Producto en stock' : 'Producto sin stock'}
        </span>
      </article>
    </section>
  );
}
