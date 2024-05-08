import React, { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClasses } from '../../styles/const';
import { DirectionType } from '../../types';

import popupStyles from '../../styles/popup.module.scss';
import styles from './Dropdown.module.scss';

interface DropdownItem {
  content: string;

  onClick?: () => void;

  href?: string;

  disabled?: boolean;
}

interface DropdownProps {
  className?: string;

  items: DropdownItem[];

  trigger: ReactNode;

  direction?: DirectionType;
}

const Dropdown = memo(
  ({
    className,
    direction = 'bottom right',
    trigger,
    items
  }: DropdownProps) => {
    const itemsClasses = [mapDirectionClasses[direction], popupStyles.items];

    return (
      <Menu
        as='div'
        className={classNames(popupStyles.wrapper, {}, [className])}
      >
        <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
        <Menu.Items className={classNames(styles.menu, {}, itemsClasses)}>
          {items.map((item, index) => {
            const content = ({ active }: { active: boolean }) => (
              <button
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
            );

            if (item.href) {
              return (
                <Menu.Item
                  as={AppLink}
                  refName='href'
                  to={item.href}
                  key={`dropdown-key-${index}`}
                  disabled={item.disabled}
                >
                  {content}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item
                as={Fragment}
                key={`dropdown-key-${index}`}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    );
  }
);

export { Dropdown };
