import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Button, ButtonThemes } from './Button';
describe('Button', function () {
    test('render Button', function () {
        render(_jsx(Button, { children: 'RENDER BUTTON' }));
        var text = screen.getByText('RENDER BUTTON');
        expect(text).toBeInTheDocument();
    });
    test('Test clear theme', function () {
        render(_jsx(Button, { theme: ButtonThemes.CLEAR, children: 'RENDER BUTTON' }));
        var text = screen.getByText('RENDER BUTTON');
        expect(text).toHaveClass('clear');
        screen.debug();
    });
});
//# sourceMappingURL=Button.test.js.map