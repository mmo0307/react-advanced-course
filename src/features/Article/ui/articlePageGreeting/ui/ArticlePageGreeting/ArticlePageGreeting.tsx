import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useMobile } from '@/shared/lib/hooks/useModile';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { View } from '@/shared/ui/deprecated/View';

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
