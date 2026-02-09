export interface MenuItem {
    name: string;
    link: string;
    showArrow?: boolean;
    children?: MenuItem[];
}

export const headerMenu: MenuItem[] = [
    { name: 'About', link: '/about' },
    { name: 'Our Team', link: '/team' },
    { name: 'Blog', link: '/blog' },
    {
        name: 'Industries', link: '/industries', showArrow: false,
        // children: [
        //     { name: 'Typography', link: '/ecliptic-escape/style-guide#typography' },
        //     { name: 'Colors', link: '/ecliptic-escape/style-guide#colors' },
        //     { name: 'Links', link: '/ecliptic-escape/style-guide#links' },
        //     { name: 'Buttons', link: '/ecliptic-escape/style-guide#buttons' },
        //     { name: 'Forms', link: '/ecliptic-escape/style-guide#forms' },
        //     { name: 'Lists', link: '/ecliptic-escape/style-guide#lists' },
        // ]
    }
];

export const footerMenu: MenuItem[] = [
    { name: 'Work in Progress', link: '/ecliptic-escape/404' },
];

export const legalMenu: MenuItem[] = [
    { name: 'Privacy Policy', link: '/ecliptic-escape/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/ecliptic-escape/legal/terms-of-service' }
];

