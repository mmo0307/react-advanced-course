import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import {
  AppLink as AppLinkDeprecated,
  AppLinkThemes
} from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { View } from '@/shared/ui/redesigned/View';

import { SidebarItemType } from '../../model/types/sidebar';

import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;

  collapsed: boolean;
}

const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  return (
    <>
      <ToggleFeature
        name={'isAppRedesigned'}
        on={
          <View.Condition if={!Boolean(item.authOnly && !isAuth)}>
            <AppLink
              to={item.path}
              className={classNames(styles.itemRedesigned, {
                [styles.collapsed]: collapsed
              })}
              activeClassName={styles.sidebarItemActive}
            >
              <Icon
                Svg={item.Icon}
                className={styles.icon}
              />

              {!collapsed && (
                <span className={styles.linkRedesigned}>{t(item.text)}</span>
              )}
            </AppLink>
          </View.Condition>
        }
        off={
          <View.Condition if={!Boolean(item.authOnly && !isAuth)}>
            <AppLinkDeprecated
              theme={AppLinkThemes.SECONDARY}
              to={item.path}
              className={classNames(styles.item, {
                [styles.collapsed]: collapsed
              })}
            >
              <item.Icon className={styles.icon} />
              <span className={styles.link}>{t(item.text)}</span>
            </AppLinkDeprecated>
          </View.Condition>
        }
      />
    </>
  );
});

export { SidebarItem };
