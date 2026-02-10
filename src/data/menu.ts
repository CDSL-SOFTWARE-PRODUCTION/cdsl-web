export interface MenuItem {
    name: string;
    link: string;
    showArrow?: boolean;
    children?: MenuItem[];
}

export const headerMenu: MenuItem[] = [
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' }
];

export const footerMenu: MenuItem[] = [
    { name: 'Work in Progress', link: '/ecliptic-escape/404' },
];

export const legalMenu: MenuItem[] = [
    { name: 'Privacy Policy', link: '/ecliptic-escape/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/ecliptic-escape/legal/terms-of-service' }
];

