import React, { FC, memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import {
  Button,
  ButtonSize,
  ButtonThemes
} from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

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
      <Card
        className={className}
        max
        data-testid='RatingCard'
      >
        <VStack
          align='center'
          gap='8'
          max
        >
          <Text title={starsCount ? t('Спасибо за оценку!') : title} />

          <StarRating
            selectedStars={starsCount}
            size={40}
            onSelect={onSelectStars}
          />
        </VStack>

        <BrowserView>
          <Modal
            isOpen={isModalOpen}
            lazy
          >
            <VStack
              max
              gap='32'
            >
              <>
                <Text title={feedbackTitle} />

                <Input
                  value={feedback}
                  onChange={setFeedback}
                  placeholder={t('Ваш отзыв')}
                  data-testid='RatingCard.Input'
                />
              </>

              <HStack
                max
                gap='16'
                justify='flex-end'
              >
                <Button
                  onClick={cancelHandle}
                  theme={ButtonThemes.OUTLINE_RED}
                  data-testid='RatingCard.Close'
                >
                  {t('Закрыть')}
                </Button>

                <Button
                  data-testid='RatingCard.Send'
                  onClick={acceptHandle}
                >
                  {t('Отправить')}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>

        <MobileView>
          <Drawer
            isOpen={isModalOpen}
            lazy
            onClose={cancelHandle}
          >
            <VStack gap='32'>
              <>
                <Text title={feedbackTitle} />

                <Input
                  value={feedback}
                  onChange={setFeedback}
                  placeholder={t('Ваш отзыв')}
                />
              </>

              <Button
                fullWidth
                onClick={acceptHandle}
                size={ButtonSize.L}
              >
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
