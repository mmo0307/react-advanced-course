import React, { FC, memo, PropsWithChildren, Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ListBox.module.scss';
import { Listbox as HListbox } from '@headlessui/react';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string;

  content: ReactNode;

  disabled?: boolean;
}

type DropdownDirection = 'up' | 'down';

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

const ListBox: FC<ListBoxProps> = memo(
  ({
    className,
    label,
    items,
    value,
    defaultValue,
    readonly,
    direction = 'down',
    onChange
  }: ListBoxProps) => (
    <HStack gap='4'>
      {label && <span>{`${label} >`}</span>}

      <HListbox
        as={'div'}
        disabled={readonly}
        className={classNames(styles.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={styles.trigger}>
          <Button>{value ?? defaultValue}</Button>
        </HListbox.Button>

        <HListbox.Options
          className={classNames(styles.options, {}, [styles[direction]])}
        >
          {items?.map(item => (
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
                      [styles.active]: active,
                      [styles.disabled]: item.disabled
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
