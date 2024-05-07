import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonThemes
} from '@/shared/ui/deprecated/Button';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import ArrowDown from '@/shared/assets/icons/arrow-bottom.svg';

import styles from './Sidebar.module.scss';

interface SideBarProps {
  className?: string;
}

const Sidebar: FC<SideBarProps> = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggleClick = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <ToggleFeature
      name='isAppRedesigned'
      on={
        <aside
          data-testid='sidebar'
          className={classNames(
            styles.sidebarRedesigned,
            { [styles.collapsedRedesigned]: collapsed },
            [className]
          )}
        >
          <AppLogo
            size={collapsed ? 30 : 50}
            className={styles.logoRedesigned}
          />

          <VStack
            role='navigation'
            align='start'
            gap='8'
            className={classNames(styles.itemsRedesigned)}
          >
            {sidebarItemsList.map((item) => (
              <SidebarItem
                key={Math.random()}
                item={item}
                collapsed={collapsed}
              />
            ))}
          </VStack>

          <Icon
            clickable
            data-testid='sidebar-toggle'
            className={styles.toggleButtonRedesigned}
            onClick={onToggleClick}
            Svg={ArrowDown}
          />

          <HStack
            max
            justify='center'
            className={styles.switchers}
          >
            <ThemeSwitcher />

            <LangSwitcher short={collapsed} />
          </HStack>
        </aside>
      }
      off={
        <aside
          data-testid='sidebar'
          className={classNames(
            styles.Sidebar,
            { [styles.collapsed]: collapsed },
            [className]
          )}
        >
          <VStack
            role='navigation'
            gap='8'
            className={styles.items}
          >
            {sidebarItemsList.map((item) => (
              <SidebarItem
                key={Math.random()}
                item={item}
                collapsed={collapsed}
              />
            ))}
          </VStack>

          <ButtonDeprecated
            data-testid='sidebar-toggle'
            className={styles.collapseBtn}
            theme={ButtonThemes.BACKGROUND_INVERTED}
            onClick={onToggleClick}
            size={ButtonSize.L}
            square
          >
            {collapsed ? '>>' : '<<'}
          </ButtonDeprecated>

          <div className={styles.switchers}>
            <ThemeSwitcher />

            <LangSwitcher
              className={styles.lang}
              short={collapsed}
            />
          </div>
        </aside>
      }
    />
  );
});

export { Sidebar };
