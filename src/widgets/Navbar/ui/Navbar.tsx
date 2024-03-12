import React, { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'feature/AuthByUserName';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

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
    <header className={classNames(styles.Navbar, {}, [className])}>
      <Text
        className={styles.appName}
        title={t('Blog App')}
        theme={TextTheme.INVERTED}
      />

      <AppLink
        className={styles.createBtn}
        to={RoutePath.article_create}
        theme={AppLinkThemes.SECONDARY}
      >
        {t('Создать статью')}
      </AppLink>

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
    </header>
  );
});

export { Navbar };
