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
                title: 'Phát triển Web',
                description: 'Chúng tôi xây dựng các trang web và ứng dụng web có khả năng mở rộng, phản hồi nhanh để thu hút người dùng và thúc đẩy tăng trưởng cho doanh nghiệp của bạn.'
            },
            {
                icon: Smartphone,
                title: 'Phát triển Di động',
                description: 'Các ứng dụng di động gốc và đa nền tảng mang lại trải nghiệm người dùng vượt trội trên mọi thiết bị.'
            },
            {
                icon: Share2,
                title: 'Tích hợp IoT',
                description: 'Hệ thống thông minh cho phép giám sát theo thời gian thực, thu thập dữ liệu và giao tiếp liền mạch giữa các thiết bị.'
            },
            {
                icon: Workflow,
                title: 'Giải pháp Tự động hóa',
                description: 'Các quy trình tự động hóa tùy chỉnh giúp hợp lý hóa hoạt động, giảm lỗi và tăng hiệu quả tổng thể.'
            },
            {
                icon: Zap,
                title: 'AI & Học máy',
                description: 'Các hệ thống thông minh biến dữ liệu thành thông tin chi tiết có thể hành động để đưa ra quyết định kinh doanh thông minh hơn.'
            },
            {
                icon: Presentation,
                title: 'Tư vấn & Chiến lược',
                description: 'Hướng dẫn chuyên môn để điều chỉnh công nghệ phù hợp với mục tiêu kinh doanh của bạn, đảm bảo chuyển đổi số thành công.'
            }

        ]
    },
    // ...keep other feature lists if needed
};
