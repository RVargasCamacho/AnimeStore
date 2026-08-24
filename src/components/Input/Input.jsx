import clsx from 'clsx';


export function Input({label, placeholder, id, ...props}) {
  return (
    <div className='w-full flex flex-col gap-2'>
      <label htmlFor={id} className='font-semibold'>{label}</label>
      <input 
        id={id}
        type={props.type} 
        placeholder={placeholder}
        className={clsx('w-full rounded-lg border border-gray-300 p-2 text-sm bg-white focus:outline-indigo-500', props.className)}
        {...props}
        />
    </div>
  )
}
