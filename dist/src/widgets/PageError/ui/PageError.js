import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';
var PageError = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var onReloadPage = function () {
        window.location.reload();
    };
    return (_jsxs("div", { className: classNames(styles.PageError, {}, [className]), children: [_jsx("p", { children: t('Произошла непредвиденная ошибка') }), _jsx(Button, { className: styles.button, onClick: onReloadPage, children: t('Обновить страницу') })] }));
};
export { PageError };
//# sourceMappingURL=PageError.js.map