import React from 'react'
import { useCart } from '../../context/CartContext';
import { ItemsCartContainer } from '../../components/Cart/ItemsCartContainer';

export function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h1>Carrito vacío</h1>
        <p>No hay productos en tu carrito.</p>
      </div>
    );
  }
  return <ItemsCartContainer cart={cart} />;
}
