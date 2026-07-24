import { TrainingCourse } from '../types';

export const TRAINING_COURSES_DATA: TrainingCourse[] = [
  {
    id: 'tr-1',
    title: 'المعسكر الاحترافي لبناء أنظمة التصميم (Design Systems Bootcamp)',
    level: 'للشركات والمعسكرات',
    duration: '4 أسابيع (32 ساعة تطبيقية)',
    format: 'هجين',
    category: 'design-systems',
    description: 'تعلم كيفية بناء وتأسيس وحوكمة أنظمة التصميم الكبيرة في Figma وترجمتها إلى كود برمجي مستدام يخدم الفرق المتعددة.',
    topics: [
      'هندسة متغيرة التصميم (Design Tokens Hierarchy)',
      'بناء المكونات المعقدة المتجاوبة في Figma (Auto Layout 5.0)',
      'توثيق الأنظمة واستخدام Storybook',
      'ربط Figma بالكود وإدارة التغييرات والتحديثات'
    ],
    targetAudience: 'مصممو UX/UI، مطورو الواجهات، ومدراء المنتجات للشركات.',
    nextCohortDate: '15 أغسطس 2026',
    seatsRemaining: 6
  },
  {
    id: 'tr-2',
    title: 'ورشة كتابة تجربة المستخدم بالعربية (Arabic UX Writing Masterclass)',
    level: 'متوسط',
    duration: 'يومان (10 ساعات مكثفة)',
    format: 'عن بُعد',
    category: 'ux-writing',
    description: 'ورشة عمل تطبيقية لصياغة النصوص الدقيقة داخل التطبيقات، صياغة شخصية المنتج، وحل مشكلات التعبير في الشاشات العربية.',
    topics: [
      'صياغة نبرة الصوت وشخصية المنتج (Brand Persona)',
      'كتابة رسائل الخطأ والتنبيهات المريحة للمستخدم',
      'صياغة زوايا الشراء وأزرار اتخاذ القرار (CTAs)',
      'اختبار قياس فهم النص مع المستخدمين'
    ],
    targetAudience: 'كتاب المحتوى، مصممو الواجهات، ومسؤولو التسويق الرقمي.',
    nextCohortDate: '28 يوليو 2026',
    seatsRemaining: 4
  },
  {
    id: 'tr-3',
    title: 'برنامج صقل مهارات أبحاث تجربة المستخدم (UX Research & Usability Testing)',
    level: 'متوسط',
    duration: 'أسبوعان (16 ساعة)',
    format: 'عن بُعد',
    category: 'ux-ui',
    description: 'دورة عملية تغطي تخطيط وإجراء وملاحظة أبحاث واختبارات المستخدم واستخراج التوصيات القابلة للتطبيق الفوري.',
    topics: [
      'إعداد أسئلة المقابلات وسيناريوهات الاختيار',
      'استخدام أدوات الاختبار الحديثة (Maze, Lookback)',
      'تحليل البيانات الكيفية والكمية',
      'صياغة تقارير الأبحاث المؤثرة للإدارة'
    ],
    targetAudience: 'باحثو ومصممو تجربة المستخدم، ومحللو الأعمال.',
    nextCohortDate: '5 سبتمبر 2026',
    seatsRemaining: 10
  },
  {
    id: 'tr-4',
    title: 'معسكر تدريب وتأهيل الفرق التقنية في React & TypeScript',
    level: 'للشركات والمعسكرات',
    duration: '6 أسابيع (48 ساعة)',
    format: 'حضوري / للشركات',
    category: 'app-dev',
    description: 'تأهيل المهندسين الجدد أو تحويل طاقم الشركة إلى أحدث تقنيات بناء تطبيقات الويب العالية الأداء.',
    topics: [
      'أساسيات React 19 والأنماط المتقدمة',
      'إدارة الحالة والأداء مع TypeScript',
      'بناء الواجهات متسقة مع أنظمة التصميم (Tailwind)',
      'اختبارات الجودة ومكاملة الـ APIs'
    ],
    targetAudience: 'فرق التطوير الداخلية للشركات والمؤسسات.',
    nextCohortDate: '10 سبتمبر 2026',
    seatsRemaining: 12
  }
];
