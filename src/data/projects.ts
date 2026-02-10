export interface Project {
    slug: string;
    name: string;
    client: string;
    year: string;
    tagline?: string;
    description?: string;
    role?: string;
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
        year: '2024'
    },
    {
        slug: 'next-2025',
        name: 'Next 2025',
        client: 'Google',
        year: '2025'
    },
    {
        slug: 'wrapped-2024',
        name: 'Wrapped 2024',
        client: 'Spotify',
        year: '2024'
    },
    {
        slug: 'back-market',
        name: 'Motion Identity',
        client: 'Back Market',
        year: '2025',
        tagline: 'A purposeful motion identity for the leader in circular tech.',
        description: 'Back Market is the leading dedicated renewed tech marketplace. Our mission is to restore trust and desire for refurbished devices.',
        role: 'Motion Design Lead',
        services: ['Motion Strategy', 'Motion System', 'Brand Guidelines'],
        testimonial: {
            quote: "The motion identity has transformed how we communicate our brand values. It's fluid, dynamic, and perfectly captures our mission.",
            author: "Sarah Jenkins",
            role: "Head of Brand, Back Market"
        }
    },
    {
        slug: 'turbotax',
        name: 'TurboTax Live',
        client: 'Intuit',
        year: '2024'
    },
    {
        slug: 'wise',
        name: 'Brand Refresh',
        client: 'Wise',
        year: '2024'
    },
];
