import { headerMenu as headerMenuEn, footerMenu as footerMenuEn } from './menu.en';
import { headerMenu as headerMenuVi, footerMenu as footerMenuVi } from './menu.vi';
import type { MenuItem } from './menu.en';

export type { MenuItem };

export function getHeaderMenu(locale: string): MenuItem[] {
    return locale === 'vi' ? headerMenuVi : headerMenuEn;
}

export function getFooterMenu(locale: string): { title: string; links: { name: string; link: string }[] }[] {
    return locale === 'vi' ? footerMenuVi : footerMenuEn;
}
