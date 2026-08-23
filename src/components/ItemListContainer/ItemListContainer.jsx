import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ItemList } from '../ItemList/ItemList';
import { Loader } from '../Loader/Loader';

export function ItemListContainer({ title, products, isLoading, hasError }) {
  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8'>
      <h1 className='mb-6 text-2xl font-biorhyme font-semibold uppercase'>
        {title}
      </h1>
      {isLoading ? (
        <div className='flex justify-center'>
          <Loader />
        </div>
      ) : hasError ? (
        <div className='flex justify-center'>
          <ErrorMessage message={'Error al cargar los productos'} />
        </div>
      ) : !products || products.length === 0 ? (
        <div className='flex justify-center'>
          <p>No hay productos disponibles</p>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
}
