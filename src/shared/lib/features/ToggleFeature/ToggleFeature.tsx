import { ReactElement } from 'react';

import { FeatureFlags } from '@/shared/types/featuresFlag';

import { getFeatureFlags } from '../setGetFeatures';

interface ToggleFeatureOptions {
  name: keyof FeatureFlags;

  on: ReactElement;

  off: ReactElement;
}

function ToggleFeature({
  name,
  on,
  off
}: ToggleFeatureOptions): ReactElement | null {
  if (getFeatureFlags(name)) {
    return on;
  }

  return off;
}

export { ToggleFeature };
