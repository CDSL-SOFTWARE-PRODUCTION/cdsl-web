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
        description: "Theo dõi thời gian thực và tự động hóa quy trình.",
        icon: "truck",
        metadata: {
            tags: ["Chuỗi cung ứng", "IoT", "Tự động hóa"]
        }
    },
    {
        slug: 'healthcare',
        title: "Y tế",
        description: "Hệ thống đặt lịch kỹ thuật số và chẩn đoán AI.",
        icon: "heart",
        metadata: {
            tags: ["Khám từ xa", "HIPAA", "AI"]
        }
    },
    {
        slug: 'retail',
        title: "Bán lẻ",
        description: "Thương mại điện tử và giải pháp khách hàng bằng AI.",
        icon: "shopping-bag",
        metadata: {
            tags: ["Thương mại điện tử", "Cá nhân hóa", "Đa kênh"]
        }
    },
    {
        slug: 'education',
        title: "Giáo dục",
        description: "Học tập trực tuyến tương tác và nền tảng thích ứng.",
        icon: "book",
        metadata: {
            tags: ["EdTech", "LMS", "Trò chơi hóa"]
        }
    },
    {
        slug: 'hospitality',
        title: "Khách sạn & Du lịch",
        description: "Hệ thống đặt phòng động và lập kế hoạch hành trình.",
        icon: "map",
        metadata: {
            tags: ["TravelTech", "Hệ thống đặt phòng", "Trải nghiệm khách hàng"]
        }
    },
    {
        slug: 'technology',
        title: "Công nghệ",
        description: "Kiến trúc phần mềm tiên tiến và kỹ thuật nền tảng.",
        icon: "cpu",
        metadata: {
            tags: ["SaaS", "Cloud Native", "DevOps"]
        }
    }
];
