import type { InputProps } from './input.types';

export function Input({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = '',
  required = false,
  name,
}: InputProps) {
  const baseClasses =
    'w-full px-4 py-2 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const stateClasses = error
    ? 'border-coral-400 focus:border-coral-500 focus:ring-coral-500'
    : 'border-ocean-200 focus:border-ocean-400 focus:ring-ocean-400';

  const disabledClasses = disabled
    ? 'bg-gray-100 cursor-not-allowed opacity-60'
    : 'bg-white';

  const classes = `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`;

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      name={name}
      className={classes}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? `${id}-error` : undefined}
    />
  );
}
