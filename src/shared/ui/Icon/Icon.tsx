import React, { memo, SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Icon.module.scss';

interface IconProps {
  className?: string;

  Svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => (
  <Svg className={classNames(styles.Icon, {}, [className])} />
));
