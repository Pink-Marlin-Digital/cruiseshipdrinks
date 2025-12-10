import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DrinkImage } from './DrinkImage';

describe('DrinkImage', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <DrinkImage src="/test.jpg" alt="Test drink" />
    );
    expect(container).toBeTruthy();
  });

  it('renders image with correct src and alt', () => {
    const { container } = render(
      <DrinkImage src="/drink.jpg" alt="Tropical Paradise" />
    );
    const img = container.querySelector('img');
    expect(img?.getAttribute('src')).toBe('/drink.jpg');
    expect(img?.getAttribute('alt')).toBe('Tropical Paradise');
  });

  it('displays badge when provided', () => {
    const { getByText } = render(
      <DrinkImage src="/test.jpg" alt="Test" badge="New" />
    );
    expect(getByText('New')).toBeTruthy();
  });

  it('does not display badge when not provided', () => {
    const { container } = render(
      <DrinkImage src="/test.jpg" alt="Test" />
    );
    const badge = container.querySelector('[class*="Badge"]');
    expect(badge).toBeFalsy();
  });
});
