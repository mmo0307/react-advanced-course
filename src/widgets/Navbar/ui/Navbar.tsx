import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink';
import { Button, ButtonThemes } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { View } from '@/shared/ui/View';

import styles from './Navbar.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropDown } from '@/features/avatarDropDown';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShow = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
      <Text
        className={styles.appName}
        title={t('Blog App')}
        theme={TextTheme.INVERTED}
      />

      <AppLink
        className={styles.createBtn}
        to={getRouteArticleCreate()}
        theme={AppLinkThemes.SECONDARY}
      >
        {t('Создать статью')}
      </AppLink>

      <HStack gap='16' className={styles.actions}>
        <View.Condition if={Boolean(authData)}>
          <NotificationButton />

          <AvatarDropDown />
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
      </HStack>
    </header>
  );
});

export { Navbar };
