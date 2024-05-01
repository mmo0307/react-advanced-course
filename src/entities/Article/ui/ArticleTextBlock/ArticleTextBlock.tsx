import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

import { ArticleTextBlockType } from '../../model/types/article';

import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;

  block: ArticleTextBlockType;
}

const ArticleTextBlock = memo(({ className, block }: ArticleTextBlockProps) => (
  <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
    {block.title && (
      <Text
        title={block.title}
        className={styles.title}
      />
    )}

    {block.paragraphs.map((paragraph) => (
      <Text
        key={Math.random()}
        text={paragraph}
        className={styles.paragraph}
      />
    ))}
  </div>
));

export { ArticleTextBlock };
