import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { ArticleImageBlockType } from '../../model/types/article';

import styles from './ArticleImageBlock.module.scss';
import { TextAlign } from 'shared/ui/Text/model/consts';

interface ArticleImageBlockProps {
  className?: string;

  block: ArticleImageBlockType;
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
