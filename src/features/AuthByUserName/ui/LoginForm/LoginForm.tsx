import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';

import { loginActions, loginReducer } from '../..';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUsername';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;

  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm: FC<LoginFormProps> = memo(
  ({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);

    const password = useSelector(getLoginPassword);

    const error = useSelector(getLoginError);

    const isLoading = useSelector(getLoginIsLoading);

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

    const onLoginClick = useCallback(async () => {
      const result = await dispatch(loginByUsername({ username, password }));

      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess();

        /* eslint-disable-next-line */
        // @ts-ignore
        const id = result.payload?.id;

        navigate(getRouteProfile(id));
      }
    }, [onSuccess, dispatch, password, username]);

    return (
      <DynamicModuleLoader
        removeAfterUnmount
        reducers={initialReducers}
      >
        <div className={classNames(styles.LoginForm, {}, [className])}>
          <Text title={t('Форма авторизации')} />

          {error && (
            <Text
              text={t('Вы ввели неверный логин или пароль')}
              theme={TextTheme.ERROR}
            />
          )}

          <Input
            placeholder={t('Введите username')}
            onChange={onChangeUserName}
            value={username}
            autofocus
          />

          <Input
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
      </DynamicModuleLoader>
    );
  }
);

export default LoginForm;
