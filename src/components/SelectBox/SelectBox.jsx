import clsx from 'clsx';
import { Check } from 'lucide-react';

export function SelectBox({title, description, information, value, isSelected, onClick}) {

  const handleClick = () => {
    if(!onClick) return;
    onClick(value);
  };

  return (
    <div 
      className={
        clsx(
          'w-full flex flex-col gap-4 justify-between p-4 border bg-white rounded-lg h-36 cursor-pointer', 
          isSelected ? 'border-indigo-500' : 'border-gray-300'
        )}
      onClick={handleClick}  
    >
      
      <section className='flex flex-col gap-1 relative'>
        <header className="font-semibold text-lg">{title}</header>
        <p className='text-gray-500 truncate'>{description}</p>
        {isSelected && <span className='absolute top-0 right-0 '>
          <Check size={16} color='indigo' />
          </span>}
      </section>

      <section>
        <p className="font-semibold text-lg">{information}</p>
      </section>
    </div>
  )
}
