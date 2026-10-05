import React from 'react';
import { Phone, Mail, MapPin, Award, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, BRANCH_OFFICES } from '../data/cantonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#800020] text-amber-100 text-xs border-t border-rose-950 shadow-inner">
      {/* Top Footer Banner in Deep Burgundy */}
      <div className="bg-[#590016] border-b border-rose-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-white p-1 flex items-center justify-center shrink-0 border border-amber-400 shadow-xs">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Canton Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<span class="font-bold text-[#800020] text-lg">C</span>';
                    }
                  }}
                />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base font-heading tracking-tight">
                  {COMPANY_INFO.legalName}
                </h3>
                <p className="text-[#D4AF37] text-xs font-bold">
                  {COMPANY_INFO.slogan}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="text-slate-950 font-extrabold bg-[#D4AF37] px-3 py-1 rounded shadow-2xs">
                100% Black-Owned · Level 3 B-BBEE
              </span>
              <span className="text-amber-200 font-mono font-bold">
                Reg: {COMPANY_INFO.registrationNumber}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Overview */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[#D4AF37] font-extrabold text-sm uppercase tracking-wider font-heading">
              Canton Development Institute
            </h4>
            <p className="text-amber-100/90 leading-relaxed text-xs font-normal">
              Trading as Canton Trading 273 and Canton Development Institute. Providing SETA and QCTO accredited occupational qualifications, artisan trade center training, and PFMA/MFMA corporate governance consulting across South Africa since 2010.
            </p>
            <div className="pt-1 text-xs text-amber-200/90 space-y-0.5">
              <div><span className="font-bold text-white">CETA Accreditation:</span> 4R45087</div>
              <div><span className="font-bold text-white">LGSETA Accreditation:</span> LGRS-100-130319</div>
              <div><span className="font-bold text-white">MICTSETA Accreditation:</span> LPA/00/2017/09/0009</div>
              <div><span className="font-bold text-white">QCTO Trade Center:</span> Bricklayer, Plumber, Carpenter, Tiler, Plasterer</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-[#D4AF37] font-extrabold text-sm uppercase tracking-wider font-heading">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li>
                <a href="#home" className="text-amber-100 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-amber-100 hover:text-white transition-colors">About Us &amp; Governance</a>
              </li>
              <li>
                <a href="#services" className="text-amber-100 hover:text-white transition-colors">Comprehensive Solutions</a>
              </li>
              <li>
                <a href="#accreditations" className="text-amber-100 hover:text-white transition-colors">Accreditations &amp; Trades</a>
              </li>
              <li>
                <a href="#footprint" className="text-amber-100 hover:text-white transition-colors">Branch Footprint</a>
              </li>
              <li>
                <a href="#contact" className="text-amber-100 hover:text-white transition-colors">Contact Corporate</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Branch Locations List */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-[#D4AF37] font-extrabold text-sm uppercase tracking-wider font-heading">
              Branch Locations
            </h4>
            <div className="space-y-2.5 text-xs">
              {BRANCH_OFFICES.map((b) => (
                <div key={b.id} className="border-l-2 border-[#D4AF37] pl-2.5">
                  <div className="text-white font-bold">
                    {b.city} ({b.isHeadOffice ? 'Head Office' : b.province})
                  </div>
                  <div className="text-amber-100/80 mt-0.5 text-[11px] leading-tight">
                    {b.streetAddress}
                  </div>
                  <div className="text-[#D4AF37] mt-0.5 font-mono text-[11px] font-bold">
                    {b.telephones[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-[#D4AF37] font-extrabold text-sm uppercase tracking-wider font-heading">
              Direct Inquiries
            </h4>
            <div className="space-y-1.5 text-xs font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="tel:+27152911573" className="text-amber-100 hover:text-white transition-colors">
                  +27 15 291 1573
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-amber-100 hover:text-white transition-colors">
                  {COMPANY_INFO.primaryEmail}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-slate-950 bg-[#590016] hover:bg-[#D4AF37] border border-rose-800 px-3 py-1.5 rounded transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice Bar with Zamile.com credits */}
        <div className="mt-8 pt-4 border-t border-rose-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200/90 font-medium">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. | Reg: {COMPANY_INFO.registrationNumber} | BEE Level 3.
          </div>

          {/* Designed by Zamile.com Credit */}
          <div className="flex items-center gap-1.5 font-bold text-slate-950 bg-amber-100 px-2.5 py-1 rounded shadow-2xs border border-amber-300">
            <span>Designed By:</span>
            <a
              href="https://www.zamile.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#800020] hover:text-black underline font-extrabold transition-colors"
            >
              Zamile.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-semibold text-amber-200/80">
            <a href="#about" className="hover:text-white transition-colors">Statutory Compliance</a>
            <span>·</span>
            <a href="#accreditations" className="hover:text-white transition-colors">ETQA Accreditation</a>
            <span>·</span>
            <a href="#contact" className="hover:text-white transition-colors">Privacy &amp; POPIA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
