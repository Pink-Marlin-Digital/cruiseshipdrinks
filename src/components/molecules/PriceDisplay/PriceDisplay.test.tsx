import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { PriceDisplay } from './PriceDisplay';

describe('PriceDisplay', () => {
  it('renders without crashing', () => {
    const { container } = render(<PriceDisplay amount={10.99} />);
    expect(container).toBeTruthy();
  });

  it('displays formatted price', () => {
    const { getByText } = render(<PriceDisplay amount={12.99} />);
    expect(getByText(/\$12\.99/)).toBeTruthy();
  });

  it('uses default currency USD', () => {
    const { getByText } = render(<PriceDisplay amount={10} />);
    expect(getByText(/\$/)).toBeTruthy();
  });

  it('hides decimals when showDecimals is false', () => {
    const { getByText } = render(
      <PriceDisplay amount={10.99} showDecimals={false} />
    );
    expect(getByText(/\$11/)).toBeTruthy();
  });
});
