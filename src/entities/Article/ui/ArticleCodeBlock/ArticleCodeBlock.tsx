import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code/Code';

import { ArticleCodeBlockType } from '../../model/types/article';

import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;

  block: ArticleCodeBlockType;
}

const ArticleCodeBlock = memo(({ className, block }: ArticleCodeBlockProps) => (
  <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
    <Code text={block.code} />
  </div>
));

export { ArticleCodeBlock };
