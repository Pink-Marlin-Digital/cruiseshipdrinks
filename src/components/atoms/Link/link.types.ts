export type LinkVariant = 'default' | 'underline' | 'button';

export interface LinkProps {
  href: string;
  variant?: LinkVariant;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}
