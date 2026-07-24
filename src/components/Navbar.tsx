import React, { useState } from 'react';
import { Layers, Menu, X, Sparkles, ArrowLeft, PhoneCall, GraduationCap, Code2, Layout, Feather } from 'lucide-react';

interface NavbarProps {
  onOpenProposal: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProposal, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'services', label: 'خدماتنا', icon: Layout },
    { id: 'ux-writing-demo', label: 'كتابة تجربة المستخدم', icon: Feather },
    { id: 'ds-preview', label: 'أنظمة التصميم', icon: Layers },
    { id: 'dev-calculator', label: 'موارد التطوير', icon: Code2 },
    { id: 'training', label: 'الأكاديمية والتدريب', icon: GraduationCap },
    { id: 'case-studies', label: 'معرض الأعمال', icon: Sparkles },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Brand Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo"
        >
          <div className="w-11 h-11 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/30 group-hover:bg-orange-500 transition-colors">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-2xl tracking-tight text-orange-500 font-sans">
                userpath
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">UX/UI & Systems Studio</p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-800/60 p-1.5 rounded-full border border-slate-700/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
                id={`nav-link-${item.id}`}
              >
                <Icon className="w-4 h-4 opacity-80" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenProposal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            id="btn-get-proposal"
          >
            <Sparkles className="w-4 h-4" />
            <span>طلب عرض سعر</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenProposal}
            className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold flex items-center gap-1"
            id="btn-mobile-proposal-quick"
          >
            <span>عرض سعر</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white"
            aria-label="القائمة"
            id="btn-toggle-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-200 hover:bg-slate-800 text-right text-sm font-medium transition-colors"
                id={`mobile-nav-${item.id}`}
              >
                <div className="p-2 rounded-lg bg-slate-800 text-orange-400">
                  <Icon className="w-5 h-5" />
                </div>
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-center text-sm shadow-md shadow-orange-600/30 flex items-center justify-center gap-2"
              id="mobile-drawer-proposal-btn"
            >
              <Sparkles className="w-4 h-4" />
              <span>احسب تكلفة ونطاق مشروعك</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
