export type RatingSize = 'sm' | 'md' | 'lg';

export interface RatingProps {
  value: number;
  max?: number;
  size?: RatingSize;
  readonly?: boolean;
  onChange?: (value: number) => void;
  className?: string;
}
