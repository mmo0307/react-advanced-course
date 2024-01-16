import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'feature/AuthByUserName';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShow = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        theme={ButtonThemes.CLEAR_INVERTED}
        className={styles.links}
        onClick={onShow}
      >
        {t('Войти')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onClose} />
    </div>
  );
};

export { Navbar };
