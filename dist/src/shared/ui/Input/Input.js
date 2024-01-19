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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';
var Input = memo(function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, _b = _a.type, type = _b === void 0 ? 'text' : _b, placeholder = _a.placeholder, autofocus = _a.autofocus, otherProps = __rest(_a, ["className", "value", "onChange", "type", "placeholder", "autofocus"]);
    var ref = useRef(null);
    var _c = useState(false), isFocused = _c[0], setIsFocused = _c[1];
    var _d = useState(0), caretPosition = _d[0], setCaretPosition = _d[1];
    useEffect(function () {
        var _a;
        if (autofocus) {
            setIsFocused(true);
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [autofocus]);
    var onChangeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    var onBlur = function () {
        setIsFocused(false);
    };
    var onFocus = function () {
        setIsFocused(true);
    };
    var onSelect = function (e) {
        var _a;
        setCaretPosition(((_a = e.target) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0);
    };
    return (_jsxs("div", { className: classNames(styles.InputWrapper, {}, [className]), children: [placeholder && (_jsx("div", { className: styles.placeholder, children: "".concat(placeholder, ">") })), _jsxs("div", { className: styles.caretWrapper, children: [_jsx("input", __assign({ ref: ref, type: type, value: value, onChange: onChangeHandler, className: styles.input, onFocus: onFocus, onBlur: onBlur, onSelect: onSelect }, otherProps)), isFocused && (_jsx("span", { className: styles.caret, style: { left: "".concat(caretPosition * 9, "px") } }))] })] }));
});
export { Input };
//# sourceMappingURL=Input.js.map