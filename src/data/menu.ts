export interface MenuItem {
    name: string;
    link: string;
    showArrow?: boolean;
    children?: MenuItem[];
}

export const headerMenu: MenuItem[] = [
    { name: 'Projects', link: '/projects' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' }
];

export const footerMenu: MenuItem[] = [
    { name: 'Work in Progress', link: '/ecliptic-escape/404' },
];

