import type { ButtonGroupProps } from './button-group.types';

export function ButtonGroup({
  children,
  orientation = 'horizontal',
  className = '',
}: ButtonGroupProps) {
  const orientationClasses =
    orientation === 'horizontal'
      ? 'flex flex-row gap-2'
      : 'flex flex-col gap-2';

  const classes = `${orientationClasses} ${className}`;

  return <div className={classes}>{children}</div>;
}
