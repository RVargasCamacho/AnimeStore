import clsx from 'clsx';
import React from 'react'
import { NavLink } from 'react-router-dom';

export function NavLinkApp({to, children, ...props}) {
  return (
    <NavLink to={to} 
      {...props  }
      className={({isActive}) => 
        clsx(props.className, isActive 
          ? 'text-indigo-500 transition hover:text-indigo-700 font-medium' 
          : 'text-gray-600 transition hover:text-gray-900',
          
        )}
      >
      {children}
    </NavLink>
  )
}
