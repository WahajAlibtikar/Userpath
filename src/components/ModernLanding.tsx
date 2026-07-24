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

const direction = [
  {
    icon: Compass,
    number: '01',
    title: 'رؤيتنا',
    text: 'أن تكون التجارب المبنية على فهم الإنسان أساسًا في تطوير المنتجات والخدمات، وأن يصبح صوت المستخدم حاضرًا في كل قرار مؤثر.',
  },
  {
    icon: Feather,
    number: '02',
    title: 'رسالتنا',
    text: 'مساعدة الجهات على فهم مستخدميها الحقيقيين، وتحويل البحث والرؤى إلى تجارب واضحة وفعّالة تحقق أهداف المستخدم والعمل معًا.',
  },
  {
    icon: Target,
    number: '03',
    title: 'هدفنا',
    text: 'تمكين الناس من تحقيق أهدافهم وتسهيل حياتهم؛ بتبسيط كل ما هو معقد، وإعادة الاهتمام لكل ما تم تجاهله.',
  },
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

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const progress = document.querySelector<HTMLElement>('.scroll-progress');

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
      );
      revealItems.forEach((item) => observer.observe(item));

      let frame = 0;
      const updateProgress = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const distance = document.documentElement.scrollHeight - window.innerHeight;
          const ratio = distance > 0 ? window.scrollY / distance : 0;
          progress?.style.setProperty('--scroll', String(Math.min(1, Math.max(0, ratio))));
        });
      };
      updateProgress();
      window.addEventListener('scroll', updateProgress, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', updateProgress);
        cancelAnimationFrame(frame);
      };
    }
  }, []);

  const palette = theme === 'dark'
    ? {
        '--page-bg': '#0b2033',
        '--surface': '#132e49',
        '--card': '#102941',
        '--header': 'rgba(11, 32, 51, 0.88)',
        '--text': '#fff9f4',
        '--muted': '#b7c9d8',
        '--subtle': '#7fa2bc',
        '--border': 'rgba(252, 190, 141, 0.14)',
        '--soft': 'rgba(36, 84, 120, 0.25)',
        '--hover': 'rgba(252, 190, 141, 0.1)',
        '--accent': '#f48935',
        '--accent-soft': '#fcbe8d',
        '--brand-blue': '#245478',
        '--brand-navy': '#132e49',
      }
    : {
        '--page-bg': '#fffaf6',
        '--surface': '#f8eee7',
        '--card': '#ffffff',
        '--header': 'rgba(255, 250, 246, 0.9)',
        '--text': '#132e49',
        '--muted': '#49677e',
        '--subtle': '#6f8799',
        '--border': 'rgba(19, 46, 73, 0.12)',
        '--soft': 'rgba(252, 190, 141, 0.16)',
        '--hover': 'rgba(244, 137, 53, 0.1)',
        '--accent': '#f48935',
        '--accent-soft': '#fcbe8d',
        '--brand-blue': '#245478',
        '--brand-navy': '#132e49',
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
      <div className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[var(--accent)]" />
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
            <div className="space-y-7 lg:col-span-7" data-reveal="right">
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

            <div className="lg:col-span-5" data-reveal="left">
              <div
                className="mesh-stage group relative h-[462px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[#090b11] shadow-2xl shadow-orange-950/20"
                onPointerMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect();
                  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
                  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
                  event.currentTarget.style.setProperty('--mx', x.toFixed(3));
                  event.currentTarget.style.setProperty('--my', y.toFixed(3));
                }}
                onPointerLeave={(event) => {
                  event.currentTarget.style.setProperty('--mx', '0');
                  event.currentTarget.style.setProperty('--my', '0');
                }}
                aria-label="خلفية شبكية متحركة تعبّر عن تدفق أفكار المستخدم"
              >
                <div className="mesh-base absolute inset-0" />
                <div className="mesh-orb mesh-orb-one absolute h-[310px] w-[310px] rounded-full" />
                <div className="mesh-orb mesh-orb-two absolute h-[280px] w-[280px] rounded-full" />
                <div className="mesh-orb mesh-orb-three absolute h-[240px] w-[240px] rounded-full" />
                <div className="mesh-orb mesh-orb-four absolute h-[190px] w-[190px] rounded-full" />
                <div className="mesh-grid absolute inset-0 opacity-30" />
                <div className="mesh-noise absolute inset-0 opacity-[0.055]" />

                <div className="mesh-ring absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="mesh-ring mesh-ring-delay absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/10" />

                <div className="mesh-copy absolute inset-x-7 bottom-7 z-10 rounded-2xl border border-white/10 bg-black/25 p-5 text-white backdrop-blur-xl">
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-orange-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
                    Userpath / Experience Lab
                  </div>
                  <p className="max-w-xs text-lg font-black leading-7">نحوّل الضوضاء إلى فهم، والفهم إلى تجربة واضحة.</p>
                </div>

                <span className="mesh-float absolute right-7 top-7 z-10 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white/80 backdrop-blur-md">
                  HUMAN CENTERED
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-[var(--border)] bg-[var(--surface)] py-20 transition-colors duration-300 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-10 max-w-2xl space-y-3" data-reveal="up">
              <span className="text-xs font-black tracking-widest text-orange-400">خدماتنا</span>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">من السؤال الصحيح إلى تجربة أفضل.</h2>
              <p className="leading-7 text-[var(--muted)]">خدمات متكاملة تساعدك على الفهم، التصميم، الاختبار، والتحسين المستمر.</p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {services.map(({ icon: Icon, title, label, text }, index) => (
                <article
                  key={title}
                  data-reveal="up"
                  style={{ '--delay': `${Math.min(index, 5) * 70}ms` } as React.CSSProperties}
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
              <div className="space-y-5 lg:col-span-4" data-reveal="right">
                <span className="text-xs font-black tracking-widest text-orange-400">لماذا مسار المستخدم؟</span>
                <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">بحث محلي.<br />قرارات أوضح.</h2>
                <p className="leading-7 text-[var(--muted)]">
                  خبرة متعددة القطاعات داخل المملكة، مع فهم ثقافي ولغوي يضع البحث في سياقه الصحيح.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {values.map(({ icon: Icon, title, text }, index) => (
                  <article
                    key={title}
                    data-reveal="up"
                    style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--soft)] p-5"
                  >
                    <Icon className="mb-5 h-5 w-5 text-orange-400" />
                    <h3 className="mb-2 font-bold">{title}</h3>
                    <p className="text-sm leading-7 text-[var(--muted)]">{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-14 border-t border-[var(--border)] pt-8" data-reveal="up">
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

        <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20 transition-colors duration-300 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-10 grid items-end gap-5 md:grid-cols-2" data-reveal="up">
              <div className="space-y-3">
                <span className="text-xs font-black tracking-widest text-orange-400">وجهتنا</span>
                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">لماذا نعمل، وإلى أين نتجه.</h2>
              </div>
              <p className="max-w-xl leading-7 text-[var(--muted)] md:mr-auto">
                المستخدم ليس آخر خطوة في عملية التصميم؛ بل هو من يقود الطريق منذ السؤال الأول وحتى التحقق من الحل.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {direction.map(({ icon: Icon, number, title, text }, index) => (
                <article
                  key={title}
                  data-reveal="up"
                  style={{ '--delay': `${index * 110}ms` } as React.CSSProperties}
                  className="group relative min-h-64 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <span className="absolute left-5 top-4 text-5xl font-black text-[var(--soft)] transition group-hover:text-orange-400/15">
                    {number}
                  </span>
                  <div className="relative flex h-full flex-col">
                    <span className="mb-12 grid h-11 w-11 place-items-center rounded-2xl bg-orange-500 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mb-3 text-xl font-black">{title}</h3>
                    <p className="text-sm leading-7 text-[var(--muted)]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-20 pt-4 sm:px-8 sm:pb-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-orange-400/25 bg-orange-500 p-7 text-[#160a02] sm:p-12" data-reveal="scale">
            <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">لست متأكدًا من أين تبدأ؟</h2>
                <p className="mx-auto max-w-2xl text-sm font-medium leading-7 text-orange-950/75 sm:text-base">
                  أخبرنا عن مشروعك بشكل مختصر، وسنشرح لك الخدمة المناسبة بكل وضوح وصدق.
                </p>
              </div>
              <button
                onClick={onOpenProposal}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#080b0f] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                تواصل معنا
                <ArrowUpLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-8" data-reveal="up">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-5 text-xs text-[var(--subtle)] sm:px-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Layers3 className="h-4 w-4 text-orange-500" />
            <span className="font-bold text-[var(--text)]">userpath</span>
            <span>© 2026</span>
          </div>
          <a href="mailto:info@userpath.sa" className="transition hover:text-orange-400">info@userpath.sa</a>
        </div>
      </footer>

      <style>{`
        .scroll-progress {
          transform: scaleX(var(--scroll, 0));
          transform-origin: left center;
          box-shadow: 0 0 18px color-mix(in srgb, var(--accent) 70%, transparent);
        }
        [data-reveal] {
          opacity: 0;
          transition:
            opacity .85s cubic-bezier(.16,1,.3,1),
            transform .85s cubic-bezier(.16,1,.3,1);
          transition-delay: var(--delay, 0ms);
          will-change: opacity, transform;
        }
        [data-reveal="up"] { transform: translateY(48px); }
        [data-reveal="right"] { transform: translateX(44px); }
        [data-reveal="left"] { transform: translateX(-44px); }
        [data-reveal="scale"] { transform: scale(.94); }
        [data-reveal].is-visible { opacity: 1; transform: none; }
        article[data-reveal] {
          transition:
            opacity .8s cubic-bezier(.16,1,.3,1),
            transform .8s cubic-bezier(.16,1,.3,1),
            border-color .25s ease,
            background-color .25s ease;
          transition-delay: var(--delay, 0ms);
        }
        article[data-reveal].is-visible:hover { transform: translateY(-5px); }
        .bg-orange-500 { background-color: var(--accent) !important; }
        .text-orange-500, .text-orange-400, .text-orange-300 { color: var(--accent) !important; }
        .border-orange-400\\/25, .border-orange-400\\/20 { border-color: color-mix(in srgb, var(--accent) 28%, transparent) !important; }

        .mesh-stage { --mx: 0; --my: 0; isolation: isolate; }
        .mesh-base {
          background:
            radial-gradient(circle at 18% 18%, rgba(244,137,53,.28), transparent 34%),
            radial-gradient(circle at 82% 76%, rgba(36,84,120,.4), transparent 38%),
            linear-gradient(145deg, #0b2033 0%, #132e49 48%, #081725 100%);
        }
        .mesh-orb {
          filter: blur(46px);
          mix-blend-mode: screen;
          will-change: transform;
          transition: transform .9s cubic-bezier(.16,1,.3,1);
        }
        .mesh-orb-one {
          left: -14%; top: -12%;
          background: #f48935;
          opacity: .9;
          animation: mesh-one 11s ease-in-out infinite alternate;
          transform: translate(calc(var(--mx) * 18px), calc(var(--my) * 18px));
        }
        .mesh-orb-two {
          right: -18%; top: 12%;
          background: #fcbe8d;
          opacity: .66;
          animation: mesh-two 14s ease-in-out infinite alternate;
          transform: translate(calc(var(--mx) * -22px), calc(var(--my) * -22px));
        }
        .mesh-orb-three {
          left: 22%; bottom: -22%;
          background: #245478;
          opacity: .52;
          animation: mesh-three 13s ease-in-out infinite alternate;
          transform: translate(calc(var(--mx) * 28px), calc(var(--my) * 28px));
        }
        .mesh-orb-four {
          right: 14%; bottom: 20%;
          background: #f48935;
          opacity: .3;
          animation: mesh-four 9s ease-in-out infinite alternate;
        }
        .mesh-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent 82%);
          transform: perspective(600px) rotateX(58deg) scale(1.5) translateY(-8%);
          transform-origin: top center;
          animation: grid-drift 16s linear infinite;
        }
        .mesh-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.9'/%3E%3C/svg%3E");
        }
        .mesh-ring { animation: ring-breathe 6s ease-in-out infinite; }
        .mesh-ring-delay { animation-delay: -3s; }
        .mesh-copy, .mesh-float {
          transform: translate(calc(var(--mx) * 9px), calc(var(--my) * 9px));
          transition: transform .8s cubic-bezier(.16,1,.3,1);
        }
        .mesh-float { transform: translate(calc(var(--mx) * -12px), calc(var(--my) * -12px)); }
        @keyframes mesh-one { to { translate: 52px 68px; scale: 1.16; } }
        @keyframes mesh-two { to { translate: -64px 72px; scale: .86; } }
        @keyframes mesh-three { to { translate: 58px -74px; scale: 1.2; } }
        @keyframes mesh-four { to { translate: -42px -58px; scale: 1.14; } }
        @keyframes ring-breathe { 50% { scale: 1.08; opacity: .45; } }
        @keyframes grid-drift { to { background-position: 42px 42px; } }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1 !important; transform: none !important; }
          .mesh-stage *, .mesh-stage *::before, .mesh-stage *::after {
            animation-duration: .001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .001ms !important;
          }
        }
      `}</style>
    </div>
  );
};
