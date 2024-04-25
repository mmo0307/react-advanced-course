import React, { CSSProperties, FC, useMemo } from 'react';
import avatar from '@/shared/assets/images/avatar.jpg';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;

  src?: string;

  size?: number;

  alt?: string;
}

const Avatar: FC<AvatarProps> = ({ className, src, size, alt }) => {
  const customStyle = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100
    }),
    [size]
  );

  return (
    <img
      src={src || avatar}
      alt={alt}
      style={customStyle}
      className={classNames(styles.Avatar, {}, [className])}
    />
  );
};

export { Avatar };
