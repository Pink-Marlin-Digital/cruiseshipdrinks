import type { LabelProps } from './label.types';

export function Label({
  htmlFor,
  required = false,
  children,
  className = '',
}: LabelProps) {
  const baseClasses = 'block text-sm font-medium text-gray-700 mb-1';

  const classes = `${baseClasses} ${className}`;

  return (
    <label htmlFor={htmlFor} className={classes}>
      {children}
      {required && <span className="text-coral-500 ml-1">*</span>}
    </label>
  );
}
