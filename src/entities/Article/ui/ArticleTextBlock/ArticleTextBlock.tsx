import React, { memo } from 'react';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;

  block: ArticleTextBlock;
}

const ArticleTextBlock = memo(({ className, block }: ArticleTextBlockProps) => (
  <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
    {block.title && <Text title={block.title} className={styles.title} />}

    {block.paragraphs.map(paragraph => (
      <Text key={paragraph} text={paragraph} className={styles.paragraph} />
    ))}
  </div>
));

export { ArticleTextBlock };
