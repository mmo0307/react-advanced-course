import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
/* eslint-disable react/display-name */
export var ThemeDecorator = function (theme) { return function (StoryComponent) { return (_jsx(BrowserRouter, { children: _jsx(ThemeProvider, { initialTheme: theme, children: _jsx("div", { className: "app ".concat(theme), children: _jsx(StoryComponent, {}) }) }) })); }; };
//# sourceMappingURL=ThemeDecorator.js.map