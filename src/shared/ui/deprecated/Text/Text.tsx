import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { TextAlign, TextSize, TextTheme } from './model/consts';
import { HeaderTagType, TextProps } from './model/types';

import styles from './Text.module.scss';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1'
};

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Text = memo(
  ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text'
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
      <div
        className={classNames(
          styles.Text,
          {
            [styles[theme]]: true,
            [styles[align]]: true,
            [styles[size]]: true
          },
          [className]
        )}
      >
        {title && (
          <HeaderTag
            className={styles.title}
            data-testid={`${dataTestId}.Header`}
          >
            {title}
          </HeaderTag>
        )}

        {text && (
          <p
            className={styles.text}
            data-testid={`${dataTestId}.Paragraph`}
          >
            {text}
          </p>
        )}
      </div>
    );
  }
);

export { Text };
