import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderBy } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select/Select';

import { ArticleSortField } from '../../model/const';

import styles from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;

  sort: ArticleSortField;

  order: OrderBy;

  onSortChange: (sort: ArticleSortField) => void;

  onOrderChange: (order: OrderBy) => void;
}

const ArticleSortSelector = memo(
  ({
    className,
    sort,
    order,
    onSortChange,
    onOrderChange
  }: ArticleSortSelectorProps) => {
    const { t } = useTranslation();

    const oderOptions = useMemo<SelectOption<OrderBy>[]>(
      () => [
        {
          value: 'asc',
          content: t('возрастанию')
        },
        {
          value: 'desc',
          content: t('убыванию')
        }
      ],
      [t]
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED_AT,
          content: t('дате создания')
        },
        {
          value: ArticleSortField.TITLE,
          content: t('названию')
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('просмотрам')
        }
      ],
      [t]
    );

    return (
      <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
        <Select<ArticleSortField>
          options={sortFieldOptions}
          label={t('Сортировать ПО')}
          value={sort}
          onChange={onSortChange}
        />

        <Select<OrderBy>
          options={oderOptions}
          label={t('по')}
          value={order}
          onChange={onOrderChange}
        />
      </div>
    );
  }
);

export { ArticleSortSelector };
