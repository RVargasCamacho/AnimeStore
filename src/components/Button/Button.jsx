import clsx from 'clsx';

export function Button({ children, size, className = '', ...props }) {
  return (
    <button
      className={clsx(
        'rounded-lg transition-colors bg-indigo-500 text-white',
        sizeClasses(size),
        className,
      )}
      {...props}
    >
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
