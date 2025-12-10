import type { CardProps } from './card.types';

export function Card({ children, className = '', onClick }: CardProps) {
  const baseClasses =
    'bg-gradient-to-bl from-ocean-100 via-ocean-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-ocean-200/30';

  const interactiveClasses = onClick
    ? 'cursor-pointer hover:scale-[1.02] transition-transform duration-200'
    : '';

  const classes = `${baseClasses} ${interactiveClasses} ${className}`;

  const Component = onClick ? 'button' : 'div';

  return (
    <Component onClick={onClick} className={classes}>
      {children}
    </Component>
  );
}
