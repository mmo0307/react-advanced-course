import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { View } from 'shared/ui/View/View';
import { SidebarItemType } from 'widgets/Sidebar/model/items';

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
      <View.Condition if={!Boolean(item.authOnly && !isAuth)}>
        <AppLink
          theme={AppLinkThemes.SECONDARY}
          to={item.path}
          className={classNames(styles.item, { [styles.collapsed]: collapsed })}
        >
          <item.Icon className={styles.icon} />
          <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
      </View.Condition>
    </>
  );
});

export { SidebarItem };
