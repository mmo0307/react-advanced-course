import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { OrderBy } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
      <ToggleFeature
        name={'isAppRedesigned'}
        on={
          <VStack gap={'8'}>
            <Text title={t('Сортировать по:')} />

            <ListBox<ArticleSortField>
              items={sortFieldOptions}
              value={sort}
              onChange={onSortChange}
            />

            <ListBox<OrderBy>
              items={oderOptions}
              value={order}
              onChange={onOrderChange}
            />
          </VStack>
        }
        off={
          <div
            className={classNames(styles.ArticleSortSelector, {}, [className])}
          >
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
        }
      />
    );
  }
);

export { ArticleSortSelector };
