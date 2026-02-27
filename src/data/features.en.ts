import { Code, Smartphone, Share2, Workflow, Zap, Presentation, Album } from 'lucide-react';

export interface Feature {
    icon: typeof Album;
    title: string;
    description: string;
}

export interface FeatureList {
    features: Feature[];
}

export interface FeatureLists {
    [key: string]: FeatureList;
}

export const featureLists: FeatureLists = {
    main: {
        features: [
            {
                icon: Code,
                title: 'Web Development',
                description: 'We build scalable, responsive websites and web applications that engage users and drive growth for your business.'
            },
            {
                icon: Smartphone,
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile apps that deliver outstanding user experiences across all devices.'
            },
            {
                icon: Share2,
                title: 'IoT Integration',
                description: 'Smart systems enabling real-time monitoring, data collection, and seamless communication between devices.'
            },
            {
                icon: Workflow,
                title: 'Automation Solutions',
                description: 'Custom automation sequences that streamline operations, reduce errors, and increase overall efficiency.'
            },
            {
                icon: Zap,
                title: 'AI & Machine Learning',
                description: 'Intelligent systems that transform data into actionable insights for smarter business decisions.'
            },
            {
                icon: Presentation,
                title: 'Consulting & Strategy',
                description: 'Expert guidance to align technology with your business goals, ensuring a successful digital transformation.'
            }

        ]
    },
    // ...keep other feature lists if needed
};
