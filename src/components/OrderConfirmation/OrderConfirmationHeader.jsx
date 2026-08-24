import React from 'react'

function OrderHeaderItem({title, value}) {
  return (
    <div className='flex flex-col gap-2'>
      <p className='font-semibold text-lg'>{title}</p>
      <p className='text-gray-500'>{value}</p>
    </div>
  )
}

const getDateAndTime = (date) => {
  const dateObject = new Date(date);
  const hourAMPM = dateObject.toLocaleTimeString('es-ES', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true
});

  return `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()} ${hourAMPM}`;
};

export function OrderConfirmationHeader({orderId, orderDate, orderTotal}) {
  return (
    <section className='w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
      <OrderHeaderItem title='ID del pedido' value={orderId} />
      <OrderHeaderItem title='Fecha' value={getDateAndTime(orderDate)} />
      <OrderHeaderItem title='Total' value={orderTotal} />
    </section>
  );
}
