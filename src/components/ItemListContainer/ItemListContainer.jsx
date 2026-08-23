import { ItemList } from '../ItemList/ItemList';
import { Loader } from '../Loader/Loader';

export function ItemListContainer({ title, products, loading, error }) {
  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8'>
      <h1 className='mb-6 text-2xl font-biorhyme font-semibold'>{title}</h1>
      {loading ? (
        <div className='flex justify-center'>
          <Loader />
        </div>
      ) : error ? (
        <div className='flex justify-center'>
          <p>Error al cargar los productos</p>
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
