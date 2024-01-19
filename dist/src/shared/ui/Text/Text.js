import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';
export var TextTheme;
(function (TextTheme) {
    TextTheme["PRIMARY"] = "primary";
    TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
var Text = function (_a) {
    var _b;
    var className = _a.className, text = _a.text, title = _a.title, _c = _a.theme, theme = _c === void 0 ? TextTheme.PRIMARY : _c;
    return (_jsxs("div", { className: classNames(styles.Text, (_b = {}, _b[styles[theme]] = true, _b), [className]), children: [title && _jsx("p", { className: styles.title, children: title }), text && _jsx("p", { className: styles.text, children: text })] }));
};
export { Text };
//# sourceMappingURL=Text.js.map