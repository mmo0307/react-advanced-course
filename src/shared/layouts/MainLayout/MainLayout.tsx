import { memo, ReactElement } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  sidebar: ReactElement;
  content: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout = memo(
  ({ className, header, sidebar, content, toolbar }: MainLayoutProps) => (
    <div className={classNames(styles.mainLayout, {}, [className])}>
      <div className={styles.content}>{content}</div>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.rightbar}>
        <div className={styles.header}>{header}</div>
        <div className={styles.toolbar}>{toolbar}</div>
      </div>
    </div>
  )
);
