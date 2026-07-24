import React, { useState } from 'react';
import { Code2, Users, Clock, CheckCircle2, Sparkles, ArrowLeft, ShieldCheck, Zap } from 'lucide-react';

interface DevResourcesCalculatorProps {
  onOpenProposalWithDevConfig: (configSummary: string) => void;
}

export const DevResourcesCalculator: React.FC<DevResourcesCalculatorProps> = ({
  onOpenProposalWithDevConfig
}) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['react-senior', 'flutter-dev']);
  const [teamSize, setTeamSize] = useState<number>(2);
  const [durationMonths, setDurationMonths] = useState<number>(3);
  const [engagementType, setEngagementType] = useState<'dedicated' | 'project' | 'hourly'>('dedicated');

  const roleOptions = [
    { id: 'react-senior', name: 'مهندس واجهات أرقام (Senior React / Next.js)', rateMonthly: 18000 },
    { id: 'flutter-dev', name: 'مطور تطبيقات جوال (Flutter / React Native)', rateMonthly: 17000 },
    { id: 'node-backend', name: 'مهندس خلفية برمجية (Node.js / Express / Python)', rateMonthly: 17500 },
    { id: 'lead-designer', name: 'مصمم أنظمة وواجهات (Senior UI/UX Designer)', rateMonthly: 16000 },
    { id: 'qa-engineer', name: 'مهندس فحص وتأكيد الجودة (QA Automation)', rateMonthly: 13000 },
  ];

  const toggleRole = (id: string) => {
    if (selectedRoles.includes(id)) {
      if (selectedRoles.length > 1) {
        setSelectedRoles(selectedRoles.filter(r => r !== id));
      }
    } else {
      setSelectedRoles([...selectedRoles, id]);
    }
  };

  // Estimate calculations
  const totalMonthlyEst = selectedRoles.reduce((sum, roleId) => {
    const roleObj = roleOptions.find(r => r.id === roleId);
    return sum + (roleObj ? roleObj.rateMonthly : 15000);
  }, 0) * (teamSize > selectedRoles.length ? Math.ceil(teamSize / selectedRoles.length) : 1);

  const totalContractEst = totalMonthlyEst * durationMonths;

  const handleRequestDevTeam = () => {
    const roleNames = selectedRoles.map(id => roleOptions.find(r => r.id === id)?.name).join(' + ');
    const summaryStr = `فريق تطوير: ${teamSize} مهندسين (${roleNames}) لمدة ${durationMonths} أشهر - نظام: ${engagementType === 'dedicated' ? 'فريق مخصص براتب شهري' : engagementType === 'project' ? 'حسب تسليم المشروع' : 'بالساعات المرنة'}`;
    onOpenProposalWithDevConfig(summaryStr);
  };

  return (
    <section id="dev-calculator" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            <span>حاسبة موارد تطوير التطبيقات (Dev Staff Calculator)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            زوّد فريقك بمهندسين متخصصين جاهزين للانضمام الفوري
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            احسب تكلفة ونطاق توسعة فريقك البرمجي (Staff Augmentation). نوفر مطوري React, Flutter, Node و UI/UX للعمل كجزء لا يتجزأ من فريقك.
          </p>
        </div>

        {/* Calculator Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8 shadow-xl">
            
            {/* 1. Select Roles */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white flex items-center justify-between">
                <span>1. اختر المهارات والتخصصات المطلوبة:</span>
                <span className="text-xs font-normal text-slate-400">يمكنك اختيار أكثر من تخصص</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roleOptions.map((role) => {
                  const isChecked = selectedRoles.includes(role.id);
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => toggleRole(role.id)}
                      className={`p-3.5 rounded-2xl border text-right text-xs transition-all flex items-center justify-between gap-2 ${
                        isChecked
                          ? 'bg-orange-600/15 border-orange-500 text-white font-bold shadow-sm'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                      id={`role-btn-${role.id}`}
                    >
                      <span>{role.name}</span>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-orange-600 border-orange-500 text-white' : 'border-slate-700'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Team Size Slider */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-400" />
                  <span>2. عدد المهندسين المطلوبة (Team Size):</span>
                </label>
                <span className="text-sm font-mono font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  {teamSize} {teamSize === 1 ? 'مطور' : 'مطوّرين'}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={8}
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full accent-orange-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
                id="slider-team-size"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 مطور فردي</span>
                <span>4 مطورين (Pod)</span>
                <span>8 مطورين (توسعة كاملة)</span>
              </div>
            </div>

            {/* 3. Duration Slider */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>3. مدة التعاقد (Contract Duration):</span>
                </label>
                <span className="text-sm font-mono font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  {durationMonths} {durationMonths === 1 ? 'شهر' : 'أشهر'}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={12}
                value={durationMonths}
                onChange={(e) => setDurationMonths(parseInt(e.target.value))}
                className="w-full accent-orange-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
                id="slider-duration-months"
              />
            </div>

            {/* 4. Engagement Model */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <label className="text-sm font-bold text-white block">4. نموذج التعاقد:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setEngagementType('dedicated')}
                  className={`p-3 rounded-xl border text-center text-xs font-semibold whitespace-nowrap transition-all ${
                    engagementType === 'dedicated'
                      ? 'bg-orange-600 text-white border-orange-500'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                  id="model-dedicated"
                >
                  فريق مخصص (Dedicated)
                </button>
                <button
                  type="button"
                  onClick={() => setEngagementType('project')}
                  className={`p-3 rounded-xl border text-center text-xs font-semibold whitespace-nowrap transition-all ${
                    engagementType === 'project'
                      ? 'bg-orange-600 text-white border-orange-500'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                  id="model-project"
                >
                  حسب المشروع (Project)
                </button>
                <button
                  type="button"
                  onClick={() => setEngagementType('hourly')}
                  className={`p-3 rounded-xl border text-center text-xs font-semibold whitespace-nowrap transition-all ${
                    engagementType === 'hourly'
                      ? 'bg-orange-600 text-white border-orange-500'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                  id="model-hourly"
                >
                  بالساعة (Hourly)
                </button>
              </div>
            </div>

          </div>

          {/* Results & Summary Column */}
          <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-orange-500/30 space-y-6 shadow-2xl sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                ملخص تقدير الفريق
              </span>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20 font-bold">
                جاهزون للبدء خلال 48 ساعة
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 block">التجهيز المختار:</span>
                <p className="text-sm font-bold text-white">
                  {teamSize} مهندسين ({selectedRoles.length} مهارات رئيسية)
                </p>
                <p className="text-xs text-slate-400">
                  تغطية كاملة مع الالتزام بأفضل ممارسات الكود النظيف والتكامل المباشر مع Slack & Jira.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>التكلفة التقديرية الشهرية:</span>
                  <span className="text-base font-bold text-orange-400 font-mono">
                    ~ {totalMonthlyEst.toLocaleString()} ر.س / شهر
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-2">
                  <span>إجمالي العقد التقديري ({durationMonths} أشهر):</span>
                  <span className="text-lg font-black text-white font-mono">
                    ~ {totalContractEst.toLocaleString()} ر.س
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ضمان استبدال المطور بدون تكلفة إضافية</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>سرية بيانات وسورس كود مملوك لك 100% (NDA Signed)</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleRequestDevTeam}
              className="w-full py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 transition-all flex items-center justify-center gap-2"
              id="btn-request-calculated-dev-team"
            >
              <Sparkles className="w-4 h-4" />
              <span>طلب حجز وتزويد الفريق بهذا الإعداد</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
