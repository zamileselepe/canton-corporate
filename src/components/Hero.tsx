import React from 'react';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/cantonData';

interface HeroProps {
  onOpenRfq: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRfq }) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#400010] via-[#75001E] to-[#B88E1F] text-white overflow-hidden py-[30px] border-b border-amber-600/40 shadow-inner"
    >
      {/* Background Graphic & Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D4AF37] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#400010] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Regulatory Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold">
              <span className="flex items-center gap-1.5 text-slate-950 bg-amber-300 border border-amber-400 px-2.5 py-0.5 rounded shadow-2xs font-bold uppercase tracking-wide">
                <Award className="w-3.5 h-3.5 text-[#800020]" />
                {COMPANY_INFO.legalName}
              </span>
              <span className="text-amber-300">·</span>
              <span className="text-white font-bold">Canton Development Institute</span>
              <span className="text-amber-300">·</span>
              <span className="bg-[#D4AF37] text-slate-950 px-2 py-0.5 rounded text-[11px] font-extrabold tracking-wide">
                B-BBEE Level 3
              </span>
            </div>

            {/* Headline with metallic gold emphasis */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold font-heading text-white tracking-tight leading-[1.15] text-balance">
              Igniting Empowerment Through{' '}
              <span className="text-[#F5E6BE] drop-shadow-sm underline decoration-[#D4AF37] decoration-4 underline-offset-4">
                Skills Development
              </span>{' '}
              &amp; Corporate Governance
            </h1>

            {/* Slogan & Subheadline */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-amber-300 font-extrabold border-l-3 border-[#D4AF37] pl-3 py-0.5">
                {COMPANY_INFO.slogan}
              </p>
              <p className="text-sm sm:text-base text-amber-50/90 leading-relaxed font-sans font-medium max-w-2xl">
                100% Black-Owned BEE Level 3 Institute providing SETA &amp; QCTO accredited artisan training, skills project management, and strategic corporate consulting across South Africa.
              </p>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-2 border-t border-rose-300/20">
              <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-1.5">
                Official Institutional Accreditations:
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-white font-semibold">
                <span className="flex items-center gap-1 bg-black/25 px-2 py-0.5 rounded border border-amber-400/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" /> 100% Black Owned
                </span>
                <span className="flex items-center gap-1 bg-black/25 px-2 py-0.5 rounded border border-amber-400/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" /> BEE Level 3
                </span>
                <span className="bg-black/25 px-2 py-0.5 rounded border border-amber-400/40" title="Accreditation 4R45087">
                  CETA (4R45087)
                </span>
                <span className="bg-black/25 px-2 py-0.5 rounded border border-amber-400/40">
                  QCTO Artisan Center
                </span>
                <span className="bg-black/25 px-2 py-0.5 rounded border border-amber-400/40" title="Accreditation LGRS-100-130319">
                  LGSETA (LGRS-100-130319)
                </span>
                <span className="bg-black/25 px-2 py-0.5 rounded border border-amber-400/40" title="Accreditation LPA/00/2017/09/0009">
                  MICTSETA (LPA/00/2017/09/0009)
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c69c28] text-slate-950 font-bold px-6 py-3 rounded text-sm sm:text-base shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer text-center"
              >
                <span>Explore Comprehensive Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-900 text-white font-bold px-6 py-3 rounded text-sm sm:text-base border border-amber-400/40 transition-all duration-200 cursor-pointer text-center"
              >
                <span>Contact Us</span>
                <span className="text-amber-300">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual with cantonslide.jpg image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-amber-300/80 shadow-2xl bg-slate-900 group">
              <img
                src="https://cantoncorporate.co.za/img/cantonslide.jpg"
                alt="Canton Development Institute Corporate Slide"
                className="w-full h-72 sm:h-84 lg:h-92 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = '/src/assets/images/artisan_trade_workshop_1791105107409.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="inline-block bg-[#800020] text-amber-200 font-bold text-[10px] px-2.5 py-0.5 rounded tracking-wide mb-1 border border-amber-500/50">
                  Canton Development Institute
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                  Empowerment Through Quality &amp; Impact
                </h3>
                <p className="text-xs text-amber-100/90 mt-0.5 line-clamp-2">
                  SETA &amp; QCTO accredited practical artisan workshops, learnerships, and municipal governance.
                </p>
              </div>
            </div>

            {/* Quick Key Stat Strip Floating Beneath in Rich Gold/Burgundy Contrast */}
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-950/85 border border-amber-500/50 p-2.5 rounded-lg shadow-md backdrop-blur-xs">
              <div className="text-center p-1.5 border-r border-amber-500/30">
                <div className="text-xl font-extrabold font-heading text-[#D4AF37] tabular-nums">14+</div>
                <div className="text-[10px] text-amber-100 font-bold">Years Active</div>
              </div>
              <div className="text-center p-1.5 border-r border-amber-500/30">
                <div className="text-xl font-extrabold font-heading text-[#D4AF37] tabular-nums">3,800+</div>
                <div className="text-[10px] text-amber-100 font-bold">Artisans Trained</div>
              </div>
              <div className="text-center p-1.5 border-r border-amber-500/30">
                <div className="text-xl font-extrabold font-heading text-[#D4AF37] tabular-nums">98.4%</div>
                <div className="text-[10px] text-amber-100 font-bold">Pass Rate</div>
              </div>
              <div className="text-center p-1.5">
                <div className="text-xl font-extrabold font-heading text-[#D4AF37] tabular-nums">3</div>
                <div className="text-[10px] text-amber-100 font-bold">Provincial Hubs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
