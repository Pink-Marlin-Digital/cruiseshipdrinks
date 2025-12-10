import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('renders without crashing', () => {
    const { container } = render(<Label>Test Label</Label>);
    expect(container).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Label>Test Label</Label>);
    expect(getByText('Test Label')).toBeTruthy();
  });

  it('applies htmlFor attribute', () => {
    const { container } = render(<Label htmlFor="test-input">Label</Label>);
    const label = container.querySelector('label');
    expect(label?.getAttribute('htmlFor')).toBe('test-input');
  });

  it('shows required indicator', () => {
    const { container } = render(<Label required>Required Label</Label>);
    const label = container.querySelector('label');
    expect(label?.textContent).toContain('*');
  });
});
