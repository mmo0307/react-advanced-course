import { FeatureFlags } from '@/shared/types/featuresFlag';
import { getFeatureFlags } from './setGetFeatures';

interface ToggleFeatures<T> {
  name: keyof FeatureFlags;

  on: () => T;

  off: () => T;
}

function toggleFeatures<T>({ name, on, off }: ToggleFeatures<T>): T {
  if (getFeatureFlags(name)) {
    return on();
  }

  return off();
}

export { toggleFeatures };
