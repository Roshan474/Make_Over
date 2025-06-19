import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-[#E0BFB8] text-white hover:bg-[#D1A6A0] shadow-md',
    secondary: 'bg-[#F5E1E4] text-[#4A3B3B] hover:bg-[#ECD4D8] shadow-sm',
    outline: 'bg-transparent border-2 border-[#E0BFB8] text-[#E0BFB8] hover:bg-[#E0BFB8] hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;