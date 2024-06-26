import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

import { getAddCommentFormError } from '../model/selectors/getAddCommentFormError/getAddCommentFormError';
import { getAddCommentFormText } from '../model/selectors/getAddCommentFormText/getAddCommentFormText';
import {
  addCommentFormActions,
  addCommentFormReducer
} from '../model/slices/addCommentSlice';

import styles from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;

  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();

    const text = useSelector(getAddCommentFormText);

    const error = useSelector(getAddCommentFormError);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch]
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text || '');

      onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
      <DynamicModuleLoader reducers={reducers}>
        <>
          <HStack
            max
            justify='space-between'
            className={classNames(styles.AddCommentForm, {}, [className])}
            data-testid='AddCommentForm'
          >
            <Input
              className={styles.input}
              placeholder={t('Введите текст комментария')}
              value={text}
              onChange={onCommentTextChange}
              data-testid='AddCommentForm.Input'
            />

            <Button
              theme={ButtonThemes.OUTLINE}
              onClick={onSendHandler}
              data-testid='AddCommentForm.Button'
            >
              {t('Отправить')}
            </Button>
          </HStack>

          {error && (
            <Text
              text={t('Ошибка при отправки комментария')}
              theme={TextTheme.ERROR}
            />
          )}
        </>
      </DynamicModuleLoader>
    );
  }
);

export default AddCommentForm;
