export interface DrinkCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  rating?: number;
  onClick?: () => void;
  className?: string;
}
