import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';

import LinuxLogo from '@/shared/assets/icons/linux-logo.svg';

import styles from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;

  size?: number;
}

const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
  return (
    <HStack
      max
      justify='center'
      className={classNames(styles.appLogoWrapper, {}, [className])}
    >
      <LinuxLogo
        width={size}
        height={size}
        color='black'
        className={styles.appLogo}
      />

      <div className={styles.gradientBig} />

      <div className={styles.gradientSmall} />
    </HStack>
  );
});

export { AppLogo };
