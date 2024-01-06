import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkThemes } from 'shared/ui/AppLink/ui/AppLink';
import { Button, ButtonSize, ButtonThemes } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import styles from './Sidebar.module.scss';

interface SideBarProps {
  className?: string;
}

const Sidebar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { t } = useTranslation();

  const onToggleClick = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className
      ])}
    >
      <div className={styles.items}>
        <AppLink to={RoutePath.main} theme={AppLinkThemes.SECONDARY}>
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkThemes.SECONDARY}>
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <Button
        data-testid='sidebar-toggle'
        className={styles.collapseBtn}
        theme={ButtonThemes.BACKGROUND_INVERTED}
        onClick={onToggleClick}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>>' : '<<'}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
    </div>
  );
};

export { Sidebar };
