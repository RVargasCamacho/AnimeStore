import { useState } from 'react';
import { Button } from '../Button/Button';
import { Minus, Plus } from 'lucide-react';

export function ItemCount({ stock, onAdd }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button
          type='button'
          onClick={decrement}
          disabled={quantity === 1}
          size="sm"
          className="w-8 h-8 flex justify-center items-center"
        >
          <Minus size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          type='button'
          onClick={increment}
          disabled={quantity === stock}
          size="sm"
          className="w-8 h-8 flex justify-center items-center"
        >
          <Plus size={16} />
        </Button>

        <span>{quantity < 2 ? "Unidad agregada" : "Unidades agregadas"}</span>  
      </div>

      <Button
        type='button'
        onClick={handleAdd}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}