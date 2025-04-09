export interface FAQ {
    question: string;
    answer: string;
}

export interface FAQList {
    faqs: FAQ[];
}

export interface FAQLists {
    [key: string]: FAQList;
}

export const faqLists: FAQLists = {
    main: {
        faqs: [
            {
                question: 'What services does CDSL offer?',
                answer: 'CDSL offers a comprehensive range of technology services including web and mobile application development, IoT device integration, automation solutions, and AI/machine learning implementations. We create tailored solutions that address the unique challenges of your business.'
            },
            {
                question: 'Which industries does CDSL serve?',
                answer: 'We work across multiple industries including logistics & supply chain, healthcare, real estate, retail & eCommerce, education, manufacturing, finance, and hospitality. Our team has specialized knowledge in these sectors to deliver industry-specific solutions.'
            },
            {
                question: 'How does CDSL approach new projects?',
                answer: 'We begin with a thorough consultation to understand your business goals, challenges, and requirements. We then develop a strategic plan that outlines the technical approach, timeline, and budget. Throughout development, we maintain transparent communication and collaborative planning.'
            },
            {
                question: 'What happens after my project is launched?',
                answer: 'Our commitment extends beyond project delivery. We provide ongoing support, maintenance, and iterative improvements to ensure your solution continues to perform optimally and evolves with your business needs.'
            },
            {
                question: 'How does CDSL ensure the quality of its solutions?',
                answer: 'Quality is our top priority. We implement rigorous testing protocols, follow industry best practices, and adhere to stringent coding standards. Our solutions are built for durability, reliability, and exceptional user experiences.'
            },
            {
                question: 'Can CDSL help with existing systems and applications?',
                answer: 'Absolutely! We can enhance, optimize, or integrate your existing systems and applications. Our team can evaluate your current solution and propose improvements to increase functionality, performance, and user experience.'
            }
        ]
    },
    // ...keep other FAQ lists if needed
};
