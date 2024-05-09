import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Flex.module.scss';

type FlexJustify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type FlexAlign = 'center' | 'start' | 'end' | 'normal';

type FlexDirection = 'row' | 'column';

type FlexWrap = 'wrap' | 'nowrap';

type FlexGap = '4' | '8' | '16' | '24' | '32';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type TagName = keyof JSX.IntrinsicElements;

interface FlexProps extends PropsWithChildren, DivProps {
  justify?: FlexJustify;

  align?: FlexAlign;

  wrap?: FlexWrap;

  direction: FlexDirection;

  gap?: FlexGap;

  max?: boolean;

  tagname?: TagName;
}

const justifyClasses: Record<FlexJustify, string> = {
  'flex-start': styles.justifyStart,
  center: styles.justifyCenter,
  'flex-end': styles.justifyEnd,
  'space-between': styles.justifyBetween,
  'space-around': styles.justifyAround,
  'space-evenly': styles.justifyEvenly
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  normal: styles.alignNormal
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  24: styles.gap24,
  32: styles.gap32
};

const Flex: FC<FlexProps> = ({
  className,
  children,
  justify = 'flex-start',
  align = 'center',
  wrap = 'nowrap',
  direction = 'row',
  gap,
  max,
  ...props
}) => (
  <div
    className={classNames(
      styles.Flex,
      {
        [styles.max]: max
      },
      [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        styles[wrap],
        gap && gapClasses[gap]
      ]
    )}
    {...props}
  >
    {children}
  </div>
);

export type { FlexAlign, FlexDirection, FlexGap, FlexJustify, FlexProps };

export { Flex };
