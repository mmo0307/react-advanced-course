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

type FlexAlign = 'center' | 'start' | 'end' | 'stretch';

type FlexDirection = 'row' | 'column';

type FlexGap = '4' | '8' | '16' | '32';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface FlexProps extends PropsWithChildren, DivProps {
  justify?: FlexJustify;

  align?: FlexAlign;

  direction: FlexDirection;

  gap?: FlexGap;

  max?: boolean;
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
  stretch: styles.alignStretch
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32
};

const Flex: FC<FlexProps> = ({
  className,
  children,
  justify = 'flex-start',
  align = 'center',
  direction = 'row',
  gap,
  max
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
        gap && gapClasses[gap]
      ]
    )}
  >
    {children}
  </div>
);

export type { FlexProps, FlexJustify, FlexAlign, FlexDirection, FlexGap };

export { Flex };
