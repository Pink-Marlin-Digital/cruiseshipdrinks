import type { BadgeProps } from './badge.types';

export function Badge({
  variant = 'default',
  children,
  className = '',
}: BadgeProps) {
  const baseClasses =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

  const variantClasses = {
    default: 'bg-mint-200 text-mint-800',
    success: 'bg-mint-300 text-mint-900',
    warning: 'bg-yellow-200 text-yellow-800',
    info: 'bg-ocean-200 text-ocean-800',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <span className={classes}>{children}</span>;
}
