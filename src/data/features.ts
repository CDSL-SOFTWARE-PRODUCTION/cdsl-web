import { featureLists as featureListsEn } from './features.en';
import { featureLists as featureListsVi } from './features.vi';
import type { FeatureList, FeatureLists } from './features.en';

export type { FeatureList, FeatureLists };

export function getFeatureLists(locale: string): FeatureLists {
    return locale === 'vi' ? featureListsVi : featureListsEn;
}
