import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DrinkCard } from './DrinkCard';

describe('DrinkCard', () => {
  const mockDrink = {
    name: 'Tropical Paradise',
    description: 'A refreshing blend of tropical fruits',
    price: 12.99,
    image: '/drink.jpg',
  };

  it('renders without crashing', () => {
    const { container } = render(<DrinkCard {...mockDrink} />);
    expect(container).toBeTruthy();
  });

  it('displays drink name', () => {
    const { getByText } = render(<DrinkCard {...mockDrink} />);
    expect(getByText('Tropical Paradise')).toBeTruthy();
  });

  it('displays drink description', () => {
    const { getByText } = render(<DrinkCard {...mockDrink} />);
    expect(getByText('A refreshing blend of tropical fruits')).toBeTruthy();
  });

  it('displays badge when provided', () => {
    const { getByText } = render(<DrinkCard {...mockDrink} badge="New" />);
    expect(getByText('New')).toBeTruthy();
  });
});
