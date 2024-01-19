import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonThemes } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';
var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var t = useTranslation().t;
    var onToggleClick = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    return (_jsxs("div", { "data-testid": 'sidebar', className: classNames(styles.Sidebar, (_b = {}, _b[styles.collapsed] = collapsed, _b), [
            className
        ]), children: [_jsxs("div", { className: styles.items, children: [_jsxs(AppLink, { to: RoutePath.main, theme: AppLinkThemes.SECONDARY, children: [_jsx(MainIcon, { className: styles.icon }), _jsx("span", { className: styles.link, children: t('Главная') })] }), _jsxs(AppLink, { to: RoutePath.about, theme: AppLinkThemes.SECONDARY, children: [_jsx(AboutIcon, { className: styles.icon }), _jsx("span", { className: styles.link, children: t('О сайте') })] })] }), _jsx(Button, { "data-testid": 'sidebar-toggle', className: styles.collapseBtn, theme: ButtonThemes.BACKGROUND_INVERTED, onClick: onToggleClick, size: ButtonSize.L, square: true, children: collapsed ? '>>' : '<<' }), _jsxs("div", { className: styles.switchers, children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { className: styles.lang, short: collapsed })] })] }));
};
export { Sidebar };
//# sourceMappingURL=Sidebar.js.map