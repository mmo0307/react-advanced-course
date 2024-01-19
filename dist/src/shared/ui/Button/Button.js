var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
export var ButtonThemes;
(function (ButtonThemes) {
    ButtonThemes["CLEAR"] = "clear";
    ButtonThemes["CLEAR_INVERTED"] = "clearInverted";
    ButtonThemes["OUTLINE"] = "outline";
    ButtonThemes["BACKGROUND"] = "background";
    ButtonThemes["BACKGROUND_INVERTED"] = "backgroundInverted";
})(ButtonThemes || (ButtonThemes = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["M"] = "size_m";
    ButtonSize["L"] = "size_l";
    ButtonSize["XL"] = "size_xl";
})(ButtonSize || (ButtonSize = {}));
var Button = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, theme = _a.theme, square = _a.square, disabled = _a.disabled, _c = _a.size, size = _c === void 0 ? ButtonSize.M : _c, otherProps = __rest(_a, ["className", "children", "theme", "square", "disabled", "size"]);
    return (_jsx("button", __assign({ type: 'button', className: classNames(styles.Button, (_b = {},
            _b[styles[theme]] = true,
            _b[styles.square] = square,
            _b[styles[size]] = true,
            _b[styles.disabled] = disabled,
            _b), [className, styles[theme]]), disabled: disabled }, otherProps, { children: children })));
};
export { Button };
//# sourceMappingURL=Button.js.map