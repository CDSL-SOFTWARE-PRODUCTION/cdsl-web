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
        image?: string;
    };
    overview?: string;
    problem?: string;
    solution?: string;
    result?: string;
    techStack?: { category: string; items: string[] }[];
    gallery?: { src: string; caption?: string; className?: string; imageClassName?: string }[];
    galleryLayout?: string;
}

export const projects: Project[] = [
    {
        slug: 'dvt-imaging-bridge',
        name: 'DVT Imaging Bridge',
        client: 'Healthcare Clinics',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop',
        category: 'Medical Imaging',
        industry: 'healthcare',
        tagline: 'Automating clinical image processing for seamless PACS integration.',
        description: 'A middleware solution that automates the conversion of clinical images to DICOM standards, bridging the gap between standard cameras and medical imaging systems.',
        role: 'Core Development & Integration',
        services: ['Python Development', 'DICOM Integration', 'Workflow Automation'],
        tags: ['Healthcare', 'Automation', 'Python', 'DICOM'],
        overview: 'Developed a middleware solution to automate the conversion of non-standard clinical images (dermatology, endoscopy) into DICOM 3.0 standard for integration with PACS systems.',
        problem: 'Modern clinics use standard cameras and smartphones for clinical documentation, but central PACS systems only accept DICOM format. Doctors had to use separate software for different image types, leading to fragmented data and inefficient workflows.',
        solution: 'Built "DVT Image-to-DICOM Converter", a module that accepts various image formats (JPG, PNG) and automatically processes them using Python (Pydicom, NumPy). It maps patient metadata to DICOM tags and ensures 100% compatibility with PACS systems like Orthanc and dcm4chee.',
        result: 'Processed over 10,000+ images successfully. Eliminated manual printing and scanning workflows. Doubled the speed of patient record retrieval by centralizing data.',
        techStack: [
            { category: 'Core', items: ['Python', 'Pydicom', 'NumPy', 'Pillow'] },
            { category: 'Standard', items: ['DICOM 3.0'] },
            { category: 'Integration', items: ['RESTful API'] }
        ],
        testimonial: {
            quote: "Before this, managing dermatology images was a nightmare. DVT's solution allows us to see everything on one diagnostic screen. Extremely professional and time-saving!",
            author: "Dr. Minh Hoang",
            role: "Head of Imaging Dept, S. Clinic"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop', caption: 'Input Processing' },
            { src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop', caption: 'DICOM Viewer Integration' }
        ]
    },
    {
        slug: 'Sun-chinese',
        name: 'Sun Chinese App',
        client: 'EdTech Startup',
        year: '2025',
        image: '/testimonial/sun-chinese/2.png',
        category: 'Mobile App',
        industry: 'education',
        tagline: 'A comprehensive ecosystem for intermediate Chinese learners.',
        description: 'An all-in-one mobile application designed to help intermediate learners break through the plateau with AI-driven shadowing and multimedia content.',
        role: 'Full Stack Development',
        services: ['Mobile App Development', 'AI Integration', 'UX Design'],
        tags: ['EdTech', 'React Native', 'AI', 'Mobile'],
        overview: 'Created a "Super App" for Chinese language learning, focusing on intermediate learners who need deep practice in listening and speaking.',
        problem: 'Existing apps focus on beginners or are too fragmented (separate apps for dictionary, flashcards, media). Intermediate learners lacked feedback on their speaking and a unified learning environment.',
        solution: 'Developed a cross-platform app using React Native and Expo. Integrated a bilingual reading system with one-touch dictionary lookups. Implemented an AI Shadowing feature using Speech-to-Text to analyze and grade user pronunciation against native speakers.',
        result: 'Achieved complete MVP in 4 months. System stable with 10k+ concurrent users. 45% increase in onsite time due to integrated multimedia features.',
        techStack: [
            { category: 'Mobile', items: ['React Native', 'Expo'] },
            { category: 'Backend', items: ['Directus', 'PostgreSQL'] },
            { category: 'AI', items: ['NodeJS', 'Google Speech-to-Text API'] }
        ],
        testimonial: {
            quote: "The team realized my vision of a learning ecosystem. Not just coding, they consulted on UX flow for the Shadowing feature, skyrocketing lesson completion rates.",
            author: "Thanh Ha",
            role: "Founder",
            image: "/logo/sun-chinse-logo.png"
        },
        galleryLayout: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6',
        gallery: [
            { src: '/testimonial/sun-chinese/1.png', caption: 'Intro', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: '/testimonial/sun-chinese/2.png', caption: 'Intro', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: '/testimonial/sun-chinese/3.png', caption: 'Dashboard', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: '/testimonial/sun-chinese/4.png', caption: 'Talkings', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: '/testimonial/sun-chinese/5.png', caption: 'Books', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: '/testimonial/sun-chinese/6.png', caption: 'Practice', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: '/testimonial/sun-chinese/7.png', caption: 'Shadowing', className: 'aspect-[9/20]', imageClassName: 'object-contain' }
        ]
    },
    {
        slug: 'vsen-medical-corporate',
        name: 'VSEN Medical',
        client: 'VSEN Medical',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop',
        category: 'Web Platform',
        industry: 'healthcare',
        tagline: 'Intelligent Healthcare. Redefined.',
        description: 'A corporate website and product catalog for a Medtech startup, focusing on performance, SEO, and a premium "Corporate Tech" aesthetic.',
        role: 'Design & Development',
        services: ['Web Development', 'Design System', 'SEO'],
        tags: ['Healthcare', 'Corporate', 'Laravel', 'React'],
        overview: 'Built a comprehensive digital presence for VSEN Medical, featuring a modern corporate design and a smart product catalog.',
        problem: 'The previous system failed to convey the high-tech nature of their products. Information was hard to find, and the mobile experience was poor.',
        solution: 'Utilized Inertia.js with React and Laravel for a monolithic SPA that offers both SEO benefits and a smooth user experience. Designed a custom "Corporate Tech" look with a smart product catalog and content hub.',
        result: 'Google Lighthouse scores >90. Reduced product search time by 40%. Established a consistent brand identity across all digital touchpoints.',
        techStack: [
            { category: 'Backend', items: ['Laravel 11'] },
            { category: 'Frontend', items: ['ReactJS', 'Inertia.js', 'TypeScript'] },
            { category: 'Infra', items: ['Docker', 'Vite'] }
        ],
        testimonial: {
            quote: "The new system is not only beautiful but intelligent. Our clients, mostly doctors, highly appreciate the speed and convenience of information lookup.",
            author: "Mr. Hung",
            role: "Project Manager, VSEN Medical"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop', caption: 'Homepage Hero' },
            { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop', caption: 'Product Catalog' }
        ]
    },
    {
        slug: 'optiflow-industrial',
        name: 'OptiFlow Industrial',
        client: 'Logistics Firm',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop',
        category: 'AI & IoT',
        industry: 'logistics',
        tagline: 'Industrial spatial intelligence for smart warehouse safety.',
        description: 'An AI-powered system utilizing existing CCTV infrastructure to monitor safety and optimize workflow in a logistics warehouse.',
        role: 'AI Solution Provider',
        services: ['Computer Vision', 'AI Implementation', 'Data Analytics'],
        tags: ['AI', 'Logistics', 'Computer Vision', 'Safety'],
        overview: 'Deployed "OptiFlow Industrial" to monitor safety compliance and optimize movement in a 5,000m2 warehouse using AI and existing CCTV cameras.',
        problem: 'Blind spots in the warehouse led to safety risks with forklifts. Traffic congestion and lack of data on movement paths caused operational inefficiencies.',
        solution: 'Implemented AI object recognition (YOLOv8) to track forklifts and workers. Used color clustering for role segmentation and perspective transformation to map video feeds to a 2D floor plan for velocity tracking.',
        result: 'Reduced accident risks by 40% through real-time speeding detection. Optimized travel paths by 25% using heatmap analysis. Saved thousands in hardware costs by leveraging existing cameras.',
        techStack: [
            { category: 'Core AI', items: ['YOLOv8', 'Deep Sort'] },
            { category: 'Computer Vision', items: ['OpenCV', 'Perspective Transformation'] },
            { category: 'Analytics', items: ['K-Means Clustering', 'Heatmap Analysis'] }
        ],
        testimonial: {
            quote: "The solution turned our 'dead' cameras into smart eyes. Measuring forklift speed without sensors is a breakthrough for our safety protocols.",
            author: "Safety Manager",
            role: "Client Warehouse"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1565514020176-db9310bc931e?q=80&w=2000&auto=format&fit=crop', caption: 'AI Object Detection' },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Heatmap Analytics' }
        ]
    },
    {
        slug: 'diamond-pricing-analytics',
        name: 'Diamond Pricing Analytics',
        client: 'Jewelry Retail Tech',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1617038224558-28ad3fb558a7?q=80&w=2940&auto=format&fit=crop',
        category: 'Data Analytics',
        industry: 'retail',
        tagline: 'AI-driven pricing and market analytics for the diamond industry.',
        description: 'A dual-pipeline system for automated competitor price tracking and fair value prediction using Machine Learning.',
        role: 'Data Engineer',
        services: ['Data Mining', 'Machine Learning', 'Web Scraping'],
        tags: ['Data Science', 'Retail', 'Python', 'ML'],
        overview: 'Built an automated system for scraping competitor pricing and predicting fair market value for diamonds based on the 4Cs.',
        problem: 'Manual pricing surveys were time-consuming and prone to human error. The client lacked real-time data to price their inventory competitively.',
        solution: 'Created a pipeline with Selenium for web scraping and a Machine Learning pricing engine (Linear/Lasso Regression). The system automates data collection and provides "Buy/Sell" recommendations.',
        result: 'Saved ~120 hours/month of manual research. Scraped and processed 53k+ records. Provided accurate fair value predictions to guide inventory decisions.',
        techStack: [
            { category: 'Core', items: ['Python', 'Pandas', 'NumPy'] },
            { category: 'ML', items: ['Scikit-Learn', 'Linear Regression'] },
            { category: 'Scraping', items: ['Selenium'] }
        ],
        testimonial: {
            quote: "We used to price based on gut feeling. Now we know exactly what a 1.5 Carat VVS1 should cost. It completely changed how we compete.",
            author: "Alex T.",
            role: "Founder, JewelTech Solutions"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2000&auto=format&fit=crop', caption: 'Pricing Trends' },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Analytics Dashboard' }
        ]
    },
    {
        slug: 'gemstone-classification-ai',
        name: 'Gemstone Classification AI',
        client: 'Gemology Institute',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1589923188900-85dc74c93ada?q=80&w=2940&auto=format&fit=crop',
        category: 'AI Application',
        industry: 'retail',
        tagline: 'Automated gemstone identification with computer vision.',
        description: 'An AI-powered system utilizing Computer Vision to classify and identify gemstones with speed and precision exceeding human capability.',
        role: 'AI Researcher',
        services: ['Computer Vision', 'Deep Learning', 'R&D'],
        tags: ['AI', 'Computer Vision', 'Gemology', 'Research'],
        overview: 'Developed a system to automate 68 distinct gemstone classifications using advanced Computer Vision, addressing the bottlenecks of manual identification.',
        problem: 'Manual classification is slow (hours for a batch) and prone to error due to fatigue. Even experts vary in accuracy.',
        solution: 'Implemented a pipeline with smart pre-processing (Otsu thresholding) and feature extraction (color histograms, texture analysis). Trained a Random Forest model that outperformed deep learning alternatives for this specific use case.',
        result: 'Processing time reduced from 175 minutes (human) to under 1 second (AI). Achieved 69.4% accuracy, surpassing expert benchmarks. Scalable to 68 gemstone types.',
        techStack: [
            { category: 'Language', items: ['Python'] },
            { category: 'Vision', items: ['OpenCV', 'ResNet'] },
            { category: 'ML', items: ['Random Forest', 'Scikit-learn'] }
        ],
        testimonial: {
            quote: "This system is a revolution. It not only saves 99% of screening time but provides objective results. A powerful tool for our experts.",
            author: "Head of Research",
            role: "Gemology Partner"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=2000&auto=format&fit=crop', caption: 'Gemstone Analysis' },
            { src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop', caption: 'Classification Matrix' }
        ]
    },
    {
        slug: 'hospital-data-warehouse',
        name: 'Services Hospital Analytics',
        client: 'Services Hospital Lahore',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2940&auto=format&fit=crop',
        category: 'Business Intelligence',
        industry: 'healthcare',
        tagline: 'Unified data ecosystem for a major public healthcare facility.',
        description: 'A comprehensive data warehouse and BI solution transforming fragmented hospital records into actionable operational insights.',
        role: 'Data Architect',
        services: ['Data Warehousing', 'ETL', 'Business Intelligence'],
        tags: ['Healthcare', 'Big Data', 'Power BI', 'KNIME'],
        overview: 'Engineered a Hospital Data Warehouse to integrate records from Admissions, Nursing, and Pharmacy, balancing Bed Capacity and Nurse-to-Patient ratios.',
        problem: 'Fragmented data systems and manual workflows led to resource imbalances and overcrowding. There was no real-time visibility into bed occupancy.',
        solution: 'Designed a star-schema data warehouse. Built ETL pipelines with KNIME. Developed Power BI dashboards for Patient Flow, Nurse Workload, and Inventory.',
        result: 'Reduced decision-making time. Optimized shift scheduling improved nurse availability by 15%. Saved 20+ hours/week of manual data entry.',
        techStack: [
            { category: 'ETL', items: ['KNIME'] },
            { category: 'Visualization', items: ['Power BI'] },
            { category: 'Analytics', items: ['Data Modeling', 'Predictive Analytics'] }
        ],
        testimonial: {
            quote: "The ability to see real-time bed capacity and staff distribution has been a game-changer. We can now allocate resources dynamically.",
            author: "Administration Lead",
            role: "Services Hospital Lahore"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Bed Capacity Dashboard' },
            { src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000&auto=format&fit=crop', caption: 'Workflow Optimization' }
        ]
    },
    {
        slug: 'india-tourism-intelligence',
        name: 'India Tourism Intelligence',
        client: 'Government Advisory',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2940&auto=format&fit=crop',
        category: 'Data Analysis',
        industry: 'government',
        tagline: 'Decades of tourism data synthesized into strategic insights.',
        description: 'A data analysis project processing 40 years of tourism statistics to reveal seasonality trends and customer segments.',
        role: 'Data Analyst',
        services: ['Big Data Analysis', 'Visualization', 'Strategy'],
        tags: ['Tourism', 'Data Analysis', 'Python', 'Government'],
        overview: 'Processed 40 years of historical data from 8 sources to optimize marketing strategies and resource allocation for Indian tourism.',
        problem: 'Data was siloed in CSVs. Stakeholders relied on intuition rather than facts, leading to generic and inefficient marketing campaigns.',
        solution: 'Built a Python analysis pipeline to clean and merge datasets. Performed EDA to identify seasonality and customer segments. Visualized insights with Seaborn/Matplotlib.',
        result: 'Optimized marketing direction by estimated 20%. Established a baseline to measure post-COVID recovery. Identified Top 10 monuments for targeted resource allocation.',
        techStack: [
            { category: 'Core', items: ['Python', 'Pandas'] },
            { category: 'Visualization', items: ['Matplotlib', 'Seaborn', 'Jupyter'] }
        ],
        testimonial: {
            quote: "This report moved us from 'guessing' to 'knowing'. Seeing the seasonality heatmap saved us so much time in useless debates.",
            author: "Director",
            role: "Tourism Board"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Growth Trends' },
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop', caption: 'Seasonality Heatmap' }
        ]
    },
    {
        slug: 'kerala-tourism-analytics',
        name: 'Kerala Tourism Analytics',
        client: 'Dept of Tourism',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2940&auto=format&fit=crop',
        category: 'BI Dashboard',
        industry: 'government',
        tagline: 'Interactive intelligence for regional tourism planning.',
        description: 'A Business Intelligence dashboard using Power BI to analyze trends, COVID impact, and visitor demographics for Kerala Tourism.',
        role: 'BI Developer',
        services: ['Power BI Development', 'Data Modeling', 'Government Tech'],
        tags: ['Tourism', 'Power BI', 'Analytics', 'Government'],
        overview: 'Created an interactive dashboard to analyze data from 13M+ domestic and 522k international visitors, aiding in policy making.',
        problem: 'Fragmented data and manual reporting made it impossible to track accurate visitor trends or the real impact of the pandemic.',
        solution: 'Built a Power BI dashboard with Power Query for ETL and DAX for complex metrics. Designed views for high-level overviews and deep-dives into time-series trends.',
        result: 'Reduced reporting time by 90%. Highlighted domestic tourism recovery in 2023. Identified key source markets (UK, USA) for targeted campaigns.',
        techStack: [
            { category: 'Tool', items: ['Microsoft Power BI'] },
            { category: 'Logic', items: ['DAX', 'Power Query'] },
            { category: 'Data', items: ['Python'] }
        ],
        testimonial: {
            quote: "Seeing the post-pandemic recovery with a few clicks gave us the confidence to allocate our promotional budget effectively.",
            author: "Head of Analytics",
            role: "Dept of Tourism"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Visitor Overview' },
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop', caption: 'Yearly Analysis' }
        ]
    },
    {
        slug: 'services-super-app',
        name: 'On-Demand Super App',
        client: 'Logistics Startup',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop',
        category: 'Mobile Platform',
        industry: 'logistics',
        tagline: 'Unified delivery and home services ecosystem.',
        description: 'A cross-platform Super App integrating food delivery, grocery, and home services into a single seamless experience.',
        role: 'Lead Developer',
        services: ['Mobile Development', 'System Architecture', 'Flutter'],
        tags: ['Flutter', 'Super App', 'Logistics', 'Mobile'],
        overview: 'Developed a Flutter-based Super App consolidating 10+ service types (Delivery, Home Services) for the SE Asia market.',
        problem: 'Users had to download multiple apps for different needs. The client fought for market share and needed a superior, unified user experience.',
        solution: 'Built a modular app using Clean Architecture and GetX. Integrated Google Maps for real-time tracking and Firebase for live updates. Added OCR for quick payments.',
        result: 'launched MVP in 5 months. 10k+ downloads in first month. 45% retention rate due to smooth UX and "Premium Feel".',
        techStack: [
            { category: 'Frontend', items: ['Flutter', 'GetX'] },
            { category: 'Backend', items: ['REST API (Dio)', 'Google Maps API'] },
            { category: 'Infra', items: ['Firebase', 'Google ML Kit'] }
        ],
        testimonial: {
            quote: "They are problem solvers. Turning a complex multi-tier system into a simple, easy-to-use app is their biggest strength.",
            author: "Mr. K",
            role: "Product Owner"
        },
        galleryLayout: 'grid-cols-1 md:grid-cols-3 gap-8',
        gallery: [
            { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop', caption: 'Home Dashboard', className: 'md:col-span-1 aspect-[9/19]' },
            { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2000&auto=format&fit=crop', caption: 'Real-time Tracking', className: 'md:col-span-1 aspect-[9/19]' }
        ]
    },
    {
        slug: 'cdsl-web-rebrand',
        name: 'CDSL Web Rebrand',
        client: 'CDSL (Internal)',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
        category: 'Rebrand & Migration',
        industry: 'technology',
        tagline: 'From static site to immersive digital experience.',
        description: 'Complete platform migration from Astro to Next.js to enable advanced interactivity and premium design patterns.',
        role: 'Lead Architect',
        services: ['Re-platforming', 'UI/UX Design', 'Performance Optimization'],
        tags: ['Next.js', 'React', 'Framer Motion', 'Migration'],
        overview: 'A strategic technical migration and visual rebranding initiative to transform the corporate website from a static informational site into a dynamic showcase of engineering capabilities.',
        problem: 'The legacy Astro-based architecture, while performant for static content, struggled to support complex, stateful animations and the seamless page transitions required for the new "Show Don\'t Sell" design philosophy. The previous design also lacked the premium, engineering-focused aesthetic desired.',
        solution: 'Migrated the entire codebase to Next.js 16 (App Router) to leverage React Server Components for performance while enabling rich client-side interactivity. Implemented a sophisticated design system using TailwindCSS and complex scroll-linked animations with Framer Motion. Introduced a "dark mode" centric aesthetic with glassmorphism and micro-interactions.',
        result: 'Successfully launched a high-performance, visually stunning platform with fluid page transitions and interactive storytelling elements. The new architecture allows for rapid feature deployment and better showcases the team\'s technical prowess.',
        techStack: [
            { category: 'Framework', items: ['Next.js 16', 'React', 'TypeScript'] },
            { category: 'Styling', items: ['TailwindCSS', 'Framer Motion'] },
            { category: 'Legacy', items: ['Astro'] }
        ],
        testimonial: {
            quote: "The shift to Next.js wasn't just technical—it unlocked a level of creativity and interactivity that was simply impossible before. The site now feels alive.",
            author: "Thanh Hung",
            role: "Founder"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop', caption: 'Code Architecture' },
            { src: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop', caption: 'New Design System' }
        ]
    },
    {
        slug: 'dvt-bid-manager',
        name: 'DVT Bid Manager',
        client: 'DVT (Internal)',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
        category: 'Internal Tool',
        industry: 'technology',
        tagline: 'Automated tender document management and internal cloud storage.',
        description: 'A secure internal platform for managing tender documents, automating approval workflows, and centralized cloud storage.',
        role: 'Product Owner',
        services: ['Internal Tooling', 'Cloud Storage', 'Workflow Automation'],
        tags: ['Internal Tool', 'Automation', 'Cloud', 'Secure'],
        overview: 'Developed a comprehensive internal tool for DVT to streamline the management of tender documents (hồ sơ thầu). The system serves as a secure internal cloud storage and automates the entire lifecycle of bid preparation and submission.',
        problem: 'Managing tender documents was a manual, error-prone process involving scattered files across emails and local drives. Version control was non-existent, and approval workflows were slow, risking missed submission deadlines.',
        solution: 'Built "DVT Bid Manager", a centralized internal cloud platform. Implemented automated version control, role-based access permissions, and a drag-and-drop workflow editor for document approvals. Integrated with internal communication tools for real-time notifications.',
        result: 'Reduced bid preparation time by 60%. Eliminated version control errors. secured 100% of internal tender documents in a centralized, searchable repository.',
        techStack: [
            { category: 'Backend', items: ['Ubuntu', 'Python'] },
            { category: 'Frontend', items: ['React', 'TailwindCSS'] },
            { category: 'DevOps', items: ['Docker'] }
        ],
        testimonial: {
            quote: "This tool transformed our chaos into clarity. We no longer worry about lost files or wrong versions. It's the backbone of our bidding operations.",
            author: "Thanh Ha",
            role: "Operations Director"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop', caption: 'Document Repository' },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Approval Workflow' }
        ]
    }
];
