import type { PriceDisplayProps } from './price-display.types';

export function PriceDisplay({
  amount,
  currency = 'USD',
  size = 'md',
  showDecimals = true,
  className = '',
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(amount);

  const classes = `font-bold text-coral-600 ${sizeClasses[size]} ${className}`;

  return <span className={classes}>{formattedAmount}</span>;
}
