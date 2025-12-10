import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders without crashing', () => {
    const { container } = render(<Card>Card Content</Card>);
    expect(container).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Card>Test Card</Card>);
    expect(getByText('Test Card')).toBeTruthy();
  });

  it('renders as div by default', () => {
    const { container } = render(<Card>Card</Card>);
    const card = container.querySelector('div');
    expect(card).toBeTruthy();
  });

  it('renders as button when onClick is provided', () => {
    const { container } = render(<Card onClick={() => {}}>Clickable</Card>);
    const card = container.querySelector('button');
    expect(card).toBeTruthy();
  });
});
