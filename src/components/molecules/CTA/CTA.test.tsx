import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CTA } from './CTA';

describe('CTA', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <CTA heading="Test" text="Test text" buttonText="Click" />
    );
    expect(container).toBeTruthy();
  });

  it('displays heading', () => {
    const { getByText } = render(
      <CTA heading="Welcome" text="Text" buttonText="Button" />
    );
    expect(getByText('Welcome')).toBeTruthy();
  });

  it('displays text', () => {
    const { getByText } = render(
      <CTA heading="Heading" text="Description" buttonText="Button" />
    );
    expect(getByText('Description')).toBeTruthy();
  });

  it('displays button text', () => {
    const { getByText } = render(
      <CTA heading="Heading" text="Text" buttonText="Get Started" />
    );
    expect(getByText('Get Started')).toBeTruthy();
  });
});
