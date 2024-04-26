import React, { Fragment, memo, ReactNode, useId } from 'react';
import styles from './Dropdown.module.scss';
import popupStyles from '../../styles/popup.module.scss';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';

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

const Dropdown = memo(
  ({ className, direction = 'down-right', trigger, items }: DropdownProps) => {
    return (
      <Menu
        as={'div'}
        className={classNames(styles.Dropdown, {}, [
          className,
          popupStyles.popup
        ])}
      >
        <Menu.Button className={styles.button}>{trigger}</Menu.Button>

        <Menu.Items
          className={classNames(styles.menu, {}, [popupStyles[direction]])}
        >
          {items.map(item => {
            if (item.href) {
              return (
                <Menu.Item
                  key={useId()}
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
                        { [popupStyles.active]: active },
                        []
                      )}
                    >
                      {item.content}
                    </button>
                  )}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item key={useId()} as={Fragment} disabled={item.disabled}>
                {({ active }) => (
                  <button
                    type={'button'}
                    disabled={item.disabled}
                    onClick={item.onClick}
                    className={classNames(
                      styles.item,
                      { [popupStyles.active]: active },
                      []
                    )}
                  >
                    {item.content}
                  </button>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    );
  }
);

export { Dropdown };
