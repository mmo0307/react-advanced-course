import { jsx as _jsx } from "react/jsx-runtime";
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import MoonIcon from 'shared/assets/icons/moon.svg';
import SunIcon from 'shared/assets/icons/sun.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
var ThemeSwitcher = function (_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    return (_jsx(Button, { theme: ButtonThemes.CLEAR, className: classNames('', {}, [className]), onClick: toggleTheme, children: theme === Theme.DARK ? _jsx(MoonIcon, { width: 30 }) : _jsx(SunIcon, { width: 30 }) }));
};
export { ThemeSwitcher };
//# sourceMappingURL=ThemeSwitcher.js.map