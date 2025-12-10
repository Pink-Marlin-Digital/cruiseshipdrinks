import type { TextProps } from './text.types';

export function Text({
  variant = 'body',
  as = 'p',
  children,
  className = '',
}: TextProps) {
  const Tag = as;

  const variantClasses = {
    body: 'text-base text-gray-700',
    small: 'text-sm text-gray-600',
    large: 'text-lg text-gray-800',
  };

  const classes = `${variantClasses[variant]} ${className}`;

  return <Tag className={classes}>{children}</Tag>;
}
