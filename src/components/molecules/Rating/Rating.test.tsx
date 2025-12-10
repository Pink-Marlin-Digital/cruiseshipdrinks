import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Rating } from './Rating';

describe('Rating', () => {
  it('renders without crashing', () => {
    const { container } = render(<Rating value={3} />);
    expect(container).toBeTruthy();
  });

  it('renders correct number of stars', () => {
    const { container } = render(<Rating value={3} max={5} />);
    const stars = container.querySelectorAll('button');
    expect(stars.length).toBe(5);
  });

  it('is readonly by default', () => {
    const { container } = render(<Rating value={3} />);
    const stars = container.querySelectorAll('button');
    stars.forEach((star) => {
      expect(star.disabled).toBe(true);
    });
  });

  it('allows interaction when not readonly', () => {
    const { container } = render(<Rating value={3} readonly={false} />);
    const stars = container.querySelectorAll('button');
    stars.forEach((star) => {
      expect(star.disabled).toBe(false);
    });
  });
});
