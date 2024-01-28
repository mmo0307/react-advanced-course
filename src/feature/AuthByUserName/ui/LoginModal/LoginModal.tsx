import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

import styles from './LoginModal.module.scss';

interface LoginModalProps {
  isOpen: boolean;

  onClose: () => void;

  className?: string;
}

const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal
    className={classNames(styles.LoginModal, {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm onSucess={onClose} />
  </Modal>
);

export { LoginModal };
