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
        slug: 'hospitality',
        title: "Hospitality",
        description: "Dynamic booking and itinerary planners.",
        icon: "map",
        metadata: {
            tags: ["TravelTech", "Booking Engines", "CX"]
        }
    },
    {
        slug: 'technology',
        title: "Technology",
        description: "Advanced software architecture and platform engineering.",
        icon: "cpu",
        metadata: {
            tags: ["SaaS", "Cloud Native", "DevOps"]
        }
    }
];
