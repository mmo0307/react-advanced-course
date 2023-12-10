import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import styles from './Sidebar.module.scss';

interface SideBarProps {
  className?: string;
}

const Sidebar: FC<SideBarProps> = ({ className }) => {
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
      <Button data-testid='sidebar-toggle' onClick={onToggleClick}>
        toggle
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};

export { Sidebar };
