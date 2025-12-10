import { Badge } from '../../atoms/Badge/Badge';
import type { DrinkImageProps } from './drink-image.types';

export function DrinkImage({
  src,
  alt,
  badge,
  className = '',
}: DrinkImageProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      {badge && (
        <div className="absolute top-2 right-2">
          <Badge variant="info">{badge}</Badge>
        </div>
      )}
    </div>
  );
}
