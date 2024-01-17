import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUserName = useCallback(
    (values: string) => {
      dispatch(loginActions.setUsername(values));
    },
    [dispatch]
  );

  const onChangeUserPassword = useCallback(
    (values: string) => {
      dispatch(loginActions.setPassword(values));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />

      {error && (
        <Text
          text={t('Вы ввели неверный логин или пароль')}
          theme={TextTheme.ERROR}
        />
      )}

      <Input
        className={styles.input}
        placeholder={t('Введите username')}
        onChange={onChangeUserName}
        value={username}
        autofocus
      />

      <Input
        className={styles.input}
        placeholder={t('Введите пароль')}
        onChange={onChangeUserPassword}
        value={password}
      />

      <Button
        theme={ButtonThemes.OUTLINE}
        className={styles.loginBtn}
        disabled={isLoading}
        onClick={onLoginClick}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});

export { LoginForm };
