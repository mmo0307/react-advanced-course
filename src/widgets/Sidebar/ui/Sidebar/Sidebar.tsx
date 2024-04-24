import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';
import { VStack } from 'shared/ui/Stack';
import { ButtonSize, ButtonThemes } from 'shared/ui/Button/model/consts';

interface SideBarProps {
  className?: string;
}

const Sidebar: FC<SideBarProps> = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggleClick = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <aside
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className
      ])}
    >
      <VStack role='navigation' gap='8' className={styles.items}>
        {sidebarItemsList.map(item => (
          <SidebarItem key={Math.random()} item={item} collapsed={collapsed} />
        ))}
      </VStack>

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
    </aside>
  );
});

export { Sidebar };
