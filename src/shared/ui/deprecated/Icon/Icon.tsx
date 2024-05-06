import React, { memo, SVGProps, VFC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;

  Svg: VFC<SVGProps<SVGSVGElement>>;

  inverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo(
  ({ className, Svg, inverted, ...otherProps }: IconProps) => (
    <Svg
      className={classNames(styles.Icon, { [styles.inverted]: inverted }, [
        className
      ])}
      {...otherProps}
    />
  )
);
