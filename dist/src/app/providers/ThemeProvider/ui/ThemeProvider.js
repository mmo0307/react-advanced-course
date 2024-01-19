import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
var defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;
var ThemeProvider = function (_a) {
    var children = _a.children, initialTheme = _a.initialTheme;
    var _b = useState(initialTheme || defaultTheme), theme = _b[0], setTheme = _b[1];
    var defaultProps = useMemo(function () { return ({
        theme: theme,
        setTheme: setTheme
    }); }, [theme]);
    return (_jsx(ThemeContext.Provider, { value: defaultProps, children: children }));
};
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map