import React, { memo } from 'react';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';

import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;

  block: ArticleCodeBlock;
}

const ArticleCodeBlock = memo(({ className, block }: ArticleCodeBlockProps) => (
  <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
    <Code text={block.code} />
  </div>
));

export { ArticleCodeBlock };
