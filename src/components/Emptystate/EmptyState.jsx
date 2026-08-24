import { TitleSection } from '../TitleSection/TitleSection';

export function EmptyState({title, children}) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <TitleSection title={title} />
      <div className="text-lg">{children}</div>
    </div>
  )
}
