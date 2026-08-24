import { Link } from 'react-router-dom';
import { NavLinkApp } from '../NavLinkApp/NavLinkApp';

export function DesktopNav() {
  return (
    <div className='hidden items-center gap-6 md:flex'>
      <NavLinkApp to='/'>Inicio</NavLinkApp>

      <NavLinkApp to='/category/figuras'>Figuras</NavLinkApp>

      <NavLinkApp to='/category/mangas'>Mangas</NavLinkApp>

      <NavLinkApp to='/category/accesorios'>Accesorios</NavLinkApp>
    </div>
  );
}
