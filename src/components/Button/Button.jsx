import clsx from 'clsx';
import { LoaderButton } from '../LoaderButton/LoaderButton';

export function Button({
  children,
  size,
  className = '',
  isLoading = false,
  ...props
}) {
  return (
    <button
      className={clsx(
        className,
        'flex justify-center items-center gap-2 rounded-lg transition-all bg-indigo-500 text-white active:bg-indigo-800 active:scale-98 duration-100',
        sizeClasses(size),
        props.disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer hover:bg-indigo-600',
      )}
      {...props}
    >
      {isLoading && <LoaderButton />}
      {children}
    </button>
  );
}

const sizeClasses = (size) => {
  const sizes = {
    sm: 'px-2.5 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  };
  return sizes[size] || sizes.md;
};
