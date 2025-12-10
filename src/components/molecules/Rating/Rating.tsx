import type { RatingProps } from './rating.types';

export function Rating({
  value,
  max = 5,
  size = 'md',
  readonly = true,
  onChange,
  className = '',
}: RatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleClick = (newValue: number) => {
    if (!readonly && onChange) {
      onChange(newValue);
    }
  };

  const stars = Array.from({ length: max }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= value;
    const isHalf = starValue - 0.5 <= value && starValue > value;

    return (
      <button
        key={starValue}
        type="button"
        onClick={() => handleClick(starValue)}
        disabled={readonly}
        className={`${sizeClasses[size]} ${
          readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
        } transition-transform duration-150`}
        aria-label={`Rate ${starValue} out of ${max}`}
      >
        <svg
          className={sizeClasses[size]}
          fill={isFilled ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isHalf ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          )}
        </svg>
      </button>
    );
  });

  const classes = `flex items-center gap-1 text-yellow-400 ${className}`;

  return (
    <div className={classes} role="img" aria-label={`Rating: ${value} out of ${max}`}>
      {stars}
    </div>
  );
}
