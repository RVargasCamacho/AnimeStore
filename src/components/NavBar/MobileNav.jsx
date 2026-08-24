import clsx from 'clsx';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './MobileNav.module.css';
import { NavLinkApp } from '../NavLinkApp/NavLinkApp';

export function MobileNav({ isOpen, onClose }) {
  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex overflow-y-auto bg-black/50 transition-opacity duration-300 md:hidden overflow-hidden',
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div
        className={clsx(
          'border-t absolute h-full border-gray-100 bg-white md:hidden w-[80%]',
          styles.menu,
          isOpen && styles.open,
        )}
      >
        <header className='flex w-full justify-end p-4'>
          <button onClick={onClose} className=''>
            <X size={24} />
          </button>
        </header>

        <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3'>
          <NavLinkApp
            to='/'
            onClick={onClose}
            className='border-b border-gray-200 py-2 px-3'
          >
            Inicio
          </NavLinkApp>

          <NavLinkApp
            to='/category/figuras'
            onClick={onClose}
            className='border-b border-gray-200 py-2 px-3'
          >
            Figuras
          </NavLinkApp>

          <NavLinkApp
            to='/category/mangas'
            onClick={onClose}
            className='border-b border-gray-200 py-2 px-3'
          >
            Mangas
          </NavLinkApp>

          <NavLinkApp
            to='/category/accesorios'
            onClick={onClose}
            className='border-b border-gray-200 py-2 px-3'
          >
            Accesorios
          </NavLinkApp>
        </div>
      </div>
    </div>
  );
}
