import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Link } from './Link';

describe('Link', () => {
  it('renders without crashing', () => {
    const { container } = render(<Link href="/test">Test Link</Link>);
    expect(container).toBeTruthy();
  });

  it('renders with href', () => {
    const { container } = render(<Link href="/test">Link</Link>);
    const link = container.querySelector('a');
    expect(link?.getAttribute('href')).toBe('/test');
  });

  it('applies default variant', () => {
    const { container } = render(<Link href="/test">Link</Link>);
    const link = container.querySelector('a');
    expect(link?.className).toContain('text-ocean-600');
  });

  it('opens external links in new tab', () => {
    const { container } = render(
      <Link href="https://example.com" external>
        External
      </Link>
    );
    const link = container.querySelector('a');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
