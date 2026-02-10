export interface Industry {
    slug: string;
    title: string;
    description: string;
    icon: string;
    metadata?: {
        tags?: string[];
    };
}

export const industries: Industry[] = [
    {
        slug: 'logistics',
        title: "Logistics",
        description: "Real-time tracking and automated workflows.",
        icon: "truck",
        metadata: {
            tags: ["Supply Chain", "IoT", "Automation"]
        }
    },
    {
        slug: 'healthcare',
        title: "Healthcare",
        description: "Digital appointment systems and AI diagnostics.",
        icon: "heart",
        metadata: {
            tags: ["Telemedicine", "HIPAA", "AI"]
        }
    },
    {
        slug: 'real-estate',
        title: "Real Estate",
        description: "Integrated property management systems.",
        icon: "building-2",
        metadata: {
            tags: ["PropTech", "Management", "Listings"]
        }
    },
    {
        slug: 'retail',
        title: "Retail",
        description: "Engaging eCommerce and AI customer solutions.",
        icon: "shopping-bag",
        metadata: {
            tags: ["eCommerce", "Personalization", "Omnichannel"]
        }
    },
    {
        slug: 'education',
        title: "Education",
        description: "Interactive eLearning and adaptive platforms.",
        icon: "book",
        metadata: {
            tags: ["EdTech", "LMS", "Gamification"]
        }
    },
    {
        slug: 'manufacturing',
        title: "Manufacturing",
        description: "IoT monitoring and predictive maintenance.",
        icon: "factory",
        metadata: {
            tags: ["Industry 4.0", "IoT", "Smart Factory"]
        }
    },
    {
        slug: 'finance',
        title: "Finance",
        description: "AI analytics and compliance automation.",
        icon: "bar-chart-2",
        metadata: {
            tags: ["FinTech", "Process Automation", "Security"]
        }
    },
    {
        slug: 'hospitality',
        title: "Hospitality",
        description: "Dynamic booking and itinerary planners.",
        icon: "map",
        metadata: {
            tags: ["TravelTech", "Booking Engines", "CX"]
        }
    }
];
