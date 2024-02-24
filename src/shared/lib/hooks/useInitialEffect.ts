import { useEffect } from 'react';

// eslint-disable-next-line
export function useInitialEffect(callback: () => void, deps: any[] = []) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
  }, deps);
}
