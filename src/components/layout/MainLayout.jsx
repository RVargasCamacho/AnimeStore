import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

export function MainLayout() {
  return (
    <div className='min-h-screen w-full text-gray-900'>
      <NavBar />

      <main className='mx-auto w-full md:max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <Outlet />
      </main>
    </div>
  );
}
