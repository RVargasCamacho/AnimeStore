import { EmptyState } from '../Emptystate/EmptyState';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ItemList } from '../ItemList/ItemList';
import { Loader } from '../Loader/Loader';
import { TitleSection } from '../TitleSection/TitleSection';

export function ItemListContainer({ title, products, isLoading, hasError }) {
  return (
    <section className='mx-auto w-full'>
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
          <EmptyState title={title}>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <p>No hay productos disponibles</p>
            </div>
          </EmptyState>
        </div>
      ) : (
        <>
          <TitleSection title={title} />
          <ItemList products={products} />
        </>
      )}
    </section>
  );
}
