import { ItemList } from '../ItemList/ItemList';


export function ItemListContainer() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-biorhyme font-semibold">
        Productos
      </h1>

      <ItemList />
    </section>
  )
}
