import React, { memo, ReactNode, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Card, CardTheme } from '../Card';

import styles from './Tabs.module.scss';

export interface TabItem {
  value: string;

  content: ReactNode;
}

interface TabsProps {
  className?: string;

  tabs: TabItem[];

  value: string;

  onTabClick: (tab: TabItem) => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Tabs = memo(
  ({ className, tabs, onTabClick, value }: TabsProps) => {
    const onClick = useCallback(
      (tab: TabItem) => () => {
        onTabClick(tab);
      },
      [onTabClick]
    );

    return (
      <div className={classNames(styles.Tabs, {}, [className])}>
        {tabs.map((tab) => (
          <Card
            theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
            className={styles.tab}
            key={tab.value}
            onClick={onClick(tab)}
          >
            {tab.content}
          </Card>
        ))}
      </div>
    );
  }
);
