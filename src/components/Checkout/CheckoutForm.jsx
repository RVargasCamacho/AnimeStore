import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { Input } from '../Input/Input';
import { SelectBox } from '../SelectBox/SelectBox';

export function CheckoutForm({ formData, setFormData }) {
  const { shippingValue, setShippingValue } = useCart();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className='mx-auto w-full flex flex-col gap-8'>
      <section className='w-full flex flex-col gap-4'>
        <h2 className='font-semibold text-xl'>Información de contacto</h2>
        <Input
          label='Email'
          placeholder='test@mail.com'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </section>

      <section className='w-full flex flex-col gap-4'>
        <h2 className='font-semibold text-xl'>Información de envio</h2>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            label='Nombre'
            placeholder='Nombre completo'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            label='Teléfono'
            placeholder='+57 3001234567'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />

          <Input
            label='Dirección'
            placeholder='av. siempreviva'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
          />

          <Input
            label='Ciudad'
            placeholder='Barranquilla'
            id='city'
            name='city'
            value={formData.city}
            onChange={handleChange}
          />
        </div>
      </section>

      <section className='w-full flex flex-col gap-4'>
        <h2 className='font-semibold text-xl'>Método de envío</h2>
        <div className='w-full grid grid-cols-2 gap-4'>
          <SelectBox
            title='Standard'
            description='De 10-16 días hábiles'
            information={formatPrice(10000)}
            value={10000}
            isSelected={shippingValue === 10000}
            onClick={setShippingValue}
          />

          <SelectBox
            title='Express'
            description='De 3-5 días hábiles'
            information={formatPrice(18000)}
            value={18000}
            isSelected={shippingValue === 18000}
            onClick={setShippingValue}
          />
        </div>
      </section>
    </form>
  );
}
