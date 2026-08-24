import React from 'react'
import { useCart } from '../../context/CartContext';
import { ItemsCartContainer } from '../../components/Cart/ItemsCartContainer';
import { EmptyState } from '../../components/Emptystate/EmptyState';
import { ShoppingCart } from 'lucide-react';

export function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <EmptyState title='Carrito vacío'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <p>No hay productos en tu carrito.</p>
          <ShoppingCart size={38} color='indigo' />
        </div>
      </EmptyState>
    );
  }
  return <ItemsCartContainer cart={cart} />;
}
