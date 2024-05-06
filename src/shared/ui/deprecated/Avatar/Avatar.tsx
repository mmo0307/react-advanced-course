import React, { CSSProperties, FC, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import AvatarIcon from '@/shared/assets/images/avatar.jpg';

import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;

  src?: string;

  size?: number;

  alt?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
      border={'50%'}
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
