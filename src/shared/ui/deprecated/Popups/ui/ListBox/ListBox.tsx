import React, { Fragment, memo, PropsWithChildren, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';

import popupStyles from '../../styles/popup.module.scss';
import styles from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;

  content: ReactNode;

  disabled?: boolean;
}

interface ListBoxProps extends PropsWithChildren {
  className?: string;

  items?: ListBoxItem[];

  label?: string;

  value?: string;

  defaultValue?: string;

  readonly?: boolean;

  direction?: DropdownDirection;

  onChange?: <T extends string>(value: T) => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const ListBox = memo(
  ({
    className,
    label,
    items,
    value,
    defaultValue,
    readonly,
    direction = 'down-left',
    onChange
  }: ListBoxProps) => (
    <HStack gap='4'>
      {label && <span>{`${label} >`}</span>}

      <HListbox
        as={'div'}
        disabled={readonly}
        className={classNames(styles.ListBox, {}, [
          className,
          popupStyles.popup
        ])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={styles.trigger}>
          <Button>{value ?? defaultValue}</Button>
        </HListbox.Button>

        <HListbox.Options
          className={classNames(styles.options, {}, [popupStyles[direction]])}
        >
          {items?.map((item) => (
            <HListbox.Option
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    styles.item,
                    {
                      [popupStyles.active]: active,
                      [popupStyles.disabled]: item.disabled
                    },
                    []
                  )}
                >
                  {selected && '✓'}

                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  )
);

export { ListBox };
