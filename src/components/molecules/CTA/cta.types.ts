export type CTAVariant = 'primary' | 'secondary';

export interface CTAProps {
  heading: string;
  text: string;
  buttonText: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
  variant?: CTAVariant;
  className?: string;
}
