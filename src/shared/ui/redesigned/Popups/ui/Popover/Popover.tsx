import React, { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { mapDirectionClasses } from '../../styles/const';
import { DirectionType } from '../../types';

import popupCls from '../../styles/popup.module.scss';
import styles from './Popover.module.scss';

interface PopoverProps {
  className?: string;

  children: ReactNode;

  trigger: ReactNode;

  direction?: DirectionType;

  unmount?: boolean;
}

export const Popover = memo(
  ({
    className,
    children,
    trigger,
    direction = 'bottom left',
    unmount = true
  }: PopoverProps) => {
    const popoverItems = [
      mapDirectionClasses[direction],
      popupCls.items,
      styles.popover
    ];

    return (
      <HPopover className={classNames(popupCls.wrapper, {}, [className])}>
        <HPopover.Button
          as='div'
          className={popupCls.trigger}
        >
          {trigger}
        </HPopover.Button>

        <HPopover.Panel
          unmount={unmount}
          className={classNames(styles.menu, {}, popoverItems)}
        >
          {children}
        </HPopover.Panel>
      </HPopover>
    );
  }
);
