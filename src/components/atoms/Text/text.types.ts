export type TextVariant = 'body' | 'small' | 'large';

export interface TextProps {
  variant?: TextVariant;
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
}
