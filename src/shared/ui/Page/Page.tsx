import React, {
  memo,
  MutableRefObject,
  PropsWithChildren,
  useRef
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

import styles from './Page.module.scss';

interface PageProps extends PropsWithChildren {
  className?: string;

  onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(styles.Page, {}, [className])}
    >
      {children}

      <div ref={triggerRef} />
    </section>
  );
});
