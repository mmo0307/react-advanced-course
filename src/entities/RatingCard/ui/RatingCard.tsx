import React, { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { BrowserView, MobileView } from 'react-device-detect';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonSize, ButtonThemes } from '@/shared/ui/Button/model/consts';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Text } from '@/shared/ui/Text/Text';

interface RatingCardProps {
  className?: string;

  title?: string;

  feedbackTitle?: string;

  hasFeedback?: boolean;

  rate?: number;

  onCancel?: (starsCount: number) => void;

  onAccept?: (starsCount: number, feedback?: string) => void;
}

const RatingCard: FC<RatingCardProps> = memo(
  ({
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate = 0
  }: RatingCardProps) => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [starsCount, setStarsCount] = useState<number>(rate);

    const [feedback, setFeedback] = useState<string>('');

    const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);

        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(selectedStarsCount);
        }
      },
      [hasFeedback, onAccept]
    );

    const acceptHandle = useCallback(() => {
      setIsModalOpen(false);

      onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
      setIsModalOpen(false);

      onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    return (
      <Card className={className} max>
        <VStack align='center' gap='8' max>
          <Text title={starsCount ? t('Спасибо за оценку!') : title} />

          <StarRating
            selectedStars={starsCount}
            size={40}
            onSelect={onSelectStars}
          />
        </VStack>

        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            <VStack max gap='32'>
              <>
                <Text title={feedbackTitle} />

                <Input
                  value={feedback}
                  onChange={setFeedback}
                  placeholder={t('Ваш отзыв')}
                />
              </>

              <HStack max gap='16' justify='flex-end'>
                <Button onClick={cancelHandle} theme={ButtonThemes.OUTLINE_RED}>
                  {t('Закрыть')}
                </Button>

                <Button onClick={acceptHandle}>{t('Отправить')}</Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>

        <MobileView>
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            <VStack gap='32'>
              <>
                <Text title={feedbackTitle} />

                <Input
                  value={feedback}
                  onChange={setFeedback}
                  placeholder={t('Ваш отзыв')}
                />
              </>

              <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
                {t('Отправить')}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </Card>
    );
  }
);

export { RatingCard };
