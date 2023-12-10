import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const text = screen.getByText('toggle');
    expect(text).toBeInTheDocument();
  });

  test('toggle Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(toggleBtn).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('collapsed');
  });
});
