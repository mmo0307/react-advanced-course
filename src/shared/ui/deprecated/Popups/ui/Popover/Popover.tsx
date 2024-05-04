import React, { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import popupCls from '../../styles/popup.module.scss';
import styles from './Popover.module.scss';

interface PopoverProps {
  className?: string;

  direction?: DropdownDirection;

  trigger: ReactNode;

  children: ReactNode;
}

const Popover = memo(
  ({
    className,
    trigger,
    direction = 'down-right',
    children
  }: PopoverProps) => (
    <HPopover
      className={classNames(styles.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button
        as='div'
        className={popupCls.trigger}
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(styles.panel, {}, [popupCls[direction]])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  )
);

export { Popover };
