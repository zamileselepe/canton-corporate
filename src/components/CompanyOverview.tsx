import React from 'react';
import { Target, Award, CheckCircle, Scale, Building2, ShieldCheck, Briefcase, FileCheck, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/cantonData';

export const CompanyOverview: React.FC = () => {
  return (
    <section id="about" className="py-[30px] bg-[#800020] text-white border-b border-rose-950/60 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <span className="w-6 h-0.5 bg-[#D4AF37]"></span>
            <span>Institutional Profile &amp; Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            The Institute of Choice for Human Capital &amp; Business Support
          </h2>
          <p className="mt-3 text-sm sm:text-base text-amber-100/90 leading-relaxed font-medium">
            Registered in 2010 (Reg: 2010/018143/07), <span className="font-bold text-white">Canton Investments (Pty) Ltd</span> trading as <span className="font-bold text-[#F5E6BE]">Canton Development Institute</span> has grown into a premiere multi-disciplinary occupational training, skills project management, and corporate advisory house across South Africa.
          </p>
        </div>

        {/* 2-Column Overview: Gold Institutional Philosophy & Corporate Governance Assurance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Our Institutional Philosophy (Styled in GOLD) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-br from-[#E5BE4E] via-[#D4AF37] to-[#C49B24] border border-amber-300 p-6 sm:p-7 rounded-lg shadow-lg text-slate-950">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-amber-200/90 rounded-md border border-amber-400">
                    <Target className="w-5 h-5 text-[#800020]" />
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-950 font-heading">
                    Our Institutional Philosophy
                  </h3>
                </div>
                <span className="bg-[#800020] text-amber-200 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-2xs">
                  Quality &amp; Impact
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-950 font-medium leading-relaxed mb-5">
                We believe that genuine socio-economic transformation requires combining rigorous regulatory compliance with measurable operational outcomes. We don’t just conduct training; we build sustainable competency pipelines that bridge the critical artisan deficit and elevate municipal governance.
              </p>

              {/* 4 Pillars Grid inside the Gold Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-[#FFFDF7] border border-amber-300 rounded shadow-xs">
                  <div className="font-bold text-xs text-slate-950 flex items-center gap-1.5 mb-1">
                    <CheckCircle className="w-4 h-4 text-[#800020] shrink-0" />
                    <span>Outcomes-Driven Focus</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-normal font-medium">
                    Measurable workplace readiness, trade test certifications, and verified economic absorption.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FFFDF7] border border-amber-300 rounded shadow-xs">
                  <div className="font-bold text-xs text-slate-950 flex items-center gap-1.5 mb-1">
                    <Scale className="w-4 h-4 text-[#800020] shrink-0" />
                    <span>Statutory Compliance</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-normal font-medium">
                    Strict alignment with PFMA, MFMA, Skills Development Act, and National Treasury circulars.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FFFDF7] border border-amber-300 rounded shadow-xs">
                  <div className="font-bold text-xs text-slate-950 flex items-center gap-1.5 mb-1">
                    <Award className="w-4 h-4 text-[#800020] shrink-0" />
                    <span>ISO 9001:2008 QMS</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-normal font-medium">
                    Robust Quality Management Systems governing moderation, assessment, and record management.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FFFDF7] border border-amber-300 rounded shadow-xs">
                  <div className="font-bold text-xs text-slate-950 flex items-center gap-1.5 mb-1">
                    <Building2 className="w-4 h-4 text-[#800020] shrink-0" />
                    <span>Community Impact</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-normal font-medium">
                    Sustainable rural infrastructure, youth employment, and local economic development (LED).
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Entity Identification Strip */}
            <div className="p-4 border-l-4 border-[#D4AF37] bg-[#540015] rounded-r text-xs text-amber-100 space-y-1 shadow-md">
              <div className="font-bold text-white text-sm flex items-center justify-between">
                <span>Corporate Entity Identification</span>
                <span className="text-[#D4AF37] font-mono text-[11px]">B-BBEE Level 3</span>
              </div>
              <div><span className="font-semibold text-white">Registered Name:</span> Canton Investments (Pty) Ltd</div>
              <div><span className="font-semibold text-white">Trading As:</span> Canton Trading 273 / Canton Development Institute</div>
              <div><span className="font-semibold text-white">Company Registration:</span> 2010/018143/07</div>
              <div><span className="font-semibold text-white">Ownership:</span> 100% Black-Owned Contributor</div>
            </div>
          </div>

          {/* Right Column: Institutional Governance & Statutory Assurance (Privacy-respecting institutional card) */}
          <div className="lg:col-span-6">
            <div className="bg-[#590016] text-white rounded-lg border border-rose-900/80 shadow-xl p-6 sm:p-8 space-y-5">
              {/* Executive Assurance Lockup */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-rose-900/60">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-extrabold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Quality Assurance Framework</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    Corporate Governance &amp; ETQA Compliance
                  </h3>
                  <div className="text-xs text-amber-200/90 font-mono font-semibold pt-0.5">
                    Certified ISO 9001:2008 Standard Operating Procedures
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full bg-[#800020] border-2 border-[#D4AF37] flex items-center justify-center shrink-0 shadow">
                  <Award className="w-7 h-7 text-[#D4AF37]" />
                </div>
              </div>

              {/* Institutional Assurance Narrative */}
              <div className="text-xs sm:text-sm text-amber-100/90 leading-relaxed space-y-3 font-sans font-normal">
                <p>
                  Canton operates under an institutional executive governance structure engineered specifically to safeguard public funds, uphold national ETQA moderation standards, and ensure clean statutory audits for government and private enterprise partners.
                </p>
                <p className="text-amber-200/80">
                  Through systematic quality audits, formalized workplace host placement compacts, and registered assessor/moderator panels, Canton consistently achieves superior certification throughput and audit compliance across municipal, provincial, and national initiatives.
                </p>
              </div>

              {/* Key Institutional Credentials Grid */}
              <div className="pt-3 border-t border-rose-900/60 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-white">
                <div className="flex items-center gap-2 bg-[#4A0012] p-2.5 rounded border border-rose-900/50">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">Statutory SETA Compliance</span>
                </div>
                <div className="flex items-center gap-2 bg-[#4A0012] p-2.5 rounded border border-rose-900/50">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">QCTO Trade Test Readiness</span>
                </div>
                <div className="flex items-center gap-2 bg-[#4A0012] p-2.5 rounded border border-rose-900/50">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">PFMA &amp; MFMA Standard Alignment</span>
                </div>
                <div className="flex items-center gap-2 bg-[#4A0012] p-2.5 rounded border border-rose-900/50">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">Verified Provincial Footprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
