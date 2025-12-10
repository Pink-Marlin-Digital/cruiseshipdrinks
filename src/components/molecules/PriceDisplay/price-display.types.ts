export type PriceDisplaySize = 'sm' | 'md' | 'lg';

export interface PriceDisplayProps {
  amount: number;
  currency?: string;
  size?: PriceDisplaySize;
  showDecimals?: boolean;
  className?: string;
}
