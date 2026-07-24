import React, { useState } from 'react';
import { ChevronDown, MessageSquare, HelpCircle, Star, Quote } from 'lucide-react';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const testimonials = [
    {
      quote: 'قام الاستوديو بتأسيس نظام تصميم متكامل لخدماتنا الصحية وتوحيد الكود في React. تضاعفت سرعة تسليم الشاشات وانحسرت أخطاء الواجهة بنسبة تتجاوز 70%.',
      author: 'د. خالد المنصور',
      role: 'الرئيس التنفيذي للتكنولوجيا',
      company: 'مجموعة الميديكير الطبية'
    },
    {
      quote: 'ورشة عمل كتابة تجربة المستخدم التي قدموها لفريقنا أحدثت فارقاً كبيراً. أصبحت جميع رسائل الخطأ والتنبيهات في تطبيقنا واضحة ولطيفة ومفهومة للمستخدم المحلي.',
      author: 'سارة القحطاني',
      role: 'مديرة المنتج والواجهات',
      company: 'منصة سبل اللوجستية'
    },
    {
      quote: 'استعنا بـ 3 مهندسي Flutter و React للعمل كجزء مخصص من فريقنا لمدة 6 أشهر. احترافية عالية، كود نظيف جداً، والتزام تام بالمواعيد.',
      author: 'م. فهد السبيعي',
      role: 'رئيس قسم الهندسة البرمجية',
      company: 'أكاديمية التعليم الرقمي'
    }
  ];

  const faqs = [
    {
      q: 'ما هي طريقة التعاقد والبدء في مشروع جديد معك؟',
      a: 'نبدأ بجلسة اكتشاف مجانية مدتها 30 دقيقة لفهم نطاق العمل، ثم نرسل خطة تفصيلية تتضمن المخرجات المحددة (Deliverables)، الجدول الزمني، والتكلفة. نوقع اتفاقية عدم الإفصاح (NDA) لضمان سرية فكرتك وبياناتك.'
    },
    {
      q: 'ما هو الفرق بين تصميم UX/UI وبناء نظام التصميم (Design System)؟',
      a: 'تصميم UX/UI يركز على شاشات وتجربة منتج محدد. بينما نظام التصميم هو مكتبة مكونات بصرية وبرمجية موحدة تُبنى مرة واحدة لتخدم جميع شاشات ومنتجات الشركة المستقبلية بنفس الاتساق وبسرعة تطوير أعلى.'
    },
    {
      q: 'هل يمكنكم تزويدنا بمهندسين ومطورين للانضمام لفريقنا الحالي (Staff Augmentation)؟',
      a: 'نعم، نوفر مهندسي React, Flutter, Node.js و UI/UX للعمل المباشر داخل بيئة عملك (Jira, Slack, GitHub) بنظام الدوام الكامل أو بالساعات المرنة.'
    },
    {
      q: 'هل تقدمون برامج تدريبية مخصصة لفرق الشركات بدلاً من الأفراد؟',
      a: 'بالتأكيد. نقدم معسكرات وورش عمل مخصصة تُعقد داخل مقر شركتك أو عن بعد، وندرب طاقمك مباشرة على تحسين منتجاتكم الحالية وتأسيس أفضل الممارسات.'
    },
    {
      q: 'هل تُسلم ملفات Figma والسورس كود كاملاً في نهاية المشروع؟',
      a: 'نعم، كافة الملكية الفكرية، ملفات Figma الأصلية، مكتبات المكونات، وجميع السورس كود تُنقل ملكيتها لك بالكامل 100% دون أي رسوم مخفية.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Testimonials Block */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>آراء شركاء النجاح مع Userpath</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              ماذا يقول عملاؤنا ومتدربونا؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-950 p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between relative shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <strong className="text-sm font-bold text-white block">{t.author}</strong>
                    <span className="text-[11px] text-slate-400">{t.role} - {t.company}</span>
                  </div>
                  <Quote className="w-8 h-8 text-orange-500/20" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-8 pt-8 border-t border-slate-800">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>الأسئلة الشائعة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              إجابات مباشرة لأكثر استفسارات شركائنا
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-right font-bold text-sm text-white flex items-center justify-between gap-4 hover:text-orange-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-orange-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
