import React, { memo, SVGProps, VFC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Icon.module.scss';

interface IconBaseProps extends SVGProps<SVGSVGElement> {
  className?: string;

  Svg: VFC<SVGProps<SVGSVGElement>>;
}

interface NonIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
  clickable: true;

  onClick: () => void;
}

type IconProps = NonIconProps | ClickableIconProps;

export const Icon = memo(
  ({
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    onClick,
    ...otherProps
  }: IconProps) => {
    if (clickable) {
      return (
        <button
          className={styles.button}
          onClick={onClick}
          style={{ width, height }}
        >
          <Svg
            width={width}
            height={height}
            className={classNames(styles.icon, {}, [className])}
            {...otherProps}
          />
        </button>
      );
    }

    return (
      <Svg
        width={width}
        height={height}
        className={classNames(styles.icon, {}, [className])}
        {...otherProps}
      />
    );
  }
);
