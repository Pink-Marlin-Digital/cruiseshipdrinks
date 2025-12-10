import type { LinkProps } from './link.types';

export function Link({
  href,
  variant = 'default',
  children,
  external = false,
  className = '',
}: LinkProps) {
  const baseClasses = 'transition-colors duration-200';

  const variantClasses = {
    default: 'text-ocean-600 hover:text-ocean-700',
    underline: 'text-ocean-600 hover:text-ocean-700 underline',
    button:
      'inline-block px-4 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <a
      href={href}
      className={classes}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
