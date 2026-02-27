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
        client: 'Phòng khám Y tế',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop',
        category: 'Hình ảnh Y tế',
        industry: 'healthcare',
        tagline: 'Tự động hóa xử lý hình ảnh lâm sàng để tích hợp PACS liền mạch.',
        description: 'Giải pháp phần mềm trung gian tự động hóa việc chuyển đổi hình ảnh lâm sàng sang tiêu chuẩn DICOM, thu hẹp khoảng cách giữa các camera tiêu chuẩn và hệ thống hình ảnh y tế.',
        role: 'Phát triển lõi & Tích hợp',
        services: ['Phát triển Python', 'Tích hợp DICOM', 'Tự động hóa quy trình'],
        tags: ['Y tế', 'Tự động hóa', 'Python', 'DICOM'],
        overview: 'Phát triển giải pháp phần mềm trung gian tự động hóa việc chuyển đổi các hình ảnh lâm sàng phi tiêu chuẩn (da liễu, nội soi) sang tiêu chuẩn DICOM 3.0 để tích hợp với hệ thống PACS.',
        problem: 'Các phòng khám hiện đại sử dụng camera tiêu chuẩn và điện thoại thông minh cho tài liệu lâm sàng, nhưng hệ thống PACS trung tâm chỉ chấp nhận định dạng DICOM. Bác sĩ phải sử dụng nhiều phần mềm cho các loại hình ảnh khác nhau, dẫn đến phân mảnh dữ liệu và quy trình làm việc kém hiệu quả.',
        solution: 'Xây dựng "Mô-đun chuyển đổi Ảnh sang DICOM của DVT" chấp nhận nhiều định dạng ảnh (JPG, PNG) và tự động xử lý bằng Python (Pydicom, NumPy). Mô-đun ánh xạ siêu dữ liệu bệnh nhân sang thẻ DICOM và đảm bảo tương thích 100% với các hệ thống PACS như Orthanc và dcm4chee.',
        result: 'Xử lý thành công hơn 10.000+ hình ảnh. Loại bỏ quy trình in và quét thủ công. Tăng gấp đôi tốc độ truy xuất hồ sơ bệnh nhân nhờ tập trung dữ liệu.',
        techStack: [
            { category: 'Lõi', items: ['Python', 'Pydicom', 'NumPy', 'Pillow'] },
            { category: 'Tiêu chuẩn', items: ['DICOM 3.0'] },
            { category: 'Tích hợp', items: ['RESTful API'] }
        ],
        testimonial: {
            quote: "Trước đây, quản lý hình ảnh da liễu là một cơn ác mộng. Giải pháp của DVT cho phép chúng tôi xem mọi thứ trên một màn hình chẩn đoán duy nhất. Vô cùng chuyên nghiệp và tiết kiệm thời gian!",
            author: "Bác sĩ Minh Hoàng",
            role: "Trưởng khoa Hình ảnh, Phòng khám S."
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop', caption: 'Xử lý Đầu vào' },
            { src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop', caption: 'Tích hợp Trình xem DICOM' }
        ]
    },
    {
        slug: 'Sun-chinese',
        name: 'Sun Chinese App',
        client: 'Startup EdTech',
        year: '2025',
        image: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/2.png',
        category: 'Ứng dụng Di động',
        industry: 'education',
        tagline: 'Hệ sinh thái toàn diện cho người học tiếng Trung trung cấp.',
        description: 'Một ứng dụng di động tất cả trong một được thiết kế để giúp người học trung học vượt qua rào cản nền tảng nhờ tích hợp AI shadowing và nội dung đa phương tiện.',
        role: 'Phát triển Full Stack',
        services: ['Phát triển Ứng dụng Di động', 'Tích hợp AI', 'Thiết kế UX'],
        tags: ['EdTech', 'React Native', 'AI', 'Mobile'],
        overview: 'Tạo ra "Siêu ứng dụng" để học tiếng Trung, tập trung vào đối tượng học viên trung cấp cần thực hành chuyên sâu về nghe và nói.',
        problem: 'Các ứng dụng hiện tại tập trung vào người mới bắt đầu hoặc quá phân tán (ứng dụng riêng cho từ điển, flashcard, đa phương tiện). Người học trung cấp thiếu phản hồi về khả năng nói và môi trường học tập thống nhất.',
        solution: 'Phát triển ứng dụng đa nền tảng bằng React Native và Expo. Tích hợp hệ thống đọc song ngữ với tra cứu từ điển một chạm. Triển khai tính năng AI Shadowing sử dụng Speech-to-Text để phân tích và chấm điểm phát âm của người dùng so với người bản ngữ.',
        result: 'Hoàn thành MVP trong 4 tháng. Hệ thống ổn định với 10k+ người dùng đồng thời. Tăng 45% thời gian sử dụng tại chỗ nhờ các tính năng đa phương tiện tích hợp.',
        techStack: [
            { category: 'Mobile', items: ['React Native', 'Expo'] },
            { category: 'Backend', items: ['Directus', 'PostgreSQL'] },
            { category: 'AI', items: ['NodeJS', 'Google Speech-to-Text API'] }
        ],
        testimonial: {
            quote: "Đội ngũ đã hiện thực hóa tầm nhìn của tôi về một hệ sinh thái học tập. Không chỉ lập trình, họ còn tư vấn về luồng UX cho tính năng Shadowing, giúp tỷ lệ hoàn thành bài học tăng vọt.",
            author: "Thanh Hà",
            role: "Người sáng lập",
            image: "https://brboqnvtkppko1ca.public.blob.vercel-storage.com/sun-chinse-logo.png"
        },
        galleryLayout: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6',
        gallery: [
            { src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/1.png', caption: 'Giới thiệu', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/2.png', caption: 'Giới thiệu', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/3.png', caption: 'Bảng điều khiển', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/4.png', caption: 'Trò chuyện', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/5.png', caption: 'Sách', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/6.png', caption: 'Thực hành', className: 'aspect-[9/20]', imageClassName: 'object-contain' },
            { src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/7.png', caption: 'Shadowing', className: 'aspect-[9/20]', imageClassName: 'object-contain' }
        ]
    },
    {
        slug: 'vsen-medical-corporate',
        name: 'VSEN Medical',
        client: 'VSEN Medical',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop',
        category: 'Nền tảng Web',
        industry: 'healthcare',
        tagline: 'Y tế Thông minh. Được định nghĩa lại.',
        description: 'Một trang web doanh nghiệp và danh mục sản phẩm cho một startup Medtech, tập trung vào hiệu suất, SEO và tính thẩm mỹ "Công nghệ Doanh nghiệp" cao cấp.',
        role: 'Thiết kế & Phát triển',
        services: ['Phát triển Web', 'Hệ thống Thiết kế', 'SEO'],
        tags: ['Y tế', 'Doanh nghiệp', 'Laravel', 'React'],
        overview: 'Xây dựng sự hiện diện kỹ thuật số toàn diện cho VSEN Medical, có thiết kế doanh nghiệp hiện đại và danh mục sản phẩm thông minh.',
        problem: 'Hệ thống trước đây không thể hiện được bản chất công nghệ cao của các sản phẩm. Thông tin khó tìm và trải nghiệm trên thiết bị di động kém.',
        solution: 'Sử dụng Inertia.js với React và Laravel cho một SPA tĩnh mang lại cả lợi ích SEO và trải nghiệm người dùng mượt mà. Thiết kế giao diện "Công nghệ Doanh nghiệp" tùy chỉnh với danh mục sản phẩm thông minh và trung tâm nội dung.',
        result: 'Điểm Google Lighthouse >90. Giảm 40% thời gian tìm kiếm sản phẩm. Thiết lập nhận diện thương hiệu nhất quán trên tất cả các điểm tiếp xúc kỹ thuật số.',
        techStack: [
            { category: 'Backend', items: ['Laravel 11'] },
            { category: 'Frontend', items: ['ReactJS', 'Inertia.js', 'TypeScript'] },
            { category: 'Hạ tầng', items: ['Docker', 'Vite'] }
        ],
        testimonial: {
            quote: "Hệ thống mới không chỉ đẹp mà còn thông minh. Khách hàng của chúng tôi, chủ yếu là bác sĩ, đánh giá rất cao tốc độ và sự tiện lợi trong việc tra cứu thông tin.",
            author: "Mr. Hùng",
            role: "Quản lý Dự án, VSEN Medical"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop', caption: 'Trang chủ Hero' },
            { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop', caption: 'Danh mục Sản phẩm' }
        ]
    },
    {
        slug: 'optiflow-industrial',
        name: 'OptiFlow Industrial',
        client: 'Công ty Logistics',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop',
        category: 'AI & IoT',
        industry: 'logistics',
        tagline: 'Trí tuệ không gian công nghiệp cho an toàn nhà kho thông minh.',
        description: 'Một hệ thống sử dụng AI tận dụng cơ sở hạ tầng camera quan sát (CCTV) có sẵn để giám sát an toàn và tối ưu hóa luồng công việc tự động tại kho bãi logistic.',
        role: 'Nhà cung cấp Giải pháp AI',
        services: ['Thị giác Máy tính', 'Triển khai AI', 'Phân tích Dữ liệu'],
        tags: ['AI', 'Logistics', 'Thị giác Máy tính', 'An toàn'],
        overview: 'Triển khai "OptiFlow Industrial" để giám sát tuân thủ an toàn và tối ưu hóa việc di chuyển trong kho rộng 5.000m2 bằng công nghệ AI và hệ thống camera quan sát có sẵn.',
        problem: 'Điểm mù trong kho hàng gây nguy cơ mất an toàn liên quan đến xe nâng. Tắc nghẽn giao thông và thiếu dữ liệu về đường di chuyển làm giảm hiệu quả hoạt động.',
        solution: 'Áp dụng nhận dạng đối tượng AI (YOLOv8) để theo dõi xe nâng và công nhân. Sử dụng kỹ thuật gom cụm màu sắc để phân chia vai trò và biến đổi phối cảnh nhằm lập sơ đồ đoạn video phát trực tiếp thành sơ đồ 2D cho theo dõi tốc độ.',
        result: 'Giảm 40% rủi ro tai nạn thông qua phát hiện vượt tốc độ theo thời gian thực. Tối ưu hóa lộ trình di chuyển thêm 25% qua việc sử dụng phân tích bản đồ nhiệt. Tiết kiệm hàng ngàn đô la thiết bị phần cứng nhờ tận dụng lại các camera có sẵn.',
        techStack: [
            { category: 'Lõi AI', items: ['YOLOv8', 'Deep Sort'] },
            { category: 'Thị giác Máy tính', items: ['OpenCV', 'Truyền đổi Toạ độ'] },
            { category: 'Phân tích', items: ['Gom cụm K-Means', 'Phân tích Bản đồ Nhiệt'] }
        ],
        testimonial: {
            quote: "Giải pháp đã tối ưu giúp camera 'cố định' trở thành trinh sát thông minh. Đo tốc độ xe nâng mà không cần trực tiếp gắn thiết bị là đột phá trong quy định an toàn tại nhà xưởng.",
            author: "Quản lý An toàn",
            role: "Kho Hàng Khách Hàng"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1565514020176-db9310bc931e?q=80&w=2000&auto=format&fit=crop', caption: 'Phát hiện Đối tượng AI' },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Phân tích Bản đồ Nhiệt' }
        ]
    },
    {
        slug: 'diamond-pricing-analytics',
        name: 'Diamond Pricing Analytics',
        client: 'Công nghệ Bán lẻ Trang sức',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1617038224558-28ad3fb558a7?q=80&w=2940&auto=format&fit=crop',
        category: 'Phân tích Dữ liệu',
        industry: 'retail',
        tagline: 'Định giá và phân tích thị trường bằng AI cho ngành công nghiệp kim cương.',
        description: 'Hệ thống luồng dữ liệu kép giúp theo dõi tự động giá của đối thủ và dự đoán giá trị thực bằng Học máy.',
        role: 'Kỹ sư Dữ liệu',
        services: ['Khai phá Dữ liệu', 'Học máy', 'Web Scraping'],
        tags: ['Khoa học Dữ liệu', 'Bán lẻ', 'Python', 'ML'],
        overview: 'Xây dựng một hệ thống tự động để thu thập giá của đối thủ cạnh tranh và dự đoán giá trị thị trường hợp lý cho kim cương dựa trên quy tắc 4C.',
        problem: 'Việc khảo sát giá thủ công tốn nhiều thời gian và dễ xảy ra sai sót. Khách hàng thiếu dữ liệu thời gian thực để định giá kho hàng cạnh tranh.',
        solution: 'Tạo một quy trình với Selenium để thu thập dữ liệu web và động cơ định giá Học máy (Hồi quy tuyến tính/Lasso). Hệ thống tự động hóa việc thu thập dữ liệu và cung cấp khuyến nghị "Mua/Bán".',
        result: 'Tiết kiệm ~120 giờ/tháng nghiên cứu thủ công. Thu thập và xử lý hơn 53k+ bản ghi. Cung cấp dự báo giá trị hợp lý chính xác để hướng dẫn quyết định quản lý kho.',
        techStack: [
            { category: 'Lõi', items: ['Python', 'Pandas', 'NumPy'] },
            { category: 'Học máy', items: ['Scikit-Learn', 'Hồi quy tuyến tính'] },
            { category: 'Thu thập', items: ['Selenium'] }
        ],
        testimonial: {
            quote: "Chúng tôi từng định giá dựa trên cảm tính. Bây giờ chúng tôi biết chính xác giá một viên kim cương 1.5 Carat VVS1. Nó đã thay đổi cách chúng tôi cạnh tranh.",
            author: "Alex T.",
            role: "Người sáng lập, JewelTech Solutions"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2000&auto=format&fit=crop', caption: 'Xu hướng Giá' },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Bảng phân tích' }
        ]
    },
    {
        slug: 'gemstone-classification-ai',
        name: 'Gemstone Classification AI',
        client: 'Tập đoàn Khai thác Đá quý & Khoáng sản',
        year: '2025',
        image: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/Fig_1_montage.png',
        category: 'Ứng dụng AI',
        industry: 'mining',
        tagline: 'Mở rộng quy mô R&D công nghiệp với trí tuệ không gian.',
        description: 'Quy trình nghiên cứu AI tùy chỉnh để nhận diện đa quý số lượng lớn, thiết kế giúp sắp xếp và kiểm soát chất lượng sơ bộ cho các hoạt động khai thác đá quý.',
        role: 'Đối tác R&D AI',
        services: ['Thị giác Máy tính', 'Học sâu', 'R&D'],
        tags: ['AI', 'Thị giác Máy tính', 'Khai thác mỏ', 'R&D'],
        overview: 'Phát triển một hệ thống tự động hóa AI có hệ thống để phân loại 68 loại đá quý riêng biệt, cho phép khách hàng mở rộng quy mô hoạt động phân loại và duy trì tiêu chuẩn chất lượng nhất quán từ công trường.',
        problem: 'Bộ phận phân loại của khách hàng gặp khó khăn do phân loại đá thô thủ công chậm. Phụ thuộc vào con người làm hạn chế khối lượng khai thác có thể xử lý, đồng thời gây ách tắc trong quy trình kiểm soát chất lượng.',
        solution: 'Áp dụng một chuỗi liên kết bao gồm xử lý trước (lọc ngưỡng Otsu) và trích xuất đặc trưng hình ảnh (biểu đồ màu, phân tích kết cấu). Đào tạo mô hình Random Forest tốt hơn so với các phương pháp Deep Learning thay thế cho ứng dụng đặc thù này.',
        result: 'Giảm thời gian xử lý từ 175 phút (con người) xuống dưới 1 giây (AI). Đạt độ chính xác 69.4%, cao hơn các chuyên gia trong ngành. Có khả năng mở rộng lên 68 loại đá.',
        techStack: [
            { category: 'Ngôn ngữ', items: ['Python'] },
            { category: 'Thị giác', items: ['OpenCV', 'ResNet'] },
            { category: 'Học máy', items: ['Random Forest', 'Scikit-learn'] }
        ],
        testimonial: {
            quote: "Hệ thống này đã chuyển đổi tổ hợp hoạt động tại thực địa của chúng tôi. Nó không chỉ tiết kiệm 99% thời gian sàng lọc đá thô mà còn cung cấp thêm dữ liệu khách quan để mở rộng quy mô công nghiệp.",
            author: "Giám đốc Điều hành",
            role: "Tập đoàn Khai thác & Xuất khẩu Đá quý"
        },
        galleryLayout: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12',
        gallery: [
            {
                src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/Fig_3_framework.png',
                caption: 'Khung Phương pháp luận',
                className: 'lg:col-span-2 aspect-[16/6]',
                imageClassName: 'object-contain'
            },
            {
                src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/Fig_5_RGB.png',
                caption: 'Không gian màu RGB',
                className: 'aspect-square',
                imageClassName: 'object-contain'
            },
            {
                src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/Fig_6_HSVplots.png',
                caption: 'Hình ảnh hóa Đặc trưng HSV',
                className: 'md:col-span-2 lg:col-span-1 aspect-[4/3]',
                imageClassName: 'object-contain'
            },
            {
                src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/Fig_8_accuracy.png',
                caption: 'Biểu đồ Hộp Độ chính xác Phân loại',
                className: 'lg:col-span-2 aspect-[16/8]',
                imageClassName: 'object-contain'
            },
            {
                src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/Fig_9_bestsystem.png',
                caption: 'Ma trận Nhầm lẫn Hệ thống Tốt nhất',
                className: 'aspect-square',
                imageClassName: 'object-contain'
            },
            {
                src: 'https://brboqnvtkppko1ca.public.blob.vercel-storage.com/Fig_10_bestexpert.png',
                caption: 'Ma trận Nhầm lẫn Chuyên gia Đá quý',
                className: 'aspect-square',
                imageClassName: 'object-contain'
            }
        ]
    },
    {
        slug: 'hospital-data-warehouse',
        name: 'Services Hospital Analytics',
        client: 'Bệnh viện Services Lahore',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2940&auto=format&fit=crop',
        category: 'Kinh doanh thông minh (BI)',
        industry: 'healthcare',
        tagline: 'Hệ sinh thái dữ liệu hợp nhất cho cơ sở y tế công cộng lớn.',
        description: 'Kho dữ liệu toàn diện và giải pháp BI giúp chuyển đổi hồ sơ bệnh viện phân tán thành thông tin chi tiết có thể hành động trong hoạt động.',
        role: 'Kiến trúc sư Dữ liệu',
        services: ['Kho Dữ liệu', 'ETL', 'Kinh doanh thông minh'],
        tags: ['Y tế', 'Dữ liệu lớn', 'Power BI', 'KNIME'],
        overview: 'Xây dựng Kho dữ liệu Bệnh viện (Data Warehouse) để tích hợp thông tin từ bộ phận Tiếp nhận, Điều dưỡng và Nhà thuốc nhằm cân đối Công suất giường & tỷ lệ Y tá/Bệnh nhân.',
        problem: 'Hệ thống dữ liệu phân tán và quy trình thủ công dẫn đến sự mất cân đối tài nguyên và tình trạng quá tải. Bệnh viện thiếu khả năng giám sát tỉ lệ giường trống trong thời gian thực.',
        solution: 'Thiết kế kho dữ liệu mô hình star-schema. Xây dựng luồng ETL với KNIME. Nghiên cứu & lập bảng điều khiển Power BI cho Luồng Bệnh nhân, Cường độ công việc của Y tá và quản lý kho.',
        result: 'Giảm thời gian ra quyết định. Tối ưu hóa phân công ca, cải thiện khả năng đáp ứng của y tá lên 15%. Tiết kiệm hơn 20 giờ/tuần thao tác nhập liệu bằng tay.',
        techStack: [
            { category: 'ETL', items: ['KNIME'] },
            { category: 'Hiển thị', items: ['Power BI'] },
            { category: 'Phân tích', items: ['Mô hình Dữ liệu', 'Phân tích Dự báo'] }
        ],
        testimonial: {
            quote: "Khả năng nắm rõ tổng thể công suất giường & phân bổ nhân sự đã thay đổi cuộc chơi. Bây giờ chúng tôi có thể tự định hướng sắp xếp nguồn nhân lực linh hoạt hơn.",
            author: "Trưởng ban Quản trị",
            role: "Bệnh viện Services Lahore"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Bảng Công suất Giường bệnh' },
            { src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000&auto=format&fit=crop', caption: 'Tối ưu hóa Quy trình' }
        ]
    },
    {
        slug: 'india-tourism-intelligence',
        name: 'India Tourism Intelligence',
        client: 'Cố vấn Chính phủ',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2940&auto=format&fit=crop',
        category: 'Phân tích Dữ liệu',
        industry: 'government',
        tagline: 'Hàng thập kỷ dữ liệu du lịch được tổng hợp thành những hiểu biết mang tính chiến lược.',
        description: 'Dự án phân tích dữ liệu xử lý thống kê du lịch của 40 năm để bóc tách xu hướng mùa vụ và những phân khúc người dùng.',
        role: 'Nhà Phân tích Dữ liệu',
        services: ['Phân tích Big Data', 'Trực quan hóa', 'Chiến lược'],
        tags: ['Du lịch', 'Phân tích Dữ liệu', 'Python', 'Chính phủ'],
        overview: 'Xử lý dữ liệu của 40 năm từ 8 nguồn riêng biệt để giúp tối ưu hóa định hướng tiếp thị và nguồn tài nguyên dành cho du lịch của Ấn Độ.',
        problem: 'Người quản lý dựa vào phỏng đoán thủ công thay vì dữ kiện, và dữ liệu vẫn bị hạn chế lưu ở định dạng CSV, dẫn đến truyền thông và quảng bá chậm trễ.',
        solution: 'Sử dụng khung Python để dọn dẹp và hợp nhất những nội dung đó. Giám sát EDA qua phân loại những định hướng mùa và phân đoạn tệp khách dựa trên Seaborn/Matplotlib.',
        result: 'Tối ưu lại thông tin quảng bá thêm 20%. Thiết lập định mức đo đếm để chuẩn bị cho sự khôi phục hậu Covid-19. Hiển thị thông số từ 10 phân nhánh mục tiêu chủ chốt.',
        techStack: [
            { category: 'Lõi', items: ['Python', 'Pandas'] },
            { category: 'Trực quan hóa', items: ['Matplotlib', 'Seaborn', 'Jupyter'] }
        ],
        testimonial: {
            quote: "Báo cáo này chuyển chúng tôi từ 'đoán mò' sang 'biết rõ'. Nhìn thấy bản đồ nhiệt theo mùa vụ đã giúp chúng tôi tiết kiệm rất nhiều thời gian trong những cuộc tranh cãi.",
            author: "Giám đốc",
            role: "Tổng cục Du lịch"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Xu hướng Tăng trưởng' },
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop', caption: 'Bản đồ theo Mùa' }
        ]
    },
    {
        slug: 'kerala-tourism-analytics',
        name: 'Kerala Tourism Analytics',
        client: 'Sở Du lịch',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2940&auto=format&fit=crop',
        category: 'Bảng điều khiển BI',
        industry: 'government',
        tagline: 'Trí tuệ tương tác cho quy hoạch du lịch khu vực.',
        description: 'Một bảng điều khiển Business Intelligence sử dụng Power BI để phân tích xu hướng, tác động của COVID và nhân khẩu học du khách cho Du lịch Kerala.',
        role: 'Nhà phát triển BI',
        services: ['Phát triển Power BI', 'Mô hình Dữ liệu', 'Công nghệ Chính phủ'],
        tags: ['Du lịch', 'Power BI', 'Phân tích', 'Chính phủ'],
        overview: 'Tạo một bảng điều khiển tương tác để phân tích dữ liệu từ hơn 13 triệu du khách nội địa và 522 nghìn du khách quốc tế, hỗ trợ hoạch định chính sách.',
        problem: 'Dữ liệu phân mảnh và báo cáo thủ công khiến việc theo dõi xu hướng du khách chính xác hoặc tác động thực sự của đại dịch trở nên bất khả thi.',
        solution: 'Xây dựng một bảng điều khiển Power BI với Power Query cho quá trình ETL và DAX cho các số liệu phức tạp. Thiết kế các góc nhìn để tổng quan mức cao và đi sâu vào các xu hướng chuỗi thời gian.',
        result: 'Giảm 90% thời gian lập báo cáo. Nêu bật sự phục hồi du lịch nội địa vào năm 2023. Xác định các thị trường nguồn chính (Anh, Mỹ) để thực hiện các chiến dịch nhắm mục tiêu.',
        techStack: [
            { category: 'Công cụ', items: ['Microsoft Power BI'] },
            { category: 'Logic', items: ['DAX', 'Power Query'] },
            { category: 'Dữ liệu', items: ['Python'] }
        ],
        testimonial: {
            quote: "Việc nhìn thấy sự phục hồi sau đại dịch chỉ với một vài cú nhấp chuột giúp chúng tôi tự tin phân bổ ngân sách quảng bá một cách hiệu quả.",
            author: "Trưởng phòng Phân tích",
            role: "Sở Du lịch"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Tổng quan Du khách' },
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop', caption: 'Phân tích Hàng năm' }
        ]
    },
    {
        slug: 'services-super-app',
        name: 'On-Demand Super App',
        client: 'Startup Logistics',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop',
        category: 'Nền tảng Di động',
        industry: 'logistics',
        tagline: 'Hệ sinh thái giao hàng và dịch vụ tại nhà thống nhất.',
        description: 'Một Siêu ứng dụng đa nền tảng tích hợp giao đồ ăn, hàng tạp hóa và các dịch vụ tại nhà vào một trải nghiệm liền mạch duy nhất.',
        role: 'Nhà phát triển Chính',
        services: ['Phát triển Di động', 'Kiến trúc Hệ thống', 'Flutter'],
        tags: ['Flutter', 'Siêu Ứng dụng', 'Logistics', 'Mobile'],
        overview: 'Phát triển một Siêu ứng dụng dựa trên Flutter hợp nhất hơn 10 loại hình dịch vụ (Giao hàng, Dịch vụ tại nhà) cho thị trường Đông Nam Á.',
        problem: 'Người dùng phải tải nhiều ứng dụng cho các nhu cầu khác nhau. Khách hàng đang tranh giành thị phần và cần một trải nghiệm người dùng vượt trội, thống nhất.',
        solution: 'Xây dựng một ứng dụng dạng mô-đun sử dụng Clean Architecture và GetX. Tích hợp Google Maps để theo dõi thời gian thực và Firebase để cập nhật trực tiếp. Thêm OCR để thanh toán nhanh.',
        result: 'Ra mắt MVP trong vòng 5 tháng. Hơn 10k+ lượt tải xuống trong tháng đầu tiên. Tỷ lệ giữ chân 45% nhờ UX mượt mà và "Cảm giác Cao cấp".',
        techStack: [
            { category: 'Frontend', items: ['Flutter', 'GetX'] },
            { category: 'Backend', items: ['REST API (Dio)', 'Google Maps API'] },
            { category: 'Hạ tầng', items: ['Firebase', 'Google ML Kit'] }
        ],
        testimonial: {
            quote: "Họ là những người giải quyết vấn đề. Biến một hệ thống đa tầng phức tạp thành một ứng dụng đơn giản, dễ sử dụng là thế mạnh lớn nhất của họ.",
            author: "Ông K",
            role: "Chủ sở hữu Sản phẩm"
        },
        galleryLayout: 'grid-cols-1 md:grid-cols-3 gap-8',
        gallery: [
            { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop', caption: 'Bảng điều khiển Chính', className: 'md:col-span-1 aspect-[9/19]' },
            { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2000&auto=format&fit=crop', caption: 'Theo dõi Thời gian thực', className: 'md:col-span-1 aspect-[9/19]' }
        ]
    },
    {
        slug: 'cdsl-web-rebrand',
        name: 'CDSL Web Rebrand',
        client: 'CDSL (Nội bộ)',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
        category: 'Tái định vị & Chuyển đổi',
        industry: 'technology',
        tagline: 'Từ trang web tĩnh đến trải nghiệm kỹ thuật số sống động.',
        description: 'Di chuyển toàn bộ nền tảng từ Astro sang Next.js để cho phép tăng cường tính tương tác và các mẫu thiết kế cao cấp.',
        role: 'Kiến trúc sư Trưởng',
        services: ['Đổi mới Nền tảng', 'Thiết kế UI/UX', 'Tối ưu hóa Hiệu suất'],
        tags: ['Next.js', 'React', 'Framer Motion', 'Chuyển đổi'],
        overview: 'Một sáng kiến di chuyển kỹ thuật và tái định vị hình ảnh chiến lược nhằm chuyển đổi trang web công ty từ một trang thông tin tĩnh thành một nơi giới thiệu các năng lực kỹ thuật một cách sinh động.',
        problem: 'Kiến trúc dựa trên Astro cũ, dù hiệu suất cao với nội dung tĩnh, gặp khó khăn trong việc hỗ trợ các hoạt ảnh phức tạp, có trạng thái và sự chuyển đổi trang mượt mà cần thiết cho triết lý thiết kế "Hãy hiển thị, Đừng bán" (Show Don\'t Sell) mới. Thiết kế trước đó cũng thiếu đi cả thẩm mỹ cao cấp, tập trung vào kỹ thuật như mong muốn.',
        solution: 'Di chuyển toàn bỗ mã nguồn sang Next.js 16 (App Router) để tận dụng React Server Components cho hiệu năng, đồng thời cho phép tương tác mạnh mẽ ở phía client. Triển khai một hệ thống thiết kế tinh vi sử dụng TailwindCSS và các hoạt ảnh liên kết cuộn phức tạp với Framer Motion. Giới thiệu thẩm mỹ trọng tâm "chế độ tối" với glassmorphism (hiệu ứng kính mờ) và vi tương tác.',
        result: 'Ra mắt thành công một nền tảng hiệu suất cao, trực quan tuyệt đẹp với các chuyển đổi trang mượt mà và các yếu tố kể chuyện tương tác. Kiến trúc mới cho phép triển khai tính năng nhanh chóng và thể hiện tốt hơn năng lực kỹ thuật của đội ngũ.',
        techStack: [
            { category: 'Bộ khung', items: ['Next.js 16', 'React', 'TypeScript'] },
            { category: 'Giao diện', items: ['TailwindCSS', 'Framer Motion'] },
            { category: 'Cũ', items: ['Astro'] }
        ],
        testimonial: {
            quote: "Sự chuyển dịch sang Next.js không chỉ mang tính kỹ thuật—nó đã mở khóa một cấp độ sáng tạo và tương tác mà trước đây đơn giản là bất khả thi. Trang web bây giờ mang cảm giác thực sự sống động.",
            author: "Thanh Hùng",
            role: "Người sáng lập"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop', caption: 'Kiến trúc Mã nguồn' },
            { src: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop', caption: 'Hệ thống Thiết kế Mới' }
        ]
    },
    {
        slug: 'dvt-bid-manager',
        name: 'DVT Bid Manager',
        client: 'DVT (Nội bộ)',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
        category: 'Công cụ Nội bộ',
        industry: 'technology',
        tagline: 'Quản lý tài liệu thầu tự động và lưu trữ đám mây nội bộ.',
        description: 'Một nền tảng nội bộ an toàn để quản lý tài liệu thầu, tự động hóa quy trình phê duyệt và lưu trữ đám mây tập trung.',
        role: 'Chủ sở hữu Sản phẩm',
        services: ['Công cụ Nội bộ', 'Lưu trữ Đám mây', 'Tự động hóa Quy trình'],
        tags: ['Công cụ Nội bộ', 'Tự động hóa', 'Đám mây', 'Bảo mật'],
        overview: 'Phát triển một công cụ nội bộ toàn diện cho DVT để sắp xếp hợp lý việc quản lý tài liệu thầu (hồ sơ thầu). Hệ thống role như một bộ lưu trữ đám mây nội bộ an toàn và tự động hóa toàn bộ vòng đời của việc chuẩn bị và gửi hồ sơ mời thầu.',
        problem: 'Quản lý tài liệu thầu là một quá trình thủ công, dễ mắc lỗi liên quan đến các file rải rác trên email và ổ đĩa cục bộ. Việc kiểm soát phiên bản không tồn tại và quy trình phê duyệt chậm chạp, có nguy cơ bỏ lỡ thời hạn nộp hồ sơ.',
        solution: 'Xây dựng "DVT Bid Manager", một nền tảng đám mây nội bộ tập trung. Đã triển khai kiểm soát phiên bản tự động, quyền truy cập dựa trên vai trò và trình chỉnh sửa quy trình làm việc kéo và thả cho các phê duyệt tài liệu. Tích hợp với các công cụ giao tiếp nội bộ để nhận thông báo theo thời gian thực.',
        result: 'Giảm 60% thời gian chuẩn bị hồ sơ thầu. Loại bỏ các lỗi kiểm soát phiên bản. Bảo mật 100% hồ sơ thầu nội bộ trong một kho lưu trữ tập trung, có thể tìm kiếm được.',
        techStack: [
            { category: 'Backend', items: ['Ubuntu', 'Python'] },
            { category: 'Frontend', items: ['React', 'TailwindCSS'] },
            { category: 'DevOps', items: ['Docker'] }
        ],
        testimonial: {
            quote: "Công cụ này đã biến sự hỗn loạn của chúng tôi thành sự rõ ràng. Chúng tôi không còn lo lắng về việc mất file hay sai phiên bản. Đây là xương sống cho các hoạt động đấu thầu của chúng tôi.",
            author: "Thanh Hà",
            role: "Giám đốc Vận hành"
        },
        gallery: [
            { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop', caption: 'Kho Lưu trữ Tài liệu' },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', caption: 'Quy trình Phê duyệt' }
        ]
    }
];
