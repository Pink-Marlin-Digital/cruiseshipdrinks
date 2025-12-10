import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  it('renders without crashing', () => {
    const { container } = render(<Text>Test Text</Text>);
    expect(container).toBeTruthy();
  });

  it('renders as p by default', () => {
    const { container } = render(<Text>Paragraph</Text>);
    const text = container.querySelector('p');
    expect(text).toBeTruthy();
  });

  it('renders with body variant by default', () => {
    const { container } = render(<Text>Body Text</Text>);
    const text = container.querySelector('p');
    expect(text?.className).toContain('text-base');
  });

  it('renders with custom as prop', () => {
    const { container } = render(<Text as="span">Span Text</Text>);
    const text = container.querySelector('span');
    expect(text).toBeTruthy();
  });
});
