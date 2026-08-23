import React from 'react'

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-lg px-4 py-2 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}