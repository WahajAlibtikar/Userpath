import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import { ServiceId } from '../types';
import { Sparkles, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [filter, setFilter] = useState<ServiceId | 'all'>('all');

  const filteredCaseStudies = filter === 'all'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter(cs => cs.category === filter);

  return (
    <section id="case-studies" className="py-16 sm:py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-5">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>معرض المخرجات والنتائج</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              نتائج مختارة من أعمالنا
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              استكشف نماذج تسليمات Userpath في تصميم الأنظمة، إعادة كتابة الواجهات، وتزويد كفاءات التطوير.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === 'all'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              id="filter-cs-all"
            >
              الكل
            </button>
            <button
              onClick={() => setFilter('design-systems')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === 'design-systems'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              id="filter-cs-ds"
            >
              أنظمة التصميم
            </button>
            <button
              onClick={() => setFilter('ux-ui')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === 'ux-ui'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              id="filter-cs-uxui"
            >
              UX/UI
            </button>
            <button
              onClick={() => setFilter('ux-writing')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === 'ux-writing'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              id="filter-cs-writing"
            >
              كتابة UX
            </button>
            <button
              onClick={() => setFilter('app-dev')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === 'app-dev'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              id="filter-cs-appdev"
            >
              التطوير
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredCaseStudies.slice(0, 2).map((cs) => (
            <div
              key={cs.id}
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-orange-500/40 transition-all flex flex-col justify-between group"
              id={`case-study-card-${cs.id}`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cs.imageUrl}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-semibold text-orange-300">
                    {cs.clientIndustry}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <span className="text-xs text-slate-400 font-medium">{cs.client}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors pt-1">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                    {cs.description}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  {cs.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="text-center space-y-0.5">
                      <div className="text-base sm:text-lg font-extrabold text-orange-400 font-mono">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Deliverables Chips */}
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 block">التسليمات الرئيسية:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.deliverables.map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px] font-mono">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
