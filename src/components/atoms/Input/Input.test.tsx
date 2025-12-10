import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders without crashing', () => {
    const { container } = render(<Input id="test" />);
    expect(container).toBeTruthy();
  });

  it('renders with placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input id="test" placeholder="Enter text" />
    );
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('applies error state', () => {
    const { container } = render(<Input id="test" error="Error message" />);
    const input = container.querySelector('input');
    expect(input?.className).toContain('border-coral-400');
    expect(input?.getAttribute('aria-invalid')).toBe('true');
  });

  it('applies disabled state', () => {
    const { container } = render(<Input id="test" disabled />);
    const input = container.querySelector('input');
    expect(input?.disabled).toBe(true);
    expect(input?.className).toContain('bg-gray-100');
  });
});
