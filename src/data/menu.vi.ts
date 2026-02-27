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
        title: 'Công ty',
        links: [
            { name: 'Dự án', link: '/projects' },
            { name: 'Dịch vụ', link: '/services' },
            { name: 'Về chúng tôi', link: '/about' },
            { name: 'Liên hệ', link: '/contact' },
        ]
    },
    {
        title: 'Dịch vụ',
        links: [
            { name: 'Kiến trúc Nền tảng', link: '/services' },
            { name: 'Tự động hóa Vận hành', link: '/services' },
            { name: 'Kỹ thuật Tăng trưởng', link: '/services' },
            { name: 'Đội ngũ Chuyên trách', link: '/services' },
        ]
    },
    {
        title: 'Ngành nghề',
        links: [
            { name: 'Logistics', link: '/projects?industry=logistics' },
            { name: 'Y tế', link: '/projects?industry=healthcare' },
            { name: 'Tài chính - Công nghệ', link: '/projects?industry=finance' },
            { name: 'Bán lẻ', link: '/projects?industry=retail' },
        ]
    }
];


