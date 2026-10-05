import React from 'react';
import { Phone, Mail, Award, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/cantonData';

export const TopUtilityBar: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Call to Action Strip in GOLD above the header */}
      <div className="bg-gradient-to-r from-[#E5BE4E] via-[#D4AF37] to-[#C49B24] text-slate-950 py-1.5 px-4 text-center border-b border-amber-500/80 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs font-bold tracking-wide">
          <span className="font-extrabold font-heading text-slate-950 uppercase tracking-wider">
            {COMPANY_INFO.legalName}
          </span>
          <span className="hidden sm:inline text-amber-900 font-extrabold">•</span>
          <span className="text-slate-900 font-semibold font-sans">
            {COMPANY_INFO.slogan}
          </span>
        </div>
      </div>

      {/* 2. Top Header Section with Contacts in BURGUNDY */}
      <div className="bg-[#800020] text-amber-100 text-xs border-b border-rose-950/60 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            {/* Left: Contact Phone Numbers & Email */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="tel:+27152911573" className="hover:text-[#D4AF37] transition-colors">
                  +27 15 291 1573
                </a>
              </div>

              <span className="hidden sm:inline text-rose-400/60">·</span>

              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.primaryEmail}`}
                  className="hover:text-[#D4AF37] transition-colors text-white font-medium"
                >
                  {COMPANY_INFO.primaryEmail}
                </a>
              </div>
            </div>

            {/* Right: Regulatory Badges & Quick Action */}
            <div className="flex items-center gap-3 text-[11px] tracking-wide">
              <span className="hidden md:inline-flex items-center gap-1.5 text-amber-300 font-bold bg-[#600018] px-2 py-0.5 rounded border border-rose-900/60">
                <Award className="w-3 h-3 text-[#D4AF37]" />
                100% Black-Owned · BEE Level 3
              </span>

              <span className="hidden xl:inline text-amber-200/80 font-mono">
                Reg: {COMPANY_INFO.registrationNumber}
              </span>

              <a
                href="#contact"
                className="text-[#D4AF37] hover:text-white font-bold flex items-center gap-1 transition-colors group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
