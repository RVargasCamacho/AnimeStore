import { Link } from 'react-router-dom';

export function Item({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <article className='flex flex-col gap-2 overflow-hidden rounded-3xl bg-white cursor-pointer'>
        <div className='h-64 w-full rounded-3xl overflow-hidden'>
          <img
            src={product.image}
            alt={product.title}
            className='h-full w-full object-cover hover:scale-110 transition-transform duration-300'
          />
        </div>

        <div className='px-4'>
          <h2 className='text-lg font-semibold'>{product.title}</h2>

          <p className='text-gray-600'>${product.price}</p>
        </div>
      </article>
    </Link>
  );
}
