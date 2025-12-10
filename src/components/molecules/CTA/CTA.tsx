import { Heading } from '../../atoms/Heading/Heading';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';
import { Link } from '../../atoms/Link/Link';
import type { CTAProps } from './cta.types';

export function CTA({
  heading,
  text,
  buttonText,
  buttonHref,
  buttonOnClick,
  variant = 'primary',
  className = '',
}: CTAProps) {
  const variantClasses = {
    primary: 'bg-gradient-to-br from-ocean-100 to-mint-100',
    secondary: 'bg-gradient-to-br from-coral-100 to-yellow-100',
  };

  const classes = `rounded-xl p-8 text-center ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes}>
      <Heading level={2} className="mb-4">
        {heading}
      </Heading>
      <Text variant="large" className="mb-6">
        {text}
      </Text>
      {buttonHref ? (
        <Link href={buttonHref} variant="button">
          {buttonText}
        </Link>
      ) : (
        <Button variant={variant === 'primary' ? 'primary' : 'secondary'} onClick={buttonOnClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
