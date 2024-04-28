import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(styles.PageLoader, {}, [className])}>
    <Loader />
  </div>
);

export { PageLoader };
