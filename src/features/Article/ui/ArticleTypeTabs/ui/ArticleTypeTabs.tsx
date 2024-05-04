import React, { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/deprecated/Tabs';

interface ArticleTypeTabsProps {
  className?: string;

  value: ArticleType;

  onTabClick: (type: TabItem) => void;
}

const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo(
  ({ className, value, onTabClick }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
      () => [
        {
          value: ArticleType.ALL,
          content: t('Все статьи')
        },
        {
          value: ArticleType.IT,
          content: t('Айти')
        },
        {
          value: ArticleType.SCIENCE,
          content: t('Наука')
        },
        {
          value: ArticleType.ECONOMICS,
          content: t('Экономика')
        }
      ],
      [t]
    );

    return (
      <Tabs
        tabs={typeTabs}
        value={value}
        onTabClick={onTabClick}
        className={classNames('', {}, [className])}
      />
    );
  }
);

export { ArticleTypeTabs };
