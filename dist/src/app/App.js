import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { userActions } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
function App() {
    var theme = useTheme().theme;
    var dispatch = useAppDispatch();
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (_jsx("div", { className: classNames('app', {}, [theme]), children: _jsxs(Suspense, { fallback: '', children: [_jsx(Navbar, {}), _jsxs("div", { className: 'content-page', children: [_jsx(Sidebar, {}), _jsx(AppRouter, {})] })] }) }));
}
export default App;
//# sourceMappingURL=App.js.map