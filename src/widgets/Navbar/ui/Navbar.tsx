import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { AvatarDropDown } from '@/features/avatarDropDown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature, toggleFeature } from '@/shared/lib/features';
import {
  AppLink as AppLinkDepreacted,
  AppLinkThemes
} from '@/shared/ui/deprecated/AppLink';
import {
  Button as ButtonDepreacted,
  ButtonThemes
} from '@/shared/ui/deprecated/Button';
import { Text as TextDepreacted, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { View } from '@/shared/ui/redesigned/View';

import styles from './Navbar.module.scss';

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

  const mainClass = toggleFeature({
    name: 'isAppRedesigned',
    on: () => styles.NavbarRedesigned,
    off: () => styles.Navbar
  });

  return (
    <>
      <View.Condition if={Boolean(authData)}>
        <ToggleFeature
          name='isAppRedesigned'
          on={
            <header className={classNames(mainClass, {}, [className])}>
              <HStack
                gap='16'
                className={styles.actions}
              >
                <NotificationButton />

                <AvatarDropDown />
              </HStack>
            </header>
          }
          off={
            <header className={classNames(mainClass, {}, [className])}>
              <TextDepreacted
                className={styles.appName}
                title={t('Blog App')}
                theme={TextTheme.INVERTED}
              />

              <AppLinkDepreacted
                to={getRouteArticleCreate()}
                theme={AppLinkThemes.SECONDARY}
                className={styles.createBtn}
              >
                {t('Создать статью')}
              </AppLinkDepreacted>

              <HStack
                gap='16'
                className={styles.actions}
              >
                <NotificationButton />

                <AvatarDropDown />
              </HStack>
            </header>
          }
        />
      </View.Condition>

      <View.Condition if={!Boolean(authData)}>
        <ToggleFeature
          name='isAppRedesigned'
          on={
            <header className={classNames(mainClass, {}, [className])}>
              <ToggleFeature
                name='isAppRedesigned'
                on={
                  <Button
                    variant='clear'
                    className={styles.links}
                    onClick={onShow}
                  >
                    {t('Войти')}
                  </Button>
                }
                off={
                  <Button
                    variant='clear'
                    className={styles.links}
                    onClick={onShow}
                  >
                    {t('Войти')}
                  </Button>
                }
              />

              <View.Condition if={isAuthModal}>
                <LoginModal
                  isOpen={isAuthModal}
                  onClose={onClose}
                />
              </View.Condition>
            </header>
          }
          off={
            <header className={classNames(mainClass, {}, [className])}>
              <ToggleFeature
                name='isAppRedesigned'
                on={
                  <ButtonDepreacted
                    theme={ButtonThemes.CLEAR}
                    className={styles.links}
                    onClick={onShow}
                  >
                    {t('Войти')}
                  </ButtonDepreacted>
                }
                off={
                  <ButtonDepreacted
                    theme={ButtonThemes.CLEAR_INVERTED}
                    className={styles.links}
                    onClick={onShow}
                  >
                    {t('Войти')}
                  </ButtonDepreacted>
                }
              />

              <View.Condition if={isAuthModal}>
                <LoginModal
                  isOpen={isAuthModal}
                  onClose={onClose}
                />
              </View.Condition>
            </header>
          }
        />
      </View.Condition>
    </>
  );
});

export { Navbar };
