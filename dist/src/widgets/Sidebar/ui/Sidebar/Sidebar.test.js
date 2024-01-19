import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { Sidebar } from './Sidebar';
describe('Sidebar', function () {
    test('render Sidebar', function () {
        componentRender(_jsx(Sidebar, {}));
        var text = screen.getByTestId('sidebar');
        expect(text).toBeInTheDocument();
    });
    test('toggle Sidebar', function () {
        componentRender(_jsx(Sidebar, {}));
        var toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(toggleBtn).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        var sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toHaveClass('collapsed');
    });
});
//# sourceMappingURL=Sidebar.test.js.map