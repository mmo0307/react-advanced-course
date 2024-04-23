import { useEffect } from 'react';

// eslint-disable-next-line
export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback();
    }
  }, []);
}
