import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Building2, 
  Award, 
  Briefcase, 
  MapPin, 
  Menu, 
  X, 
  ArrowUpRight, 
  Phone, 
  Mail 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/cantonData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'accreditations', 'footprint'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Notice: 'Services' swapped before 'Accreditations' as requested
  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Home },
    { label: 'About Us', href: '#about', id: 'about', icon: Building2 },
    { label: 'Services', href: '#services', id: 'services', icon: Briefcase },
    { label: 'Accreditations', href: '#accreditations', id: 'accreditations', icon: Award },
    { label: 'Footprint', href: '#footprint', id: 'footprint', icon: MapPin },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white border-b ${
        isScrolled
          ? 'shadow-md border-slate-200/90'
          : 'border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Zone: Full Logo Without Borders or Duplicate Text */}
          <a
            href="#home"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] py-1"
            aria-label="Canton Investments Homepage"
          >
            <img
              src={COMPANY_INFO.logoUrl}
              alt="Canton Investments"
              className="h-14 sm:h-16 md:h-18 max-h-[72px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<span class="font-extrabold text-[#800020] text-2xl font-heading tracking-tight">CANTON</span>';
                }
              }}
            />
          </a>

          {/* Center: Navigation Links with Icons */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative py-1.5 px-2 flex items-center gap-1.5 rounded-md hover:bg-amber-50/60 ${
                    isActive
                      ? 'text-[#800020]'
                      : 'text-slate-700 hover:text-[#800020]'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-[#800020]' : 'text-amber-600 group-hover:text-[#800020]'
                  }`} />
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Zone: Contact Us Button + Menu Drawer Icon */}
          <div className="flex items-center gap-3">
            {/* Contact Us button */}
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#D4AF37] to-[#E5A920] hover:from-[#c69c28] hover:to-[#d4af37] text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap active:scale-95"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Menu Icon (toggles quick drawer navigation) */}
            <button
              onClick={() => setMenuDrawerOpen(!menuDrawerOpen)}
              className="p-2.5 text-slate-800 hover:text-white hover:bg-[#800020] bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
              aria-label="Toggle Quick Navigation Menu"
              title="Menu"
            >
              {menuDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Menu Drawer with Menu Icons */}
      {menuDrawerOpen && (
        <div className="bg-white border-t border-slate-200 shadow-xl animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Navigation Links Column */}
              <div className="md:col-span-6 space-y-2">
                <div className="text-xs font-bold text-[#800020] uppercase tracking-wider mb-3">
                  Direct Navigation
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={() => setMenuDrawerOpen(false)}
                        className={`px-3 py-2.5 rounded text-sm font-semibold transition-colors flex items-center justify-between ${
                          activeSection === link.id
                            ? 'bg-amber-50 text-[#800020] border-l-2 border-[#D4AF37]'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-amber-700" />
                          <span>{link.label}</span>
                        </span>
                        <span className="text-slate-400 text-xs">→</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Branch & Direct Telephones */}
              <div className="md:col-span-6 bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Polokwane Central Directorate &amp; Regional Hubs
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="font-semibold">Main Office:</span>
                    <a href="tel:+27152911573" className="hover:text-[#800020] underline">
                      +27 15 291 1573
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="font-semibold">Email:</span>
                    <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-[#800020] underline">
                      {COMPANY_INFO.primaryEmail}
                    </a>
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#800020] shrink-0 mt-0.5" />
                    <span>74A Plein Street (cnr Jorissen St), Polokwane, 0699, Limpopo</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setMenuDrawerOpen(false)}
                    className="w-full bg-[#800020] hover:bg-[#68001a] text-white font-bold text-xs py-2.5 px-4 rounded text-center block shadow transition-colors"
                  >
                    Send Direct Inquiry to Directorate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
