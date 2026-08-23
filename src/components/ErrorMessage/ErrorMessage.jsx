export function ErrorMessage({message}) {
  return (
    <div className='flex justify-center py-12 text-red-400'>
      <p className="font-biorhyme">ERROR:</p>
      <p>{message}</p>
    </div>
  )
}
