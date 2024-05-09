import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonThemes
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { View } from '@/shared/ui/redesigned/View';

import { getProfileCanEdit, getProfileReadonly } from '../../model/selectors';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;

  id: string;
}

const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = ({
  className,
  id
}) => {
  const { t } = useTranslation();

  const isCanEdit = useSelector(getProfileCanEdit);

  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (id) {
      dispatch(updateProfileData());
    }
  }, [dispatch]);

  return (
    <HStack
      max
      tagname='header'
      justify='space-between'
      className={classNames('', {}, [className])}
    >
      <ToggleFeature
        name={'isAppRedesigned'}
        on={
          <>
            <Text title={t('Профиль')} />

            <View.Condition if={isCanEdit}>
              <>
                <View.Condition if={Boolean(readonly)}>
                  <Button
                    variant='outlined'
                    onClick={onEdit}
                    data-testid='EditableProfileCardHeader.EditButton'
                  >
                    {t('Редактировать')}
                  </Button>
                </View.Condition>

                <View.Condition if={!Boolean(readonly)}>
                  <HStack gap='4'>
                    <Button
                      variant='outlinedCancel'
                      onClick={onCancelEdit}
                      data-testid='EditableProfileCardHeader.CancelButton'
                    >
                      {t('Отменить')}
                    </Button>

                    <Button
                      variant='outlined'
                      onClick={onSave}
                      data-testid='EditableProfileCardHeader.SaveButton'
                    >
                      {t('Сохранить')}
                    </Button>
                  </HStack>
                </View.Condition>
              </>
            </View.Condition>
          </>
        }
        off={
          <>
            <TextDeprecated title={t('Профиль')} />

            <View.Condition if={isCanEdit}>
              <>
                <View.Condition if={Boolean(readonly)}>
                  <ButtonDeprecated
                    theme={ButtonThemes.OUTLINE}
                    onClick={onEdit}
                    data-testid='EditableProfileCardHeader.EditButton'
                  >
                    {t('Редактировать')}
                  </ButtonDeprecated>
                </View.Condition>

                <View.Condition if={!Boolean(readonly)}>
                  <HStack gap='4'>
                    <ButtonDeprecated
                      theme={ButtonThemes.OUTLINE_RED}
                      onClick={onCancelEdit}
                      data-testid='EditableProfileCardHeader.CancelButton'
                    >
                      {t('Отменить')}
                    </ButtonDeprecated>

                    <ButtonDeprecated
                      theme={ButtonThemes.OUTLINE}
                      onClick={onSave}
                      data-testid='EditableProfileCardHeader.SaveButton'
                    >
                      {t('Сохранить')}
                    </ButtonDeprecated>
                  </HStack>
                </View.Condition>
              </>
            </View.Condition>
          </>
        }
      />
    </HStack>
  );
};

export { EditableProfileCardHeader };
