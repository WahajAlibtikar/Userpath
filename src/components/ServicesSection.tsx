import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceDetail, ServiceId } from '../types';
import { Layout, Layers, Feather, Code2, GraduationCap, CheckCircle2, ArrowLeft, X, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForProposal: (serviceId: ServiceId) => void;
  selectedServiceId?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForProposal,
  selectedServiceId
}) => {
  const [activeTab, setActiveTab] = useState<ServiceId | 'all'>('all');
  const [modalService, setModalService] = useState<ServiceDetail | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Layers': return Layers;
      case 'Feather': return Feather;
      case 'Code2': return Code2;
      case 'GraduationCap': return GraduationCap;
      default: return Layout;
    }
  };

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.id === activeTab);

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-9">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>خدماتنا المتخصصة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            كل ما يحتاجه منتجك في مكان واحد
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            اختر الخدمة المناسبة، واطّلع على المخرجات والتكلفة المبدئية دون تشتيت.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
            id="tab-service-all"
          >
            الكل (5)
          </button>
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);
            const isSelected = activeTab === service.id;
            const shortTabTitle = 
              service.id === 'ux-ui' ? 'تصميم UX/UI' :
              service.id === 'design-systems' ? 'أنظمة التصميم' :
              service.id === 'ux-writing' ? 'كتابة UX' :
              service.id === 'app-dev' ? 'تطوير التطبيقات' : 'التدريب';
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
                id={`tab-service-${service.id}`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{shortTabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group relative"
                id={`service-card-${service.id}`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs text-orange-400/80 font-mono">
                    {service.titleEn}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Top Deliverables bullets */}
                <div className="space-y-2 mb-5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">أبرز المخرجات:</span>
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                  {service.deliverables.length > 3 && (
                    <p className="text-[11px] text-orange-400 pt-1 font-medium">
                      +{service.deliverables.length - 2} مخرجات إضافية
                    </p>
                  )}
                </div>

                {/* Card Actions */}
                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>يبدأ من:</span>
                    <span className="font-bold text-slate-200">{service.pricingStartsFrom}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setModalService(service)}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors text-center whitespace-nowrap"
                      id={`btn-details-${service.id}`}
                    >
                      التفاصيل والمنهجية
                    </button>
                    <button
                      onClick={() => onSelectServiceForProposal(service.id)}
                      className="w-full py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                      id={`btn-order-${service.id}`}
                    >
                      <span>طلب الخدمة</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {modalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 text-slate-100 relative shadow-2xl my-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-5">
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                  {modalService.badge}
                </span>
                <h3 className="text-2xl font-bold text-white pt-2">{modalService.title}</h3>
                <p className="text-xs text-slate-400 font-mono">{modalService.titleEn}</p>
              </div>
              <button
                onClick={() => setModalService(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                id="btn-close-service-modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed">
              {modalService.fullDesc}
            </p>

            {/* Deliverables Full Checklist */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
                <span>قائمة المخرجات والتسليمات (Deliverables):</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modalService.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process / Steps */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span>خطوات ومنهجية العمل:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {modalService.process.map((p, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                        {p.step}
                      </span>
                      <span className="text-sm font-bold text-white">{p.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            {modalService.techStack && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400">الأدوات والتقنيات المستخدمة:</span>
                <div className="flex flex-wrap gap-2">
                  {modalService.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                السعر المبدئي: <strong className="text-white text-sm">{modalService.pricingStartsFrom}</strong>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setModalService(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  إغلاق
                </button>
                <button
                  onClick={() => {
                    const sid = modalService.id;
                    setModalService(null);
                    onSelectServiceForProposal(sid);
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
                >
                  <span>طلب العرض لهذه الخدمة</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
