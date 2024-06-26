import React, {
  memo,
  MutableRefObject,
  PropsWithChildren,
  UIEvent,
  useRef
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath, scrollActions } from '@/features/ScrollSave';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeature } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useTrottle';
import { TestProps } from '@/shared/types/tests';

import styles from './Page.module.scss';

interface PageProps extends PropsWithChildren, TestProps {
  className?: string;

  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(
  ({ className, children, onScrollEnd, ...props }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const { pathname } = useLocation();

    const dispatch = useAppDispatch();

    const scrollPosition = useSelector((state: StateSchema) =>
      getScrollByPath(state, pathname)
    );

    const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
      dispatch(
        scrollActions.setScrollPosition({
          path: pathname,

          position: event.currentTarget.scrollTop
        })
      );
    }, 500);

    useInitialEffect(() => {
      wrapperRef.current.scrollTop = scrollPosition;
    });

    useInfiniteScroll({
      triggerRef,
      wrapperRef: toggleFeature({
        name: 'isAppRedesigned',
        on: () => undefined,
        off: () => wrapperRef
      }),
      callback: onScrollEnd
    });

    return (
      <main
        id={PAGE_ID}
        ref={wrapperRef}
        className={classNames(
          toggleFeature({
            name: 'isAppRedesigned',
            on: () => styles.pageRedesigned,
            off: () => styles.page
          }),
          {},
          [className]
        )}
        onScroll={onScroll}
        data-testid={props['data-testid'] ?? 'Page'}
      >
        {children}

        {onScrollEnd ? (
          <div
            className={styles.trigger}
            ref={triggerRef}
          />
        ) : null}
      </main>
    );
  }
);
