import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FormField } from './FormField';

describe('FormField', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <FormField label="Test Field" id="test" />
    );
    expect(container).toBeTruthy();
  });

  it('displays label', () => {
    const { getByText } = render(<FormField label="Email" id="email" />);
    expect(getByText('Email')).toBeTruthy();
  });

  it('shows error message', () => {
    const { getByText } = render(
      <FormField label="Email" id="email" error="Invalid email" />
    );
    expect(getByText('Invalid email')).toBeTruthy();
  });

  it('shows required indicator', () => {
    const { container } = render(
      <FormField label="Email" id="email" required />
    );
    const label = container.querySelector('label');
    expect(label?.textContent).toContain('*');
  });
});
