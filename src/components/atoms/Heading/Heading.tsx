import type { HeadingProps } from './heading.types';

export function Heading({
  level = 1,
  as,
  children,
  className = '',
}: HeadingProps) {
  const Tag = as || (`h${level}` as keyof JSX.IntrinsicElements);

  const levelClasses = {
    1: 'text-4xl md:text-5xl font-bold text-gray-900',
    2: 'text-3xl md:text-4xl font-bold text-gray-900',
    3: 'text-2xl md:text-3xl font-semibold text-gray-800',
    4: 'text-xl md:text-2xl font-semibold text-gray-800',
    5: 'text-lg md:text-xl font-medium text-gray-700',
    6: 'text-base md:text-lg font-medium text-gray-700',
  };

  const classes = `${levelClasses[level]} ${className}`;

  return <Tag className={classes}>{children}</Tag>;
}
