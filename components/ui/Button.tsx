import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseStyles =
    'rounded-lg px-4 py-2 text-white font-semibold shadow-md transition-transform hover:scale-105';
  const variantStyles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'
      : 'bg-gray-700';

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};
