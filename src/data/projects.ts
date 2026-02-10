export interface Project {
    slug: string;
    name: string;
    client: string;
    year: string;
    category?: string;
    tags?: string[];
    tagline?: string;
    description?: string;
    role?: string;
    image?: string;
    industry?: string;
    services?: string[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

export const projects: Project[] = [
    {
        slug: 'summit',
        name: 'Summit',
        client: 'Google',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop',
        category: 'Event Branding',
        description: 'A global summit experience re-imagined for the hybrid era.',
        tags: ['Experience', 'Motion', 'Identity'],
        industry: 'education'
    },
    {
        slug: 'next-2025',
        name: 'Next 2025',
        client: 'Google',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
        category: 'Digital Product',
        description: 'Next gen cloud platform interface design system.',
        tags: ['System', 'UI/UX', 'Cloud'],
        industry: 'finance'
    },
    {
        slug: 'wrapped-2024',
        name: 'Wrapped 2024',
        client: 'Spotify',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2574&auto=format&fit=crop',
        category: 'Campaign',
        description: 'The year in review, visualized through data-driven motion.',
        tags: ['Data Viz', 'Social', 'Campaign'],
        industry: 'retail'
    },
    {
        slug: 'back-market',
        name: 'Motion Identity',
        client: 'Back Market',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2787&auto=format&fit=crop',
        category: 'Brand System',
        tagline: 'A purposeful motion identity for the leader in circular tech.',
        description: 'Back Market is the leading dedicated renewed tech marketplace. Our mission is to restore trust and desire for refurbished devices.',
        role: 'Motion Design Lead',
        services: ['Motion Strategy', 'Motion System', 'Brand Guidelines'],
        tags: ['Branding', 'Motion System', 'Green Tech'],
        testimonial: {
            quote: "The motion identity has transformed how we communicate our brand values. It's fluid, dynamic, and perfectly captures our mission.",
            author: "Sarah Jenkins",
            role: "Head of Brand, Back Market"
        },
        industry: 'retail'
    },
    {
        slug: 'turbotax',
        name: 'TurboTax Live',
        client: 'Intuit',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2940&auto=format&fit=crop',
        category: 'Product Marketing',
        description: 'Simplifying complex financial data through approachable design.',
        tags: ['Finance', 'Web', 'Mobile'],
        industry: 'finance'
    },
    {
        slug: 'wise',
        name: 'Brand Refresh',
        client: 'Wise',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
        category: 'Rebrand',
        description: 'A global money transfer service with a bold new look.',
        tags: ['Fintech', 'Identity', 'Global'],
        industry: 'finance'
    },
];
