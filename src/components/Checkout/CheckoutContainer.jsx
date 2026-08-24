import { useState } from 'react';
import { CartCheckout } from './CartCheckout';
import { CheckoutForm } from './CheckoutForm';

export  function CheckoutContainer({cart}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
  });

  return (
    <div className='mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
      <section>
        <CheckoutForm formData={formData} setFormData={setFormData}/>
      </section>

      <section>
        <CartCheckout cart={cart}/>
      </section>
    </div>
  )
}
