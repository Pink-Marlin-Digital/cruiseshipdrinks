import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../../atoms/Button/Button';

describe('ButtonGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );
    expect(container).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );
    expect(getByText('Button 1')).toBeTruthy();
    expect(getByText('Button 2')).toBeTruthy();
  });

  it('applies horizontal orientation by default', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Button</Button>
      </ButtonGroup>
    );
    const group = container.querySelector('div');
    expect(group?.className).toContain('flex-row');
  });

  it('applies vertical orientation', () => {
    const { container } = render(
      <ButtonGroup orientation="vertical">
        <Button>Button</Button>
      </ButtonGroup>
    );
    const group = container.querySelector('div');
    expect(group?.className).toContain('flex-col');
  });
});
