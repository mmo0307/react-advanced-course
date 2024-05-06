import React, { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Icon } from '../Icon/Icon';

import StarIcon from '@/shared/assets/icons/star.svg';

import styles from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;

  size?: number;

  selectedStars?: number;

  onSelect?: (starsCount: number) => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const StarRating = memo(
  ({ className, size = 30, selectedStars = 0, onSelect }: StarRatingProps) => {
    const stars: number[] = [1, 2, 3, 4, 5];

    const [currentStarsCount, setCurrentStarsCount] =
      useState<number>(selectedStars);

    const [isSelected, setIsSelected] = useState<boolean>(
      Boolean(selectedStars)
    );

    const onHover = (starsCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(starsCount);
      }
    };

    const onLeave = () => {
      if (!isSelected) {
        setCurrentStarsCount(0);
      }
    };

    const onClick = (starsCount: number) => () => {
      if (!isSelected) {
        onSelect?.(starsCount);

        setCurrentStarsCount(starsCount);

        setIsSelected(true);
      }
    };

    return (
      <div className={classNames('', {}, [className])}>
        {stars.map((starNumber) => (
          <Icon
            className={classNames(
              styles.starIcon,
              {
                [styles.selected]: isSelected,
                [styles.hovered]: Boolean(currentStarsCount >= starNumber),
                [styles.normal]: !Boolean(currentStarsCount >= starNumber)
              },
              []
            )}
            Svg={StarIcon}
            key={starNumber}
            width={size}
            height={size}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(starNumber)}
            onClick={onClick(starNumber)}
            data-testid={`StarRating.${starNumber}`}
            data-selected={currentStarsCount >= starNumber}
          />
        ))}
      </div>
    );
  }
);

export { StarRating };
