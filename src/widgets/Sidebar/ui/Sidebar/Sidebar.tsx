import React, { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonThemes } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

interface SideBarProps {
  className?: string;
}

const Sidebar: FC<SideBarProps> = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggleClick = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className
      ])}
    >
      <div className={styles.items}>
        {SidebarItemsList.map(item => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <Button
        data-testid='sidebar-toggle'
        className={styles.collapseBtn}
        theme={ButtonThemes.BACKGROUND_INVERTED}
        onClick={onToggleClick}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>>' : '<<'}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
    </div>
  );
});

export { Sidebar };
