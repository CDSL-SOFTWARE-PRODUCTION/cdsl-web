import { industries as industriesEn } from './industries.en';
import { industries as industriesVi } from './industries.vi';
import type { Industry } from './industries.en';

export type { Industry };

export function getIndustries(locale: string): Industry[] {
    return locale === 'vi' ? industriesVi : industriesEn;
}
