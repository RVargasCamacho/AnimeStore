import { useEffect, useState } from 'react';

import { useCart } from '../../context/CartContext';

import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CartWidget() {
  const { cart } = useCart();
  const [quantityItems, setQuantityItems] = useState(cart.length);

  useEffect(() => {    
    setQuantityItems(cart.length);
  }, [cart]);

  return (
    <Link
      to='/cart'
      className='text-gray-600 transition hover:text-gray-900 relative'
      aria-label='Carrito de compras'
    >
      {quantityItems > 0 && 
        <span 
          className="absolute -top-3 -right-2 w-5 h-5 text-xs bg-red-500 text-white text-center rounded-full z-1 flex justify-center items-center">
          {quantityItems}
        </span>
      }
      <ShoppingCart size={22} />
    </Link>
  )
}
