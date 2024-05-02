import { FeaturesFlag } from '../../types/featuresFlag';

let featureFlags: FeaturesFlag;

const setFeatureFlags = (newFeatureFlags: FeaturesFlag) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

const getFeatureFlags = (flag: keyof FeaturesFlag) => featureFlags[flag];

export { setFeatureFlags, getFeatureFlags };
