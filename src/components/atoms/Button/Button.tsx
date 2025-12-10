import type { ButtonProps } from './button.types';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClasses =
    'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-coral-500 text-white hover:bg-coral-600 focus:ring-coral-500 shadow-md hover:shadow-lg',
    secondary:
      'bg-ocean-500 text-white hover:bg-ocean-600 focus:ring-ocean-500 shadow-md hover:shadow-lg',
    outline:
      'border-2 border-coral-500 text-coral-600 hover:bg-coral-50 focus:ring-coral-500',
    ghost: 'text-coral-600 hover:bg-coral-50 focus:ring-coral-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type} // eslint-disable-line react/button-has-type -- Type is validated by TypeScript (button | submit | reset)
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
