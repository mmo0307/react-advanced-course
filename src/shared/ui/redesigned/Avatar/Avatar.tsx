import React, { CSSProperties, FC, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Icon } from '../../redesigned/Icon';
import { Skeleton } from '../../redesigned/Skeleton';
import { AppImage } from '../AppImage';

import AvatarIcon from '@/shared/assets/images/avatar.jpg';

import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;

  src?: string;

  size?: number;

  alt?: string;
}

const Avatar: FC<AvatarProps> = ({ className, src, size = 100, alt }) => {
  const customStyle = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size
    }),
    [size]
  );

  const fallback = (
    <Skeleton
      width={size}
      height={size}
      borderRadius={'50%'}
    />
  );

  const errorFallback = <Icon Svg={AvatarIcon} />;

  return (
    <AppImage
      src={src}
      alt={alt}
      style={customStyle}
      errorFallback={errorFallback}
      fallback={fallback}
      className={classNames(styles.Avatar, {}, [className])}
    />
  );
};

export { Avatar };
