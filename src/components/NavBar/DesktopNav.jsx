import { Link } from 'react-router-dom';

export function DesktopNav() {
  return (
    <div className="hidden items-center gap-7 md:flex">
      <Link
        to="/"
        className="text-gray-600 transition hover:text-gray-900"
      >
        Inicio
      </Link>

      <Link
        to="/category/figuras"
        className="text-gray-600 transition hover:text-gray-900"
      >
        Figuras
      </Link>

      <Link
        to="/category/mangas"
        className="text-gray-600 transition hover:text-gray-900"
      >
        Mangas
      </Link>

      <Link
        to="/category/accesorios"
        className="text-gray-600 transition hover:text-gray-900"
      >
        Accesorios
      </Link>
    </div>
  );
}
