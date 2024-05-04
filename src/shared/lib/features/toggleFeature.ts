import { FeatureFlags } from '@/shared/types/featuresFlag';
import { getFeatureFlags } from './setGetFeatures';

interface ToggleFeature<T> {
  name: keyof FeatureFlags;

  on: () => T;

  off: () => T;
}

function toggleFeature<T>({ name, on, off }: ToggleFeature<T>): T {
  if (getFeatureFlags(name)) {
    return on();
  }

  return off();
}

export { toggleFeature };
