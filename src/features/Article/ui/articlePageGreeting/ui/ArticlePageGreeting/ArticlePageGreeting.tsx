import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useMobile } from '@/shared/lib/hooks/useModile';
import { Text } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { View } from '@/shared/ui/redesigned/View';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isArticlesPageHasBeenOpen } = useJsonSettings();

  const isMobile = useMobile();

  const onClose = () => setIsOpen(false);

  useEffect(() => {
    if (!isArticlesPageHasBeenOpen) {
      setIsOpen(true);

      dispatch(saveJsonSettings({ isArticlesPageHasBeenOpen: true }));
    }
  }, [dispatch, isArticlesPageHasBeenOpen]);

  return (
    <>
      <View.Condition if={isMobile}>
        <Drawer>
          <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t('Здесь вы можете найти много интересного')}
          />
        </Drawer>
      </View.Condition>

      <View.Condition if={!isMobile}>
        <Modal
          lazy
          isOpen={isOpen}
          onClose={onClose}
        >
          <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t('Здесь вы можете найти много интересного')}
          />
        </Modal>
      </View.Condition>
    </>
  );
});
