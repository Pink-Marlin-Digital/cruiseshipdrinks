import type { IconProps } from './icon.types';

export function Icon({ name, size = 'md', className = '' }: IconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const classes = `${sizeClasses[size]} ${className}`;

  // Placeholder for icon - in production, this would use an icon library
  // For now, we'll use a simple SVG placeholder
  return (
    <svg
      className={classes}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-label={name}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}
