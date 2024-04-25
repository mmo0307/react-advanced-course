import React, { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Card } from '../Card/Card';

import styles from './Tabs.module.scss';
import { CardTheme } from '../Card/model/consts';

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
        {tabs.map(tab => (
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
