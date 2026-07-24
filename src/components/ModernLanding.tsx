import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  CheckCircle2,
  Compass,
  Feather,
  Globe2,
  Layers3,
  Menu,
  Microscope,
  Moon,
  MousePointer2,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
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
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('userpath-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('userpath-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const palette = theme === 'dark'
    ? {
        '--page-bg': '#080b0f',
        '--surface': '#0d1117',
        '--card': '#080b0f',
        '--header': 'rgba(8, 11, 15, 0.88)',
        '--text': '#ffffff',
        '--muted': '#94a3b8',
        '--subtle': '#64748b',
        '--border': 'rgba(255, 255, 255, 0.08)',
        '--soft': 'rgba(255, 255, 255, 0.035)',
        '--hover': 'rgba(255, 255, 255, 0.07)',
      }
    : {
        '--page-bg': '#faf9f7',
        '--surface': '#f1f0ed',
        '--card': '#ffffff',
        '--header': 'rgba(250, 249, 247, 0.9)',
        '--text': '#172033',
        '--muted': '#526078',
        '--subtle': '#778297',
        '--border': 'rgba(23, 32, 51, 0.11)',
        '--soft': 'rgba(23, 32, 51, 0.035)',
        '--hover': 'rgba(23, 32, 51, 0.065)',
      };

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--text)] transition-colors duration-300"
      style={palette as React.CSSProperties}
      data-theme={theme}
    >
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header)] backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500 text-white">
              <Layers3 className="h-5 w-5" />
            </span>
            <span className="text-xl font-black tracking-tight">user<span className="text-orange-500">path</span></span>
          </button>

          <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
            <button onClick={() => goTo('services')} className="transition hover:text-orange-500">الخدمات</button>
            <button onClick={() => goTo('why-us')} className="transition hover:text-orange-500">لماذا نحن</button>
            <button onClick={() => goTo('contact')} className="transition hover:text-orange-500">تواصل معنا</button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--soft)] text-[var(--muted)] transition hover:bg-[var(--hover)] hover:text-orange-500"
              aria-label={theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
              title={theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن'}
            >
              {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <button
              onClick={onOpenProposal}
              className="hidden rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold transition hover:bg-orange-400 sm:block"
            >
              ابدأ مشروعك
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-xl border border-[var(--border)] p-2 text-[var(--muted)] md:hidden"
              aria-label="القائمة"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="space-y-1 border-t border-[var(--border)] px-5 py-4 md:hidden">
            {[
              ['services', 'الخدمات'],
              ['why-us', 'لماذا نحن'],
              ['contact', 'تواصل معنا'],
            ].map(([id, label]) => (
              <button key={id} onClick={() => goTo(id)} className="block w-full rounded-xl px-4 py-3 text-right text-sm text-[var(--muted)] hover:bg-[var(--hover)]">
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
                <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
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
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--soft)] px-6 py-3.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--hover)]"
                >
                  استكشف الخدمات
                </button>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted)]">
                {['المستخدمون الحقيقيون', 'البحث والبيانات', 'فهم الثقافة', 'التحقق والاختبار'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-4 shadow-2xl shadow-orange-950/10">
                <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-orange-500/12 blur-3xl" />
                <svg
                  viewBox="0 0 480 430"
                  role="img"
                  aria-labelledby="research-journey-title research-journey-desc"
                  className="relative h-[430px] w-full"
                >
                  <title id="research-journey-title">رحلة فهم المستخدم</title>
                  <desc id="research-journey-desc">رسم تجريدي يوضح انتقال المعرفة من المستخدم إلى البحث ثم إلى القرار</desc>
                  <defs>
                    <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="var(--subtle)" opacity="0.25" />
                    </pattern>
                    <linearGradient id="orange-flow" x1="1" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#f97316" floodOpacity="0.14" />
                    </filter>
                  </defs>

                  <rect x="0" y="0" width="480" height="430" rx="28" fill="url(#dot-grid)" />

                  <path
                    d="M395 110 C335 105 334 202 272 208 C208 214 218 316 88 315"
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  <path
                    d="M395 110 C335 105 334 202 272 208 C208 214 218 316 88 315"
                    fill="none"
                    stroke="url(#orange-flow)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                  />

                  <g transform="translate(350 64)" filter="url(#soft-shadow)">
                    <rect width="92" height="92" rx="28" fill="var(--card)" stroke="var(--border)" strokeWidth="2" />
                    <circle cx="46" cy="35" r="15" fill="#f97316" opacity="0.9" />
                    <path d="M22 72 C24 52 68 52 70 72" fill="#f97316" opacity="0.35" />
                    <circle cx="76" cy="17" r="7" fill="#22c55e" stroke="var(--card)" strokeWidth="3" />
                  </g>

                  <g transform="translate(204 156)" filter="url(#soft-shadow)">
                    <rect width="126" height="106" rx="24" fill="var(--card)" stroke="#f97316" strokeOpacity="0.45" strokeWidth="2" />
                    <rect x="19" y="20" width="88" height="10" rx="5" fill="var(--border)" />
                    <rect x="19" y="42" width="56" height="8" rx="4" fill="#f97316" opacity="0.75" />
                    <rect x="19" y="61" width="75" height="8" rx="4" fill="var(--border)" />
                    <circle cx="98" cy="78" r="14" fill="#f97316" opacity="0.15" />
                    <path d="M92 78 L97 83 L106 72" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </g>

                  <g transform="translate(42 270)" filter="url(#soft-shadow)">
                    <rect width="96" height="92" rx="28" fill="#f97316" />
                    <path d="M27 48 L42 63 L70 31" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  </g>

                  <g transform="translate(58 86)">
                    <rect width="126" height="70" rx="18" fill="var(--soft)" stroke="var(--border)" />
                    <circle cx="26" cy="24" r="7" fill="#f97316" />
                    <rect x="43" y="18" width="62" height="9" rx="4.5" fill="var(--border)" />
                    <rect x="20" y="42" width="86" height="8" rx="4" fill="var(--border)" opacity="0.65" />
                  </g>

                  <g transform="translate(300 302)">
                    <rect width="132" height="62" rx="18" fill="var(--soft)" stroke="var(--border)" />
                    <rect x="20" y="17" width="19" height="28" rx="6" fill="#f97316" opacity="0.35" />
                    <rect x="48" y="27" width="19" height="18" rx="6" fill="#f97316" opacity="0.65" />
                    <rect x="76" y="10" width="19" height="35" rx="6" fill="#f97316" />
                    <circle cx="111" cy="23" r="7" fill="#22c55e" />
                  </g>

                  {[145, 176, 330].map((x, index) => (
                    <circle key={x} cx={x} cy={index === 2 ? 149 : 333 - index * 42} r="5" fill="#f97316" opacity={0.45 + index * 0.2} />
                  ))}
                </svg>

                <div className="absolute inset-x-7 bottom-7 flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--header)] p-4 backdrop-blur-lg">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500">User → Insight → Decision</p>
                    <p className="mt-1 text-xs font-semibold text-[var(--text)]">نحوّل فهم المستخدم إلى قرار أوضح.</p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange-500 text-white">
                    <ArrowUpLeft className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-[var(--border)] bg-[var(--surface)] py-20 transition-colors duration-300 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-10 max-w-2xl space-y-3">
              <span className="text-xs font-black tracking-widest text-orange-400">خدماتنا</span>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">من السؤال الصحيح إلى تجربة أفضل.</h2>
              <p className="leading-7 text-[var(--muted)]">خدمات متكاملة تساعدك على الفهم، التصميم، الاختبار، والتحسين المستمر.</p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {services.map(({ icon: Icon, title, label, text }, index) => (
                <article
                  key={title}
                  className="group flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition hover:border-orange-400/35 hover:bg-orange-400/[0.035]"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-orange-400/20 bg-orange-400/8 text-orange-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h3 className="font-bold text-[var(--text)]">{title}</h3>
                      <span className="text-[10px] uppercase tracking-wider text-[var(--subtle)]">{label}</span>
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted)]">{text}</p>
                  </div>
                  <span className="mr-auto hidden text-xs text-[var(--subtle)] sm:block">0{index + 1}</span>
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
                <p className="leading-7 text-[var(--muted)]">
                  خبرة متعددة القطاعات داخل المملكة، مع فهم ثقافي ولغوي يضع البحث في سياقه الصحيح.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {values.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="rounded-2xl border border-[var(--border)] bg-[var(--soft)] p-5">
                    <Icon className="mb-5 h-5 w-5 text-orange-400" />
                    <h3 className="mb-2 font-bold">{title}</h3>
                    <p className="text-sm leading-7 text-[var(--muted)]">{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-14 border-t border-[var(--border)] pt-8">
              <p className="mb-5 text-xs font-bold text-[var(--subtle)]">خبرة عبر قطاعات متنوعة</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span key={industry} className="rounded-full border border-[var(--border)] bg-[var(--soft)] px-3 py-1.5 text-xs text-[var(--muted)]">
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

      <footer className="border-t border-[var(--border)] py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-5 text-xs text-[var(--subtle)] sm:px-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Layers3 className="h-4 w-4 text-orange-500" />
            <span className="font-bold text-[var(--text)]">userpath</span>
            <span>© 2026</span>
          </div>
          <a href="mailto:info@userpath.sa" className="transition hover:text-orange-400">info@userpath.sa</a>
        </div>
      </footer>
    </div>
  );
};
