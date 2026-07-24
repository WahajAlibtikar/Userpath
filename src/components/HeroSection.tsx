import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, Layers, Code2, Layout } from 'lucide-react';
import heroBanner from '../assets/images/studio_hero_banner_1784865160789.jpg';

interface HeroSectionProps {
  onOpenProposal: () => void;
  onSelectService: (serviceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenProposal, onSelectService }) => {
  const highlights = [
    'تصميم وتجربة مستخدم',
    'أنظمة تصميم قابلة للتوسع',
    'تطوير وتدريب الفرق',
  ];

  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-14 sm:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 right-1/4 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-6 text-right lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1.5 text-xs font-bold text-orange-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            استوديو سعودي للمنتجات الرقمية
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-black leading-[1.18] tracking-tight text-white sm:text-5xl lg:text-6xl">
              تجربة أوضح،
              <span className="block text-orange-500">ونظام أسرع للنمو.</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              نصمم المنتجات الرقمية، نبني أنظمة التصميم، ونساند فرق التطوير والتدريب—من الفكرة حتى الإطلاق.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onOpenProposal}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-orange-950/40 transition hover:-translate-y-0.5 hover:bg-orange-500"
              id="hero-btn-calculate-proposal"
            >
              <Sparkles className="h-4 w-4" />
              ابدأ مشروعك
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => onSelectService('services')}
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
            >
              استعرض الخدمات
            </button>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-800 pt-5">
            {highlights.map((item) => (
              <span key={item} className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-3 shadow-2xl shadow-black/30">
            <img
              src={heroBanner}
              alt="استوديو Userpath للمنتجات الرقمية"
              className="h-72 w-full rounded-2xl object-cover sm:h-80"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-slate-950/85 p-4 backdrop-blur">
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: Layout, label: 'UX/UI' },
                  { icon: Layers, label: 'Systems' },
                  { icon: Code2, label: 'Build' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="space-y-1">
                    <Icon className="mx-auto h-5 w-5 text-orange-400" />
                    <span className="block text-[11px] font-semibold text-slate-200">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-4">
        {[
          ['150+', 'مشروع رقمي'],
          ['98%', 'رضا العملاء'],
          ['500+', 'متدرب ومتدربة'],
          ['12+', 'نظام تصميم'],
        ].map(([value, label]) => (
          <div key={label} className="bg-slate-900 px-5 py-4 text-center">
            <strong className="block text-2xl font-black text-orange-400">{value}</strong>
            <span className="mt-1 block text-xs text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
