import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { LoginModal } from 'feature/AuthByUserName';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { View } from 'shared/ui/View/View';
import styles from './Navbar.module.scss';
var Navbar = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var authData = useSelector(getAuthData);
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var onClose = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onShow = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    return (_jsxs("div", { className: classNames(styles.Navbar, {}, [className]), children: [_jsx(View.Condition, { if: Boolean(authData), children: _jsx(Button, { theme: ButtonThemes.CLEAR_INVERTED, className: styles.links, onClick: onLogout, children: t('Выйти') }) }), _jsxs(View.Condition, { if: !authData, children: [_jsx(Button, { theme: ButtonThemes.CLEAR_INVERTED, className: styles.links, onClick: onShow, children: t('Войти') }), _jsx(LoginModal, { isOpen: isAuthModal, onClose: onClose })] })] }));
};
export { Navbar };
//# sourceMappingURL=Navbar.js.map