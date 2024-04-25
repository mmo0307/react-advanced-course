import React, { FC, useCallback, useMemo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions
} from 'entities/User';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';

interface AvatarDropDownProps {
  className?: string;
}

const AvatarDropDown: FC<AvatarDropDownProps> = ({ className }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isUserAdmin);

  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

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
    <Dropdown
      className={className}
      direction='down-left'
      items={dropDownItems}
      trigger={<Avatar size={30} src={authData?.avatar} />}
    />
  );
};

export { AvatarDropDown };
