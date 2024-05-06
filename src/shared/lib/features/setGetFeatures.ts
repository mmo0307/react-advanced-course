import { FeatureFlags } from '../../types/featuresFlag';

let featureFlags: FeatureFlags;

const setFeatureFlags = (newFeatureFlags: FeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

const getFeatureFlags = (flag: keyof FeatureFlags) => featureFlags?.[flag];

export { getFeatureFlags, setFeatureFlags };
