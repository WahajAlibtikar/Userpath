import React, { useState } from 'react';
import { Layers, Copy, Check, Code, Palette, Smartphone, Sliders, Eye, FileJson } from 'lucide-react';

export const DesignSystemViewer: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<'orange' | 'emerald' | 'amber'>('orange');
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'tokens'>('preview');
  const [copied, setCopied] = useState(false);

  const themeTokens = {
    orange: {
      name: 'Userpath Solid Orange (البرتقالي الرسمي)',
      primary: '#f97316',
      primaryBg: 'bg-orange-600',
      primaryHover: 'hover:bg-orange-500',
      textAccent: 'text-orange-400',
      borderAccent: 'border-orange-500/40',
      badgeBg: 'bg-orange-500/10 text-orange-300 border-orange-500/30'
    },
    emerald: {
      name: 'Emerald Health & FinTech (الزمردي المالي)',
      primary: '#10b981',
      primaryBg: 'bg-emerald-600',
      primaryHover: 'hover:bg-emerald-500',
      textAccent: 'text-emerald-400',
      borderAccent: 'border-emerald-500/40',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
    },
    amber: {
      name: 'Amber Luxe (العنبري الفاخر)',
      primary: '#f59e0b',
      primaryBg: 'bg-amber-600',
      primaryHover: 'hover:bg-amber-500',
      textAccent: 'text-amber-400',
      borderAccent: 'border-amber-500/40',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30'
    }
  };

  const currentToken = themeTokens[selectedTheme];

  const reactCodeSnippet = `// React Design System Component Output
import { Button, Badge, Input } from '@studio/ui-system';

export function CheckoutCard() {
  return (
    <div className="p-6 rounded-2xl bg-slate-900 border ${currentToken.borderAccent}">
      <Badge variant="${selectedTheme}">متاح للتسليم الفوري</Badge>
      <h3 className="text-lg font-bold text-white mt-2">تأكيد عملية الحجز</h3>
      <Input label="اسم العميل" placeholder="أدخل الاسم الثلاثي" />
      <Button variant="primary" className="${currentToken.primaryBg}">
        متابعة وتأكيد الطلب
      </Button>
    </div>
  );
}`;

  const figmaTokensJson = JSON.stringify({
    color: {
      brand: {
        primary: { value: currentToken.primary, type: "color" },
        surface: { value: "#0f172a", type: "color" }
      }
    },
    radii: {
      lg: { value: "16px", type: "borderRadius" }
    },
    spacing: {
      md: { value: "16px", type: "spacing" }
    }
  }, null, 2);

  const handleCopyCode = () => {
    const textToCopy = activeTab === 'tokens' ? figmaTokensJson : reactCodeSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ds-preview" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>نظام تصميم حي وتفاعلي (Design System Showcase)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            اربط ملفات Figma بالكود مباشرة عبر متغيرات موحدة
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            عند اختيارك لخدمة نظام التصميم مع Userpath، نضمن لك اتساقاً كاملاً بين المصممين والمطورين، حيث تتزامن الألوان والخطوط والأزرار آلياً.
          </p>
        </div>

        {/* Interactive Studio Box */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Theme Picker */}
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-orange-400" />
              <span className="text-xs sm:text-sm font-semibold text-slate-300">ثيم نظام التصميم:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedTheme('orange')}
                  className={`w-7 h-7 rounded-full bg-orange-600 transition-transform ${selectedTheme === 'orange' ? 'ring-2 ring-white scale-110' : 'opacity-70'}`}
                  title="Userpath Orange"
                />
                <button
                  onClick={() => setSelectedTheme('emerald')}
                  className={`w-7 h-7 rounded-full bg-emerald-600 transition-transform ${selectedTheme === 'emerald' ? 'ring-2 ring-white scale-110' : 'opacity-70'}`}
                  title="Emerald"
                />
                <button
                  onClick={() => setSelectedTheme('amber')}
                  className={`w-7 h-7 rounded-full bg-amber-600 transition-transform ${selectedTheme === 'amber' ? 'ring-2 ring-white scale-110' : 'opacity-70'}`}
                  title="Amber"
                />
              </div>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === 'preview' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                id="ds-tab-preview"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>معاينة الواجهة</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === 'code' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                id="ds-tab-code"
              >
                <Code className="w-3.5 h-3.5" />
                <span>كود React</span>
              </button>
              <button
                onClick={() => setActiveTab('tokens')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === 'tokens' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                id="ds-tab-tokens"
              >
                <FileJson className="w-3.5 h-3.5" />
                <span>رموز Figma Tokens</span>
              </button>
            </div>

          </div>

          {/* Main Area Content */}
          <div className="p-6 sm:p-10">
            {activeTab === 'preview' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    الحالة الحالية: <span className={currentToken.textAccent}>{currentToken.name}</span>
                  </span>
                  <span className="text-xs bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-400">
                    Auto-Layout 5.0 + Tailwind v4
                  </span>
                </div>

                {/* Component Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Card 1: Buttons & Badges */}
                  <div className={`p-6 rounded-2xl bg-slate-900 border ${currentToken.borderAccent} space-y-4`}>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${currentToken.badgeBg}`}>
                      زر ووسام تفاعلي
                    </span>
                    <h4 className="text-base font-bold text-white">الأزرار الأساسية (Buttons)</h4>
                    <p className="text-xs text-slate-400">تضمن حالات Hover, Active, Disabled وتجاوب الشاشات.</p>
                    <div className="space-y-2 pt-2">
                      <button className={`w-full py-2.5 rounded-xl ${currentToken.primaryBg} ${currentToken.primaryHover} text-white font-bold text-xs shadow-md transition-all`}>
                        زر اتخاذ الإجراء الرئيسي
                      </button>
                      <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700">
                        زر فرعي شفاف
                      </button>
                    </div>
                  </div>

                  {/* Card 2: Form Controls */}
                  <div className={`p-6 rounded-2xl bg-slate-900 border ${currentToken.borderAccent} space-y-4`}>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${currentToken.badgeBg}`}>
                      حقول الإدخال (Inputs)
                    </span>
                    <h4 className="text-base font-bold text-white">حقول البيانات والإدخال</h4>
                    <div className="space-y-3 pt-1">
                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">اسم المؤسسة:</label>
                        <input
                          type="text"
                          readOnly
                          value="شركة التقنية المتقدمة"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-slate-300 font-medium">التفعيل الآلي للخدمة</span>
                        <div className={`w-10 h-6 rounded-full ${currentToken.primaryBg} p-1 flex items-center justify-end`}>
                          <div className="w-4 h-4 rounded-full bg-white shadow" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Metrics & Stat Badge */}
                  <div className={`p-6 rounded-2xl bg-slate-900 border ${currentToken.borderAccent} space-y-4`}>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${currentToken.badgeBg}`}>
                      بطاقات البيانات (Metric Cards)
                    </span>
                    <h4 className="text-base font-bold text-white">سرعة إنجاز الفريق</h4>
                    <div className="text-3xl font-black text-white font-mono">
                      +60%
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      زيادة في سرعة تطوير البرمجيات نتيجة الاعتماد على مكونات جاهزة وموثقة.
                    </p>
                  </div>

                </div>
              </div>
            )}

            {(activeTab === 'code' || activeTab === 'tokens') && (
              <div className="relative">
                <button
                  onClick={handleCopyCode}
                  className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'تم النسخ!' : 'نسخ الكود'}</span>
                </button>
                <pre className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-orange-300 overflow-x-auto dir-ltr text-left leading-relaxed">
                  {activeTab === 'tokens' ? figmaTokensJson : reactCodeSnippet}
                </pre>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
