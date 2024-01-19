import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';
var LoginModal = function (_a) {
    var className = _a.className, isOpen = _a.isOpen, onClose = _a.onClose;
    return (_jsx(Modal, { className: classNames(styles.LoginModal, {}, [className]), isOpen: isOpen, onClose: onClose, lazy: true, children: _jsx(LoginForm, {}) }));
};
export { LoginModal };
//# sourceMappingURL=LoginModal.js.map