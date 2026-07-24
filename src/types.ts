export type ServiceId = 'ux-ui' | 'design-systems' | 'ux-writing' | 'app-dev' | 'training';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  titleEn: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  deliverables: string[];
  features: {
    title: string;
    desc: string;
  }[];
  techStack?: string[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  pricingStartsFrom: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: ServiceId;
  client: string;
  clientIndustry: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  deliverables: string[];
  tags: string[];
  imageUrl: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  level: 'مبتدئ' | 'متوسط' | 'متقدم' | 'للشركات والمعسكرات';
  duration: string;
  format: 'عن بُعد' | 'حضوري' | 'هجين' | 'حضوري / للشركات';
  category: ServiceId;
  description: string;
  topics: string[];
  targetAudience: string;
  nextCohortDate: string;
  seatsRemaining: number;
}

export interface UxWritingExample {
  id: string;
  context: string;
  before: {
    text: string;
    reason: string;
  };
  after: {
    text: string;
    benefit: string;
  };
  category: 'أخطاء وحالات تنبيه' | 'زر الاتخاذ (CTA)' | 'خطوات التسجيل' | 'إشعارات فارغة (Empty States)';
}

export interface ProposalState {
  services: ServiceId[];
  projectScope: 'تأسيس جديد' | 'إعادة تصميم وتحسين' | 'توسعة فريق (Augmentation)' | 'تدريب طاقم العمل';
  timeline: '1 - 2 شهر' | '3 - 6 أشهر' | 'عقد مستمر / سنوي';
  teamRequirements: string[];
  budgetRange: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientPhone: string;
  projectNotes: string;
}
