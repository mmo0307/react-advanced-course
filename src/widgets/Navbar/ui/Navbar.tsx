import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions
} from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';

import styles from './Navbar.module.scss';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import { TextTheme } from 'shared/ui/Text/model/consts';
import { AppLinkThemes } from 'shared/ui/AppLink/model/consts';
import { ButtonThemes } from 'shared/ui/Button/model/consts';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShow = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());

    navigate(RoutePath.main);
  }, [dispatch]);

  const dropDownItems = useMemo(() => {
    const items = [
      {
        content: t('Профиль'),
        href: RoutePath.profile + `/${authData?.id}`
      },
      {
        onClick: onLogout,
        content: t('Выйти')
      }
    ];

    if (isAdminPanelAvailable) {
      return [
        ...items.slice(0, 1),

        {
          content: t('Админка'),
          href: RoutePath.admin_panel
        },

        ...items.slice(1)
      ];
    }

    return items;
  }, [isAdminPanelAvailable, authData]);

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
        <Dropdown
          direction='down-left'
          className={styles.dropdown}
          items={dropDownItems}
          trigger={<Avatar size={30} src={authData?.avatar} />}
        />
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
