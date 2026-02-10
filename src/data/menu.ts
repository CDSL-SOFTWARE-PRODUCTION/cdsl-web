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

export const footerMenu = [
    {
        title: 'Platform',
        links: [
            { name: 'Projects', link: '/projects' },
            { name: 'About', link: '/about' },
            { name: 'Services', link: '/services' },
            { name: 'Contact', link: '/contact' },
        ]
    },
    {
        title: 'Services',
        links: [
            { name: 'Web & Mobile', link: '/services#core' },
            { name: 'UX & UI Design', link: '/services#core' },
            { name: 'Cloud & Systems', link: '/services#core' },
            { name: 'Recruitment', link: '/services#recruitment' },
        ]
    },
    {
        title: 'Industries',
        links: [
            { name: 'Logistics', link: '/projects?industry=logistics' },
            { name: 'Healthcare', link: '/projects?industry=healthcare' },
            { name: 'Retail', link: '/projects?industry=retail' },
            { name: 'Finance', link: '/projects?industry=finance' },
        ]
    }
];


