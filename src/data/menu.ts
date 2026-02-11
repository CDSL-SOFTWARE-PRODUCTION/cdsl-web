export interface MenuItem {
    name: string;
    link: string;
    showArrow?: boolean;
    children?: MenuItem[];
}

export const headerMenu: MenuItem[] = [
    { name: 'Projects', link: '/projects' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' }
];

export const footerMenu = [
    {
        title: 'Company',
        links: [
            { name: 'Projects', link: '/projects' },
            { name: 'Services', link: '/services' },
            { name: 'About', link: '/about' },
            { name: 'Contact', link: '/contact' },
        ]
    },
    {
        title: 'Services',
        links: [
            { name: 'Platform Architecture', link: '/services' },
            { name: 'Operational Automation', link: '/services' },
            { name: 'Growth Engineering', link: '/services' },
            { name: 'Dedicated Teams', link: '/services' },
        ]
    },
    {
        title: 'Industries',
        links: [
            { name: 'Logistics', link: '/projects?industry=logistics' },
            { name: 'Healthcare', link: '/projects?industry=healthcare' },
            { name: 'Fintech', link: '/projects?industry=finance' },
            { name: 'Retail', link: '/projects?industry=retail' },
        ]
    }
];


