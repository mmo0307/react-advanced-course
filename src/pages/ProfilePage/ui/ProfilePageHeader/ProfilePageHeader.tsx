import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData
} from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';

import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation();

  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />

      <View.Condition if={Boolean(readonly)}>
        <Button
          className={styles.editBtn}
          theme={ButtonThemes.OUTLINE}
          onClick={onEdit}
        >
          {t('Редактировать')}
        </Button>
      </View.Condition>

      <View.Condition if={!Boolean(readonly)}>
        <>
          <Button
            className={styles.editBtn}
            theme={ButtonThemes.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t('Отменить')}
          </Button>

          <Button
            className={styles.saveBtn}
            theme={ButtonThemes.OUTLINE}
            onClick={onSave}
          >
            {t('Сохранить')}
          </Button>
        </>
      </View.Condition>
    </div>
  );
};

export { ProfilePageHeader };
