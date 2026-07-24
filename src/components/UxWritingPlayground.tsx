import React, { useState } from 'react';
import { UX_WRITING_EXAMPLES } from '../data/servicesData';
import { Feather, Sparkles, ArrowRightLeft, Check, AlertTriangle, Lightbulb, RefreshCw, MessageSquare } from 'lucide-react';

export const UxWritingPlayground: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [userDraftText, setUserDraftText] = useState<string>('');
  const [customWritingResult, setCustomWritingResult] = useState<{
    refined: string;
    tone: string;
    tip: string;
  } | null>(null);

  const categories = ['الكل', 'أخطاء وحالات تنبيه', 'زر الاتخاذ (CTA)', 'إشعارات فارغة (Empty States)'];

  const filteredExamples = selectedCategory === 'الكل'
    ? UX_WRITING_EXAMPLES
    : UX_WRITING_EXAMPLES.filter(ex => ex.category === selectedCategory);

  const handleRefineUserDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userDraftText.trim()) return;

    // Smart heuristic mock for UX Writing refinement
    const text = userDraftText.trim();
    let refined = '';
    let tone = 'مباشر وداعم';
    let tip = 'التركيز على إعطاء حل فوراً بدلاً من الاكتفاء بوصف الخطأ.';

    if (text.includes('خطأ') || text.includes('فشل') || text.includes('تعذر')) {
      refined = `تعذر إتمام الإجراء حالياً. يرجى إعادة المحاولة أو التحقق من الاتصال بالإنترنت.`;
      tone = 'مطمئن وإرشادي';
      tip = 'تم تجنب إخافة المستخدم وتحويل العبارة الجافة إلى خطوة إرشادية بسيطة.';
    } else if (text.includes('اضغط') || text.includes('ارسال') || text.includes('متابعة')) {
      refined = `تأكيد واستمرار التجربة (بدون أي رسوم إضافية)`;
      tone = 'مستحث على الاتخاذ (Actionable)';
      tip = 'إزالة التردد والخوف وتوضيح القيمة الحقيقية وراء النقر على الزر.';
    } else if (text.includes('لا يوجد') || text.includes('فارغ')) {
      refined = `لا توجد عناصر حالياً. يمكنك إضافة أول عنصر بضغطة زر أو تصفح الاقتراحات الشائعة.`;
      tone = 'توجيه محفز';
      tip = 'تحويل الشاشة الفارغة إلى دعوة للعمل تفاعلية بدلاً من مساحة الموت.';
    } else {
      refined = `${text} — [صياغة مُطوّرة]: نص عربي مبسط، واصل، وواضح يزيل اللبس ويضمن انسيابية الحركة.`;
      tone = 'عربي سلس ومحدد';
      tip = 'استبدال الكلمات التقنية المعقدة بمصطلحات يفهمها المستخدم اليومي مباشرة.';
    }

    setCustomWritingResult({ refined, tone, tip });
  };

  return (
    <section id="ux-writing-demo" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Feather className="w-4 h-4" />
              <span>مختبر كتابة تجربة المستخدم (UX Writing Lab)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              كيف تُحوّل النصوص البسيطة الأرقام والمبيعات؟
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              الكتابة ليست مجرد ملء للشاشات، بل هي الدليل اللفظي الذي يقود العميل داخل التطبيق. شاهد الفرق بين النصوص التقليدية ونصوص UX المحترفة.
            </p>
          </div>

          {/* Category Selector */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
                id={`cat-uxwriting-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Examples Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {filteredExamples.map((ex) => (
            <div
              key={ex.id}
              className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-orange-500/40 transition-all space-y-6 relative overflow-hidden shadow-xl"
              id={`ux-example-${ex.id}`}
            >
              {/* Context Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                  <h3 className="text-sm font-bold text-white">{ex.context}</h3>
                </div>
                <span className="text-[11px] font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                  {ex.category}
                </span>
              </div>

              {/* Before vs After Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Before (Weak Copy) */}
                <div className="bg-rose-950/20 border border-rose-500/20 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>النص التقليدي (قبل):</span>
                  </div>
                  <p className="text-xs text-rose-200 font-medium bg-rose-950/40 p-3 rounded-xl border border-rose-500/30 leading-relaxed">
                    "{ex.before.text}"
                  </p>
                  <p className="text-[11px] text-rose-300/80 leading-relaxed">
                    ⚠ {ex.before.reason}
                  </p>
                </div>

                {/* After (Refined UX Copy) */}
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                    <Check className="w-4 h-4" />
                    <span>نص UX المُطوّر (بعد):</span>
                  </div>
                  <p className="text-xs text-emerald-100 font-bold bg-emerald-950/50 p-3 rounded-xl border border-emerald-500/40 leading-relaxed">
                    "{ex.after.text}"
                  </p>
                  <p className="text-[11px] text-emerald-300 leading-relaxed font-medium">
                    ✦ {ex.after.benefit}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive UX Microcopy Tester Tool */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-orange-500/30 shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold flex items-center gap-1.5 w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                أداة تفاعلية مباشرة
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                أدخل نصاً من تطبيقك وقم بتجربة تحسينه فوراً:
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                اكتب أي زر، رسالة خطأ، أو نص عنوان تريد تطويره، وسيقوم النظام بتوليد صياغة احترافية قائمة على قواعد تجربة المستخدم.
              </p>
            </div>

            <form onSubmit={handleRefineUserDraft} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={userDraftText}
                  onChange={(e) => setUserDraftText(e.target.value)}
                  placeholder="مثال: حدث خطأ غير معروف حاول مرّة أخرى"
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  id="input-user-draft-microcopy"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 shrink-0"
                  id="btn-refine-microcopy"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>تطوير النص الآن</span>
                </button>
              </div>
            </form>

            {customWritingResult && (
              <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-3 animate-fade-in">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-bold border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>الصياغة المُقترحة لتجربة المستخدم:</span>
                  </div>
                  <span className="bg-slate-900 px-2.5 py-0.5 rounded text-slate-300 font-mono">
                    النبرة: {customWritingResult.tone}
                  </span>
                </div>
                <p className="text-sm font-bold text-emerald-200 leading-relaxed bg-emerald-950/30 p-3 rounded-xl border border-emerald-500/20">
                  "{customWritingResult.refined}"
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{customWritingResult.tip}</span>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
