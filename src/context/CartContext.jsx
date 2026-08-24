import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingValue, setShippingValue] = useState(0);

  useEffect(() => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setSubtotal(subtotal);
  }, [cart]);

  useEffect(() => {
    const total = subtotal + shippingValue;
    setTotal(total);
  }, [subtotal, shippingValue]);

  const addItem = (product, quantity) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity }];
    });
  };

  const cleanCart = () => {
    setCart([]);
    setShippingValue(0);
    setSubtotal(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        subtotal,
        shippingValue,
        addItem,
        setShippingValue,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  return useContext(CartContext);
}
