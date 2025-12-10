import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading', () => {
  it('renders without crashing', () => {
    const { container } = render(<Heading>Test Heading</Heading>);
    expect(container).toBeTruthy();
  });

  it('renders as h1 by default', () => {
    const { container } = render(<Heading>H1 Heading</Heading>);
    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
  });

  it('renders with specified level', () => {
    const { container } = render(<Heading level={2}>H2 Heading</Heading>);
    const heading = container.querySelector('h2');
    expect(heading).toBeTruthy();
  });

  it('uses custom as prop', () => {
    const { container } = render(
      <Heading level={1} as="h3">
        Custom Heading
      </Heading>
    );
    const heading = container.querySelector('h3');
    expect(heading).toBeTruthy();
  });
});
