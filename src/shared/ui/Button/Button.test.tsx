import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ButtonThemes } from '../Button/model/consts';

describe('Button', () => {
  test('render Button', () => {
    render(<Button>{'RENDER BUTTON'}</Button>);

    const text = screen.getByText('RENDER BUTTON');

    expect(text).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<Button theme={ButtonThemes.CLEAR}>{'RENDER BUTTON'}</Button>);

    const text = screen.getByText('RENDER BUTTON');

    expect(text).toHaveClass('clear');

    screen.debug();
  });
});
