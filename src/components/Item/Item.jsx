export function Item({ product }) {
  return (
    <article className='overflow-hidden rounded-lg border border-gray-200 bg-white'>
      <img
        src={product.image}
        alt={product.name}
        className='h-64 w-full object-cover'
      />

      <div className='p-4'>
        <h2 className='text-lg font-semibold'>
          {product.name}
        </h2>

        <p className='mt-2 text-gray-600'>
          ${product.price}
        </p>
      </div>
    </article>
  );
}