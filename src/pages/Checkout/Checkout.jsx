import { CheckoutContainer } from '../../components/Checkout/CheckoutContainer';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { useCart } from '../../context/CartContext';

export function Checkout() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <ErrorMessage message='No hay productos en el carrito' />;
  }

  return <CheckoutContainer cart={cart} />;
}
