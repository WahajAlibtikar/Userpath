import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Compass,
  Feather,
  Globe2,
  Layers3,
  Menu,
  Microscope,
  MousePointer2,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from 'lucide-react';

interface ModernLandingProps {
  onOpenProposal: () => void;
}

const services = [
  {
    icon: Microscope,
    title: 'أبحاث واختبارات تجربة المستخدم',
    label: 'UX Research & Testing',
    text: 'نفهم تجربة المستخدمين ونقاط الألم والتوقعات والاحتياجات، ثم نختبر التصاميم الحالية أو الجديدة لتتخذ قرارك بثقة.',
  },
  {
    icon: PenTool,
    title: 'تصميم واجهة المستخدم',
    label: 'User Interface Design',
    text: 'نصمم واجهات ويب وجوال جميلة وعملية، ملتزمة بمبادئ التصميم التفاعلي وأفضل ممارسات تجربة المستخدم.',
  },
  {
    icon: Users,
    title: 'تجربة العميل',
    label: 'Customer Experience',
    text: 'ننظر إلى الصورة الأكبر ونقيّم جميع نقاط تفاعل العميل مع شركتك، الرقمية وغير الرقمية، لبناء تجربة متسقة.',
  },
  {
    icon: Compass,
    title: 'تجربة المستخدم والأعمال',
    label: 'UX Strategy',
    text: 'نوائم أهداف العمل مع أهداف المستخدم ونبني خريطة طريق للتحول الرقمي وابتكار المنتجات وتطوير المفاهيم.',
  },
  {
    icon: Sparkles,
    title: 'ورش العمل',
    label: 'Workshops',
    text: 'يقود ممارسونا ورش عمل ومجموعات تركيز للتعلم والفهم والتفكير والإبداع، مصممة حسب احتياج عملك.',
  },
  {
    icon: BarChart3,
    title: 'تقييم تجربة المستخدم',
    label: 'UX Assessment',
    text: 'نراجع قابلية الاستخدام، نراقب تطور التجربة ونقارنها بالسوق والمنافسين، ثم نقدم توصيات قابلة للتنفيذ.',
  },
  {
    icon: Feather,
    title: 'تصميم المحتوى',
    label: 'UX Writing',
    text: 'نختار الكلمات التي توجه المستخدم نحو هدفه وتمنح المنتج رحلة أوضح وأسهل وأكثر إنسانية.',
  },
  {
    icon: MousePointer2,
    title: 'المنتجات المادية والصناعية',
    label: 'Human Factors',
    text: 'نحسّن كل منتج أو نظام أو عملية تتضمن تفاعلًا بشريًا؛ فتجربة المستخدم لا تقتصر على المواقع والتطبيقات.',
  },
];

const values = [
  {
    icon: Target,
    title: 'قيمة حقيقية',
    text: 'نحوّل البحث إلى رؤى قابلة للتنفيذ وحلول تخلق أثرًا لك ولعملائك.',
  },
  {
    icon: Search,
    title: 'البحث أولًا',
    text: 'نحدد المشكلة الصحيحة، نفهم المستخدمين، ونختبر الحل قبل الاستثمار في تنفيذه.',
  },
  {
    icon: Globe2,
    title: 'لغة وثقافة',
    text: 'طلاقة عربية وإنجليزية مع فهم عميق للثقافة السعودية والخليجية.',
  },
  {
    icon: ShieldCheck,
    title: 'فريق معتمد',
    text: 'ممارسون معتمدون يشرفون ويعملون مباشرة على جميع المشاريع.',
  },
];

const industries = [
  'القطاع الحكومي',
  'الخدمات المصرفية',
  'السفر والسياحة',
  'الصحة',
  'التجارة الإلكترونية',
  'الموارد البشرية',
  'الأمن السيبراني',
  'الاتصالات',
];

export const ModernLanding: React.FC<ModernLandingProps> = ({ onOpenProposal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080b0f] text-white">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#080b0f]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500 text-white">
              <Layers3 className="h-5 w-5" />
            </span>
            <span className="text-xl font-black tracking-tight">user<span className="text-orange-500">path</span></span>
          </button>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <button onClick={() => goTo('services')} className="transition hover:text-white">الخدمات</button>
            <button onClick={() => goTo('why-us')} className="transition hover:text-white">لماذا نحن</button>
            <button onClick={() => goTo('contact')} className="transition hover:text-white">تواصل معنا</button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenProposal}
              className="hidden rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold transition hover:bg-orange-400 sm:block"
            >
              ابدأ مشروعك
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-xl border border-white/10 p-2 text-slate-300 md:hidden"
              aria-label="القائمة"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="space-y-1 border-t border-white/8 px-5 py-4 md:hidden">
            {[
              ['services', 'الخدمات'],
              ['why-us', 'لماذا نحن'],
              ['contact', 'تواصل معنا'],
            ].map(([id, label]) => (
              <button key={id} onClick={() => goTo(id)} className="block w-full rounded-xl px-4 py-3 text-right text-sm text-slate-200 hover:bg-white/5">
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        <section className="relative">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[12%] top-8 h-72 w-72 rounded-full bg-orange-500/12 blur-[100px]" />
            <div className="absolute bottom-0 left-[10%] h-60 w-60 rounded-full bg-indigo-500/8 blur-[100px]" />
          </div>

          <div className="relative mx-auto grid min-h-[680px] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
            <div className="space-y-7 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/8 px-3 py-1.5 text-xs font-bold text-orange-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                شركة سعودية متخصصة في تجربة المستخدم
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-black leading-[1.18] tracking-tight sm:text-6xl lg:text-7xl">
                  طوّر مشروعك
                  <span className="block text-orange-500">بفهم المستخدم.</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  نساعدك على اكتشاف ما يحتاجه المستخدم فعلًا، تصميم التجربة المناسبة، واختبارها قبل اتخاذ القرار.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={onOpenProposal}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold shadow-2xl shadow-orange-950/40 transition hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  تحدث معنا عن مشروعك
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => goTo('services')}
                  className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/4 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/8"
                >
                  استكشف الخدمات
                </button>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/8 pt-5 text-xs text-slate-400">
                {['المستخدمون الحقيقيون', 'البحث والبيانات', 'فهم الثقافة', 'التحقق والاختبار'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-3">
                <img
                  src={new URL('../assets/images/studio_hero_banner_1784865160789.jpg', import.meta.url).href}
                  alt="فريق مسار المستخدم"
                  className="h-[430px] w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/10 bg-[#080b0f]/88 p-4 backdrop-blur-lg">
                  <p className="text-xs leading-6 text-slate-300">
                    «كلما ازداد فهمك للمستخدم، اقتربت من تقديم التجربة التي يبحث عنها ويحتاجها ويستحقها.»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-white/8 bg-[#0d1117] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-10 max-w-2xl space-y-3">
              <span className="text-xs font-black tracking-widest text-orange-400">خدماتنا</span>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">من السؤال الصحيح إلى تجربة أفضل.</h2>
              <p className="leading-7 text-slate-400">خدمات متكاملة تساعدك على الفهم، التصميم، الاختبار، والتحسين المستمر.</p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {services.map(({ icon: Icon, title, label, text }, index) => (
                <article
                  key={title}
                  className="group flex gap-4 rounded-2xl border border-white/8 bg-[#080b0f] p-5 transition hover:border-orange-400/35 hover:bg-orange-400/[0.025]"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-orange-400/20 bg-orange-400/8 text-orange-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h3 className="font-bold text-white">{title}</h3>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500">{label}</span>
                    </div>
                    <p className="text-sm leading-7 text-slate-400">{text}</p>
                  </div>
                  <span className="mr-auto hidden text-xs text-slate-600 sm:block">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="space-y-5 lg:col-span-4">
                <span className="text-xs font-black tracking-widest text-orange-400">لماذا مسار المستخدم؟</span>
                <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">بحث محلي.<br />قرارات أوضح.</h2>
                <p className="leading-7 text-slate-400">
                  خبرة متعددة القطاعات داخل المملكة، مع فهم ثقافي ولغوي يضع البحث في سياقه الصحيح.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {values.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                    <Icon className="mb-5 h-5 w-5 text-orange-400" />
                    <h3 className="mb-2 font-bold">{title}</h3>
                    <p className="text-sm leading-7 text-slate-400">{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-14 border-t border-white/8 pt-8">
              <p className="mb-5 text-xs font-bold text-slate-500">خبرة عبر قطاعات متنوعة</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span key={industry} className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-20 pt-4 sm:px-8 sm:pb-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-orange-400/25 bg-orange-500 p-7 text-[#160a02] sm:p-12">
            <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">لست متأكدًا من أين تبدأ؟</h2>
                <p className="max-w-xl text-sm font-medium leading-7 text-orange-950/75 sm:text-base">
                  أخبرنا عن مشروعك بشكل مختصر، وسنشرح لك الخدمة المناسبة بكل وضوح وصدق.
                </p>
              </div>
              <button
                onClick={onOpenProposal}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#080b0f] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                تواصل معنا
                <ArrowUpLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-5 text-xs text-slate-500 sm:px-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Layers3 className="h-4 w-4 text-orange-500" />
            <span className="font-bold text-slate-300">userpath</span>
            <span>© 2026</span>
          </div>
          <a href="mailto:info@userpath.sa" className="transition hover:text-orange-400">info@userpath.sa</a>
        </div>
      </footer>
    </div>
  );
};
