export function ErrorMessage({message}) {
  return (
    <div className='w-full flex flex-col gap-2 justify-center items-center py-12'>
      <p className='font-biorhyme text-red-400 font-semibold text-4xl'>
        ERROR:
      </p>
      <p className='text-center text-xl font-biorhyme'>{message}</p>
    </div>
  );
}
