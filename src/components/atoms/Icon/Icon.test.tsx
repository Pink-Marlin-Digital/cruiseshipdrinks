import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders without crashing', () => {
    const { container } = render(<Icon name="test" />);
    expect(container).toBeTruthy();
  });

  it('renders SVG element', () => {
    const { container } = render(<Icon name="test" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('applies size classes', () => {
    const { container } = render(<Icon name="test" size="lg" />);
    const svg = container.querySelector('svg');
    expect(svg?.className).toContain('w-6 h-6');
  });

  it('has aria-label', () => {
    const { container } = render(<Icon name="test-icon" />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('test-icon');
  });
});
