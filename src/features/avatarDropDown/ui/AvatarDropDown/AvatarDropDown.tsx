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
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

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
    <ToggleFeature
      name={'isAppRedesigned'}
      on={
        <Dropdown
          direction='bottom left'
          className={classNames('', {}, [className])}
          items={dropDownItems}
          trigger={
            <Avatar
              size={48}
              src={authData?.avatar}
            />
          }
        />
      }
      off={
        <DropdownDeprecated
          className={className}
          direction='down-left'
          items={dropDownItems}
          trigger={
            <AvatarDeprecated
              size={30}
              src={authData?.avatar}
            />
          }
        />
      }
    />
  );
};

export { AvatarDropDown };
