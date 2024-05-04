import React, { CSSProperties, FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Skeleton.module.scss';

type SkeletonVariants = 'text' | 'title' | 'circle';

interface SkeletonProps {
  className?: string;

  variant?: SkeletonVariants;

  width?: string | number;

  height?: string | number;

  borderRadius?: string | number;
}

export const Skeleton: FC<SkeletonProps> = ({
  className,
  variant,
  width,
  height,
  borderRadius
}) => {
  const customStyle: CSSProperties = {
    width,
    height,
    borderRadius
  };

  return (
    <div
      className={classNames(styles.skeleton, {}, [
        className,
        variant && styles[variant]
      ])}
      style={customStyle}
    />
  );
};
