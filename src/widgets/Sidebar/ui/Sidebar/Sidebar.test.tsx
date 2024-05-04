import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/test/componentRender/componentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    componentRender(<Sidebar />);

    const text = screen.getByTestId('sidebar');

    expect(text).toBeInTheDocument();
  });

  test('toggle Sidebar', () => {
    componentRender(<Sidebar />);

    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    const sidebar = screen.getByTestId('sidebar');

    expect(sidebar).toHaveClass('collapsed');
  });
});
