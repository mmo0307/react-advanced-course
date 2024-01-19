import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';
var NotFoundPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsx("div", { className: classNames(styles.NotFoundPage, {}, [className]), children: t('Страница не найдена') }));
};
export { NotFoundPage };
//# sourceMappingURL=NotFoundPage.js.map