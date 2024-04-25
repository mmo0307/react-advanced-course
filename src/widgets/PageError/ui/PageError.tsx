import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const onReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button className={styles.button} onClick={onReloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};

export { PageError };
