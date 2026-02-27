import { projects as projectsEn } from './projects.en';
import { projects as projectsVi } from './projects.vi';
import type { Project } from './projects.en';

export type { Project };

export function getProjects(locale: string): Project[] {
    return locale === 'vi' ? projectsVi : projectsEn;
}
