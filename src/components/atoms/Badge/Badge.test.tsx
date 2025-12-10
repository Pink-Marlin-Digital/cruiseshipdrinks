import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders without crashing', () => {
    const { container } = render(<Badge>Test Badge</Badge>);
    expect(container).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Badge>New</Badge>);
    expect(getByText('New')).toBeTruthy();
  });

  it('applies default variant', () => {
    const { container } = render(<Badge>Default</Badge>);
    const badge = container.querySelector('span');
    expect(badge?.className).toContain('bg-mint-200');
  });

  it('applies success variant', () => {
    const { container } = render(<Badge variant="success">Success</Badge>);
    const badge = container.querySelector('span');
    expect(badge?.className).toContain('bg-mint-300');
  });
});
