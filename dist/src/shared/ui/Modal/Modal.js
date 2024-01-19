import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';
var ANIMATION_DELAY = 300;
var Modal = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, lazy = _a.lazy, isOpen = _a.isOpen, onClose = _a.onClose;
    var _c = useState(false), isClosing = _c[0], setIsClosing = _c[1];
    var _d = useState(false), isMounted = _d[0], setIsMounted = _d[1];
    var timerRef = useRef();
    var theme = useTheme().theme;
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    var closeHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    // Новые ссылки!!!
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    var onContentClick = function (e) {
        e.stopPropagation();
    };
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    if (lazy && !isMounted) {
        return null;
    }
    return (_jsx(Portal, { children: _jsx("div", { className: classNames(styles.Modal, (_b = {}, _b[styles.opened] = isOpen, _b[styles.isClosing] = isClosing, _b), [className, theme, 'app_modal']), children: _jsx("div", { className: styles.overlay, children: _jsx("div", { className: styles.content, onClick: onContentClick, children: children }) }) }) }));
};
export { Modal };
//# sourceMappingURL=Modal.js.map