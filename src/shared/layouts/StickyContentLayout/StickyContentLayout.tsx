import { FC, memo, ReactElement } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
  className?: string;

  left?: ReactElement;

  content: ReactElement;

  right?: ReactElement;
}

export const StickyContentLayout: FC<StickyContentLayoutProps> = memo(
  ({ className, left, content, right }: StickyContentLayoutProps) => (
    <div className={classNames(styles.stickyContentLayout, {}, [className])}>
      {left && <div className={styles.left}>{left}</div>}
      <div className={styles.content}>{content}</div>
      {right && <div className={styles.right}>{right}</div>}
    </div>
  )
);
