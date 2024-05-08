import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { TextProps } from './model/types';

import styles from './Text.module.scss';

const Text = memo(
  ({
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
    size = 'size_m',
    tagname: Tag = 'h1',
    'data-testid': dataTestId = 'Text',
    bold
  }: TextProps) => {
    const additional = [className, styles[theme], styles[align], styles[size]];

    return (
      <>
        {title && (
          <Tag
            className={classNames(
              styles.title,
              { [styles.boldTitle]: bold },
              additional
            )}
            data-testid={`${dataTestId}.Header`}
          >
            {title}
          </Tag>
        )}
        {text && (
          <p
            className={classNames(
              styles.paragraph,
              { [styles.boldText]: bold },
              additional
            )}
            data-testid={`${dataTestId}.Paragraph`}
          >
            {text}
          </p>
        )}
      </>
    );
  }
);

export { Text };
