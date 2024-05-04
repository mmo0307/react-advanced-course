import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions
} from '@/entities/User';
import {
  getRouteAdmin,
  getRouteMain,
  getRouteProfile
} from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Dropdown } from '@/shared/ui/deprecated/Popups';

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

    navigate(getRouteMain());
  }, [dispatch]);

  const dropDownItems = useMemo(() => {
    const items = [
      {
        content: t('Профиль'),
        href: getRouteProfile(authData?.id as string)
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
          href: getRouteAdmin()
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
      trigger={
        <Avatar
          size={30}
          src={authData?.avatar}
        />
      }
    />
  );
};

export { AvatarDropDown };
