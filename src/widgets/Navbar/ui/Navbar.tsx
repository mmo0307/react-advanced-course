import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { LoginModal } from 'feature/AuthByUserName';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { View } from 'shared/ui/View/View';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const authData = useSelector(getAuthData);

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShow = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <View.Condition if={Boolean(authData)}>
        <Button
          theme={ButtonThemes.CLEAR_INVERTED}
          className={styles.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </View.Condition>

      <View.Condition if={!authData}>
        <Button
          theme={ButtonThemes.CLEAR_INVERTED}
          className={styles.links}
          onClick={onShow}
        >
          {t('Войти')}
        </Button>

        <View.Condition if={isAuthModal}>
          <LoginModal isOpen={isAuthModal} onClose={onClose} />
        </View.Condition>
      </View.Condition>
    </div>
  );
};

export { Navbar };
