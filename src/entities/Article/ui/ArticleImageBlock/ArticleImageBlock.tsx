import React, { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;

  block: ArticleImageBlock;
}

const ArticleImageBlock = memo(
  ({ className, block }: ArticleImageBlockProps) => (
    <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
      <img src={block.src} alt={block.title} className={styles.img} />

      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  )
);

export { ArticleImageBlock };
