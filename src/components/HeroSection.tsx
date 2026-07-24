import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, Layers, Feather, Code2, GraduationCap, Layout, Users, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenProposal: () => void;
  onSelectService: (serviceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenProposal, onSelectService }) => {
  const HERO_IMAGE_PATH = '/src/assets/images/studio_hero_banner_1784865160789.jpg';

  const quickPillars = [
    { id: 'ux-ui', label: 'UX/UI Design', icon: Layout, desc: 'تجربة وواجهات' },
    { id: 'design-systems', label: 'Design Systems', icon: Layers, desc: 'أنظمة التصميم' },
    { id: 'ux-writing', label: 'UX Writing', icon: Feather, desc: 'كتابة النصوص' },
    { id: 'app-dev', label: 'App Dev Resources', icon: Code2, desc: 'تطوير وموارد' },
    { id: 'training', label: 'Training & Bootcamps', icon: GraduationCap, desc: 'التدريب والورش' },
  ];

  return (
    <section className="relative bg-slate-950 text-slate-100 pt-12 pb-20 overflow-hidden border-b border-slate-800">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column (Arabic Text & Call to Action) */}
          <div className="lg:col-span-7 space-y-8 text-right">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Userpath • استوديو وتصميم تجربة المستخدم والتطوير</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              نصمم التجارب الرقمية،{' '}
              <span className="text-orange-500">
                نبني أنظمة متكاملة،
              </span>{' '}
              وندرب الفرق.
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              شريكك الاستراتيجي في <strong className="text-orange-400 font-bold">Userpath</strong> لبناء تطبيقات عالية الجودة. نوفر خدمات{' '}
              <strong className="text-white font-semibold">تصميم الواجهات (UX/UI)</strong>،{' '}
              <strong className="text-white font-semibold">أنظمة التصميم (Design Systems)</strong>،{' '}
              <strong className="text-white font-semibold">كتابة تجربة المستخدم (UX Writing)</strong>،{' '}
              <strong className="text-white font-semibold">موارد تطوير التطبيقات</strong>، إلى جانب{' '}
              <strong className="text-orange-400 font-semibold">البرامج التدريبية الاحترافية للشركات</strong>.
            </p>

            {/* Quick Service Pills */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                اختر الخدمة للبدء والاطلاع على تفاصيلها:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickPillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => onSelectService(p.id)}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/80 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all hover:bg-slate-800/80 shadow-sm"
                      id={`hero-pill-${p.id}`}
                    >
                      <Icon className="w-4 h-4 text-orange-500" />
                      <span>{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenProposal}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-base shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                id="hero-btn-calculate-proposal"
              >
                <Sparkles className="w-5 h-5" />
                <span>حاسبة تكلفة ونطاق مشروعك</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base transition-colors"
                id="hero-btn-explore-services"
              >
                <span>استكشف كافة الخدمات</span>
              </button>
            </div>

            {/* Highlights checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تسليم ملفات Figma الكامله</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>كود نظيف معتمد React/Flutter</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تطوير وإرشاد الموظفين</span>
              </div>
            </div>

          </div>

          {/* Left Column (Hero Image & Floating Card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-indigo-950/50 group">
              <img
                src={HERO_IMAGE_PATH}
                alt="معاينة استوديو التصميم وأنظمة الكود"
                className="w-full h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Floating Card Overlay */}
              <div className="absolute bottom-6 right-6 left-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-right space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    متاح لمشاريع Q3/Q4
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Figma + React + Flutter</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  استوديو متكامل: من الفكرة إلى الكود والتدريب
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  نقلل التكاليف المكررة بتأسيس نظام تصميم مع كود برمجي موحد، وكتابة نصوص تجربة مستخدم ترفع المبيعات مباشرة.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Ticker Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="text-center md:text-right space-y-1">
            <div className="text-2xl sm:text-4xl font-black text-orange-500 font-mono">150+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">مشروع رقمي مكتمل</div>
          </div>
          <div className="text-center md:text-right space-y-1 border-r border-slate-800/80 pr-4">
            <div className="text-2xl sm:text-4xl font-black text-emerald-400 font-mono">+98%</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">رضا وقبول العملاء</div>
          </div>
          <div className="text-center md:text-right space-y-1 border-r border-slate-800/80 pr-4">
            <div className="text-2xl sm:text-4xl font-black text-orange-400 font-mono">+500</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">متدرب ومتدربة في معسكراتنا</div>
          </div>
          <div className="text-center md:text-right space-y-1 border-r border-slate-800/80 pr-4">
            <div className="text-2xl sm:text-4xl font-black text-amber-400 font-mono">12+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">نظام تصميم مخصص (Design Systems)</div>
          </div>
        </div>

      </div>
    </section>
  );
};
