import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
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
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className
      ])}
    >
      <button onClick={onToggleClick}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};

export { Sidebar };
