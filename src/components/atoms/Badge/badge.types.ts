export type BadgeVariant = 'default' | 'success' | 'warning' | 'info';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}
