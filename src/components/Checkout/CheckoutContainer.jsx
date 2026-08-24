import { useState } from 'react';

import { useCart } from '../../context/CartContext';

import { CartCheckout } from './CartCheckout';
import { CheckoutForm } from './CheckoutForm';

export function CheckoutContainer() {
  const { shippingValue, subtotal, total, cart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
  });

  const validateForm = () => {
    if (
      formData.name === '' ||
      formData.phone === '' ||
      formData.email === '' ||
      formData.address === '' ||
      formData.city === ''
    ) {
      return false;
    }
    if (shippingValue <= 0) {
      return false;
    }
    return true;
  };

  const checkoutData = () => {
    const cartCheckout = cart.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      };
    });

    return {
      buyer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        city: formData.city,
      },
      items: cartCheckout,
      shipping: shippingValue,
      subtotal: subtotal,
      total: total,
    };
  };

  return (
    <div className='mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
      <section>
        <CheckoutForm formData={formData} setFormData={setFormData} />
      </section>

      <section>
        <CartCheckout validateForm={validateForm} checkoutData={checkoutData} />
      </section>
    </div>
  );
}
