import clsx from 'clsx';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './MobileNav.module.css';

export function MobileNav({isOpen, onClose }) {
  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex overflow-y-auto bg-black/50 transition-opacity duration-300 md:hidden',
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      <div className={clsx("border-t absolute h-full border-gray-100 bg-white md:hidden w-[80%]", styles.menu, isOpen && styles.open)}>
        <header className="flex w-full justify-end p-4">
          <button onClick={onClose} className="">
            <X size={24} />
          </button>
        </header>

        <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
          <Link
            to="/"
            onClick={onClose}
            className="border-b border-gray-100 py-3 text-gray-700 transition hover:text-gray-900"
          >
            Inicio
          </Link>

          <Link
            to="/category/figuras"
            onClick={onClose}
            className="border-b border-gray-100 py-3 text-gray-700 transition hover:text-gray-900"
          >
            Figuras
          </Link>

          <Link
            to="/category/mangas"
            onClick={onClose}
            className="border-b border-gray-100 py-3 text-gray-700 transition hover:text-gray-900"
          >
            Mangas
          </Link>

          <Link
            to="/category/accesorios"
            onClick={onClose}
            className="py-3 text-gray-700 transition hover:text-gray-900"
          >
            Accesorios
          </Link>
        </div>
      </div>
    </div> 

  );
}
