import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { CartWidget } from '../CartWidget/CartWidget';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };
  return (
    <header className='sticky top-0 z-50 border-b border-gray-200 bg-white w-full'>
      <nav className='mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6'>
        <Link
          to='/'
          onClick={closeMenu}
          className='font-biorhyme text-xl text-gray-900'
        >
          Anime Store
        </Link>

        <DesktopNav />

        <div className='flex items-center gap-4'>
          <CartWidget />

          <button
            type='button'
            onClick={toggleMenu}
            className='text-gray-600 transition hover:text-gray-900 md:hidden'
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <MobileNav isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
