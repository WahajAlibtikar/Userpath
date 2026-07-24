import React, { useState, useEffect } from 'react';
import { ServiceId, ProposalState } from '../types';
import { X, Sparkles, CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, FileText, Send, Phone, Mail, Building, User } from 'lucide-react';

interface ProposalEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceId;
  preConfiguredDevNote?: string;
}

export const ProposalEstimatorModal: React.FC<ProposalEstimatorModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  preConfiguredDevNote
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [proposal, setProposal] = useState<ProposalState>({
    services: preSelectedService ? [preSelectedService] : ['ux-ui', 'design-systems'],
    projectScope: 'تأسيس جديد',
    timeline: '1 - 2 شهر',
    teamRequirements: [],
    budgetRange: '30,000 - 60,000 ر.س',
    clientName: '',
    clientCompany: '',
    clientEmail: '',
    clientPhone: '',
    projectNotes: preConfiguredDevNote || ''
  });

  useEffect(() => {
    if (preSelectedService && !proposal.services.includes(preSelectedService)) {
      setProposal(prev => ({ ...prev, services: [...prev.services, preSelectedService] }));
    }
    if (preConfiguredDevNote) {
      setProposal(prev => ({ ...prev, projectNotes: preConfiguredDevNote }));
    }
  }, [preSelectedService, preConfiguredDevNote]);

  if (!isOpen) return null;

  const toggleService = (id: ServiceId) => {
    if (proposal.services.includes(id)) {
      if (proposal.services.length > 1) {
        setProposal({ ...proposal, services: proposal.services.filter(s => s !== id) });
      }
    } else {
      setProposal({ ...proposal, services: [...proposal.services, id] });
    }
  };

  const handleFinishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 text-slate-100 relative shadow-2xl my-6">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Userpath • حاسبة ومولد التكاليف ونطاق المشروع
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
              {submitted ? 'تم إرسال طلب عرض السعر بنجاح!' : `الخطوة ${step} من 3: تحديد متطلباتك`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            id="btn-close-estimator-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* STEP 1: Select Services & Scope */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white block">
                    1. اختر الخدمات المطلوبة لمشروعك (يمكن اختيار أكثر من خدمة):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'ux-ui' as ServiceId, label: 'تصميم الواجهات والتجربة (UX/UI)' },
                      { id: 'design-systems' as ServiceId, label: 'أنظمة التصميم (Design Systems)' },
                      { id: 'ux-writing' as ServiceId, label: 'كتابة تجربة المستخدم (UX Writing)' },
                      { id: 'app-dev' as ServiceId, label: 'موارد وتطوير التطبيقات (App Dev)' },
                      { id: 'training' as ServiceId, label: 'الأكاديمية والتدريب (Training)' },
                    ].map((s) => {
                      const isSelected = proposal.services.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => toggleService(s.id)}
                          className={`p-3.5 rounded-2xl border text-right text-xs font-medium transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-orange-600/20 border-orange-500 text-white font-bold'
                              : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span>{s.label}</span>
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-orange-600 border-orange-500 text-white' : 'border-slate-700'
                          }`}>
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white block">
                    2. مرحلة ونوع المشروع:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['تأسيس جديد', 'إعادة تصميم وتحسين', 'توسعة فريق (Augmentation)', 'تدريب طاقم العمل'].map((sc) => (
                      <button
                        key={sc}
                        type="button"
                        onClick={() => setProposal({ ...proposal, projectScope: sc as any })}
                        className={`p-3 rounded-xl border text-xs text-center font-medium transition-all ${
                          proposal.projectScope === sc
                            ? 'bg-orange-600 text-white border-orange-500 font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {sc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 flex items-center gap-2"
                  >
                    <span>المتابعة للجدول الزمني والميزانية</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Timeline & Budget */}
            {step === 2 && (
              <div className="space-y-5 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white block">
                    1. الجدول الزمني المستهدف للإنجاز:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['1 - 2 شهر', '3 - 6 أشهر', 'عقد مستمر / سنوي'].map((tm) => (
                      <button
                        key={tm}
                        type="button"
                        onClick={() => setProposal({ ...proposal, timeline: tm as any })}
                        className={`p-3 rounded-xl border text-xs text-center font-medium transition-all ${
                          proposal.timeline === tm
                            ? 'bg-orange-600 text-white border-orange-500 font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {tm}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white block">
                    2. الميزانية التقديرية المرصودة:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      '15,000 - 30,000 ر.س',
                      '30,000 - 60,000 ر.س',
                      '60,000 - 120,000 ر.س',
                      '120,000+ ر.س (مشاريع مؤسسية)'
                    ].map((bg) => (
                      <button
                        key={bg}
                        type="button"
                        onClick={() => setProposal({ ...proposal, budgetRange: bg })}
                        className={`p-3 rounded-xl border text-xs text-center font-medium transition-all ${
                          proposal.budgetRange === bg
                            ? 'bg-orange-600 text-white border-orange-500 font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {bg}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white block">
                    تفاصيل إضافية عن المشروع أو التطبيق:
                  </label>
                  <textarea
                    rows={3}
                    value={proposal.projectNotes}
                    onChange={(e) => setProposal({ ...proposal, projectNotes: e.target.value })}
                    placeholder="اكتب باختصار هدف المشروع، التحديات الحالية، أو التقنيات المفضلة..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                  >
                    السابق
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 flex items-center gap-2"
                  >
                    <span>المتابعة لمعلومات التواصل والتأكيد</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact & Submit */}
            {step === 3 && (
              <form onSubmit={handleFinishSubmit} className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-orange-400" />
                      الاسم الكريم:
                    </label>
                    <input
                      type="text"
                      required
                      value={proposal.clientName}
                      onChange={(e) => setProposal({ ...proposal, clientName: e.target.value })}
                      placeholder="مثال: صالح العبدالله"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-orange-400" />
                      اسم الشركة / الجهة:
                    </label>
                    <input
                      type="text"
                      required
                      value={proposal.clientCompany}
                      onChange={(e) => setProposal({ ...proposal, clientCompany: e.target.value })}
                      placeholder="مثال: شركة حلول التقنية"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-orange-400" />
                      البريد الإلكتروني:
                    </label>
                    <input
                      type="email"
                      required
                      value={proposal.clientEmail}
                      onChange={(e) => setProposal({ ...proposal, clientEmail: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-orange-400" />
                      رقم الجوال / الواتساب:
                    </label>
                    <input
                      type="tel"
                      required
                      value={proposal.clientPhone}
                      onChange={(e) => setProposal({ ...proposal, clientPhone: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <strong className="text-white block font-bold">ملخص العرض المطلوب:</strong>
                  <div className="text-slate-300 space-y-1">
                    <p>• الخدمات: {proposal.services.join(' + ')}</p>
                    <p>• النطاق والجدول: {proposal.projectScope} ({proposal.timeline})</p>
                    <p>• الميزانية التقديرية: {proposal.budgetRange}</p>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                  >
                    السابق
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الطلب وحجز الاستشارة المباشرة</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* Submitted State Confirmation */
          <div className="space-y-6 text-center py-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white">
                شُكراً لك {proposal.clientName}!
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                تم استلام كافة تفاصيل طلبك لشركة <strong className="text-white">{proposal.clientCompany}</strong>. سيتواصل معك أحد مستشاري استوديو <strong className="text-orange-400">Userpath</strong> خلال أقل من 24 ساعة لتقديم مقترح العمل التفصيلي والجدول الزمني.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 max-w-md mx-auto text-right space-y-1">
              <span className="text-slate-400 font-bold block mb-1">البيانات التي تم استلامها:</span>
              <p>الخدمات المختارة: {proposal.services.join('، ')}</p>
              <p>رقم الجوال: {proposal.clientPhone}</p>
              <p>البريد: {proposal.clientEmail}</p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-8 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30"
            >
              العودة إلى الصفحة الرئيسية
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
