import { CaseStudy } from '../types';

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'تطوير وتأسيس نظام تصميم لميديكير (MediCare App)',
    category: 'design-systems',
    client: 'مجموعة الميديكير الطبية',
    clientIndustry: 'الرعاية الصحية الرقمية',
    description: 'بناء نظام تصميم متكامل يخدم 3 منصات (تطبيق المرضى، لوحة تحكم الأطباء، وموقع الحجوزات)، مع توفير مكتبة مكونات برمجية بلغة React وTailwind.',
    impactMetrics: [
      { label: 'تسريع إطلاق الشاشات', value: 'x2.5' },
      { label: 'خفض أخطاء الواجهة', value: '70%' },
      { label: 'اتساق العلامة التجارية', value: '100%' }
    ],
    deliverables: ['Figma Tokens Library', 'React Component Library', 'Storybook Docs', 'Typography Rules'],
    tags: ['Design Systems', 'React', 'Figma', 'HealthTech'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cs-2',
    title: 'إعادة إعادة تصميم تجربة مستخدم منصة تداول لوجستية (FlowLog)',
    category: 'ux-ui',
    client: 'شركة سبل اللوجستية',
    clientIndustry: 'الشحن والتوزيع',
    description: 'تحسين رحلة تتبع الشحنات وإدارة الأسطول، وتحويل العمليات المعقدة إلى شاشات بسيطة مدعومة باختبارات قابلية الاستخدام مع السائقين والمشرفين.',
    impactMetrics: [
      { label: 'ارتفاع سهولة الاستخدام', value: '+45%' },
      { label: 'انخفاض بلاغات الدعم', value: '-38%' },
      { label: 'زمن إتمام الشحنة', value: '-2.5 دقيقة' }
    ],
    deliverables: ['User Journey Mapping', 'High-Fi Figma Prototypes', 'Design Handoff', 'User Testing'],
    tags: ['UX/UI Design', 'Logistics', 'Mobile App', 'Usability Testing'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cs-3',
    title: 'إستراتيجية كتابة تجربة المستخدم لتطبيق محفظة مالية (SareePay)',
    category: 'ux-writing',
    client: 'شركة السريع للمدفوعات',
    clientIndustry: 'التقنية المالية (FinTech)',
    description: 'إعادة صياغة كافة نصوص التطبيق، معالجة رسائل الخطأ، وتسهيل خطوات توثيق الهوية والنقل المالي بأسلوب عربي طبيعي وسلس.',
    impactMetrics: [
      { label: 'ارتفاع معدل إكمال التوثيق', value: '+32%' },
      { label: 'تقليل نِسب إلغاء التحويل', value: '-24%' },
      { label: 'تقييم التطبيق بالمتاجر', value: '4.8 ★' }
    ],
    deliverables: ['Tone of Voice Guide', 'Arabic Microcopy Audit', 'Checkout Copy Redesign', 'Error Message Playbook'],
    tags: ['UX Writing', 'FinTech', 'Arabic Microcopy', 'Content Strategy'],
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cs-4',
    title: 'تزويد طاقم برلمجي متكامل لمنصة تعليمية (EduMaster)',
    category: 'app-dev',
    client: 'أكاديمية المعرفة الرقمية',
    clientIndustry: 'التقنية التعليمية (EdTech)',
    description: 'تزويد المنصة بـ 4 مهندسي تطبيقات (Flutter & React) لمدة 6 أشهر لإطلاق منصة الفصول الافتراضية والدروس المباشرة.',
    impactMetrics: [
      { label: 'إطلاق المنصة قبل الموعد', value: 'بـ 3 أسابيع' },
      { label: 'نسبة أداء واستقرار الكود', value: '99.9%' },
      { label: 'عدد الطلاب النشطين', value: '+120k' }
    ],
    deliverables: ['Dedicated Flutter Pod', 'Fullstack React Engineers', 'Automated QA Pipelines', 'API Integration'],
    tags: ['App Dev Resources', 'Flutter', 'React', 'EdTech'],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80'
  }
];
