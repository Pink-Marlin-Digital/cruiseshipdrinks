import { Card } from '../Card/Card';
import { Heading } from '../../atoms/Heading/Heading';
import { Text } from '../../atoms/Text/Text';
import { PriceDisplay } from '../PriceDisplay/PriceDisplay';
import { Rating } from '../Rating/Rating';
import { DrinkImage } from '../DrinkImage/DrinkImage';
import type { DrinkCardProps } from './drink-card.types';

export function DrinkCard({
  name,
  description,
  price,
  image,
  badge,
  rating,
  onClick,
  className = '',
}: DrinkCardProps) {
  return (
    <Card onClick={onClick} className={className}>
      <div className="flex flex-col h-full">
        <DrinkImage src={image} alt={name} badge={badge} />
        <div className="mt-4 flex-1">
          <Heading level={3} className="text-xl mb-2">
            {name}
          </Heading>
          <Text variant="small" className="mb-3 line-clamp-2">
            {description}
          </Text>
          {rating !== undefined && (
            <div className="mb-3">
              <Rating value={rating} readonly size="sm" />
            </div>
          )}
          <div className="flex items-center justify-between mt-auto">
            <PriceDisplay amount={price} size="lg" />
          </div>
        </div>
      </div>
    </Card>
  );
}
