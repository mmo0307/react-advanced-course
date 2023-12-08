import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkThemes } from 'shared/ui/AppLink/ui/AppLink';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(styles.navbar, {}, [className])}>
    <div className={styles.links}>
      <AppLink
        to='/'
        theme={AppLinkThemes.SECONDARY}
        className={styles.mainLink}
      >
        Main
      </AppLink>
      <AppLink to='/about' theme={AppLinkThemes.SECONDARY}>
        About
      </AppLink>
    </div>
  </div>
);

export { Navbar };
