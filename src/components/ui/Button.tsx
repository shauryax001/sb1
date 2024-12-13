import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex justify-center items-center gap-2 px-4 py-2 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'primary'
          ? 'bg-teal-600 hover:bg-teal-700 text-white border-transparent focus:ring-teal-500'
          : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}