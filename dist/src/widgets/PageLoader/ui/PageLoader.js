import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';
var PageLoader = function (_a) {
    var className = _a.className;
    return (_jsx("div", { className: classNames(styles.PageLoader, {}, [className]), children: _jsx(Loader, {}) }));
};
export { PageLoader };
//# sourceMappingURL=PageLoader.js.map