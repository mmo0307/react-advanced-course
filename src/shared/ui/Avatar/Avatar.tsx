import React, { CSSProperties, FC, useMemo } from 'react';
import AvatarIcon from '@/shared/assets/images/avatar.jpg';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

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

  const fallback = <Skeleton width={size} height={size} border={'50%'} />;

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
