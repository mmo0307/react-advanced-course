import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      <Input
        className={styles.input}
        placeholder={t('Введите username')}
        autofocus
      />
      <Input className={styles.input} placeholder={t('Введите пароль')} />
      <Button>{t('Войти')}</Button>
    </div>
  );
};

export { LoginForm };
