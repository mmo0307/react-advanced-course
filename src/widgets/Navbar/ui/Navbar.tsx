import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return <div className={classNames(styles.navbar, {}, [className])}></div>;
};

export { Navbar };
