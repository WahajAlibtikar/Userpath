import React from 'react';
import { Layers, Mail, Phone, MapPin, Sparkles, ArrowLeft, Heart } from 'lucide-react';

interface FooterProps {
  onOpenProposal: () => void;
  onSelectService: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposal, onSelectService }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Callout Banner */}
        <div className="bg-slate-900 p-8 rounded-3xl border border-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              هل أنت جاهز للارتقاء بتجربة منتجك وتطوير فريقك مع Userpath؟
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              احجز جلسة استشارية مجانية لمناقشة تصميم واجهاتك، أنظمة التصميم، أو احتياجات التطوير والتدريب.
            </p>
          </div>
          <button
            onClick={onOpenProposal}
            className="px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 shrink-0 flex items-center gap-2"
            id="footer-cta-proposal"
          >
            <Sparkles className="w-4 h-4" />
            <span>احسب تكلفة ونطاق مشروعك</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-orange-500 tracking-tight">
                userpath
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              استوديو Userpath متخصص في تصميم تجربة وواجهات المستخدم (UX/UI)، بناء أنظمة التصميم الشاملة، كتابة تجربة المستخدم، وتزويد الكفاءات البرمجية والتدريب المؤسسي.
            </p>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">خدماتنا الرئيسية</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => onSelectService('ux-ui')} className="hover:text-orange-400 transition-colors">
                  • تصميم الواجهات وتجربة المستخدم (UX/UI)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectService('design-systems')} className="hover:text-orange-400 transition-colors">
                  • أنظمة التصميم (Design Systems)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectService('ux-writing')} className="hover:text-orange-400 transition-colors">
                  • كتابة تجربة المستخدم (UX Writing)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectService('app-dev')} className="hover:text-orange-400 transition-colors">
                  • موارد وتطوير التطبيقات (App Dev)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectService('training')} className="hover:text-orange-400 transition-colors">
                  • الأكاديمية والتدريب (Training & Bootcamps)
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Tools Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">أدوات الاستوديو التفاعلية</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#ux-writing-demo" className="hover:text-orange-400 transition-colors">
                  • اختبر كتابة تجربة المستخدم (UX Writing Lab)
                </a>
              </li>
              <li>
                <a href="#ds-preview" className="hover:text-orange-400 transition-colors">
                  • معاينة متغيرات أنظمة التصميم (Design Tokens)
                </a>
              </li>
              <li>
                <a href="#dev-calculator" className="hover:text-orange-400 transition-colors">
                  • حاسبة وتشكيل فريق التطوير (Dev Calculator)
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-orange-400 transition-colors">
                  • معرض الأعمال وقصص النجاح
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">التواصل المباشر</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>hello@userpath.sa</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 Userpath. كافة الحقوق محفوظة.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>صُنع بشغف وأعلى معايير الإتقان مع Userpath</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
