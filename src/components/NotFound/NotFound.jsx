export function NotFound({message}) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-12'>
      <h2 className='text-4xl font-biorhyme'>404:</h2>
      <p className='text-2xl'>{message}</p>
    </div>
  )
}
