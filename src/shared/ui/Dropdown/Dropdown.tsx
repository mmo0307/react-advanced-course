import React, { FC, Fragment, memo, ReactNode } from 'react';
import styles from './Dropdown.module.scss';
import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { View } from '../View/View';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
  disabled?: boolean;

  content?: ReactNode;

  href?: string;

  onClick?: () => void;
}

interface DropdownProps {
  className?: string;

  direction?: DropdownDirection;

  trigger: ReactNode;

  items: DropdownItem[];
}

const Dropdown: FC<DropdownProps> = memo(
  ({ className, direction = 'down-right', trigger, items }: DropdownProps) => {
    return (
      <Menu as={'div'} className={classNames(styles.Dropdown, {}, [className])}>
        <Menu.Button className={styles.button}>{trigger}</Menu.Button>

        <Menu.Items
          className={classNames(styles.menu, {}, [styles[direction]])}
        >
          {items.map(item => (
            <>
              <View.Condition if={Boolean(item.href)}>
                <Menu.Item
                  key={Math.random()}
                  as={AppLink}
                  to={item.href as string}
                  disabled={item.disabled}
                >
                  {({ active }) => (
                    <button
                      type={'button'}
                      disabled={item.disabled}
                      onClick={item.onClick}
                      className={classNames(
                        styles.item,
                        { [styles.active]: active },
                        []
                      )}
                    >
                      {item.content}
                    </button>
                  )}
                </Menu.Item>
              </View.Condition>

              <View.Condition if={!Boolean(item.href)}>
                <Menu.Item
                  key={Math.random()}
                  as={Fragment}
                  disabled={item.disabled}
                >
                  {({ active }) => (
                    <button
                      type={'button'}
                      disabled={item.disabled}
                      onClick={item.onClick}
                      className={classNames(
                        styles.item,
                        { [styles.active]: active },
                        []
                      )}
                    >
                      {item.content}
                    </button>
                  )}
                </Menu.Item>
              </View.Condition>
            </>
          ))}
        </Menu.Items>
      </Menu>
    );
  }
);

export { Dropdown };
