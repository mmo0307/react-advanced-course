import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';
var LoginForm = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var _b = useSelector(getLoginState), username = _b.username, password = _b.password, isLoading = _b.isLoading, error = _b.error;
    var onChangeUserName = useCallback(function (values) {
        dispatch(loginActions.setUsername(values));
    }, [dispatch]);
    var onChangeUserPassword = useCallback(function (values) {
        dispatch(loginActions.setPassword(values));
    }, [dispatch]);
    var onLoginClick = useCallback(function () {
        dispatch(loginByUsername({ username: username, password: password }));
    }, [dispatch, password, username]);
    return (_jsxs("div", { className: classNames(styles.LoginForm, {}, [className]), children: [_jsx(Text, { title: t('Форма авторизации') }), error && (_jsx(Text, { text: t('Вы ввели неверный логин или пароль'), theme: TextTheme.ERROR })), _jsx(Input, { className: styles.input, placeholder: t('Введите username'), onChange: onChangeUserName, value: username, autofocus: true }), _jsx(Input, { className: styles.input, placeholder: t('Введите пароль'), onChange: onChangeUserPassword, value: password }), _jsx(Button, { theme: ButtonThemes.OUTLINE, className: styles.loginBtn, disabled: isLoading, onClick: onLoginClick, children: t('Войти') })] }));
});
export { LoginForm };
//# sourceMappingURL=LoginForm.js.map