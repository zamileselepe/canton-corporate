import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Building, CheckCircle } from 'lucide-react';
import { BRANCH_OFFICES } from '../data/cantonData';

export const FootprintSection: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('polokwane');

  const selectedBranch = BRANCH_OFFICES.find(b => b.id === selectedBranchId) || BRANCH_OFFICES[0];

  return (
    <section id="footprint" className="py-[30px] bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-bold text-[#800020] uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-6 h-0.5 bg-[#800020]"></span>
            <span>National Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Multi-Provincial Branch Footprint
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            With our national Head Office strategically based in Polokwane and permanent regional operational training centers in the Northern Cape and Free State, Canton ensures immediate local execution capacity.
          </p>
        </div>

        {/* 3 Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {BRANCH_OFFICES.map((branch) => {
            const isSelected = branch.id === selectedBranchId;
            return (
              <div
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`p-6 rounded-lg border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-50/40 border-amber-500 shadow-md ring-1 ring-amber-500/40'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#800020] uppercase tracking-wider">
                      {branch.province}
                    </span>
                    {branch.isHeadOffice && (
                      <span className="bg-[#D4AF37] text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
                        Head Office
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {branch.city} Office
                  </h3>

                  <div className="text-xs text-slate-600 flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#800020] shrink-0 mt-0.5" />
                    <span>{branch.streetAddress}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center justify-between">
                  <span className="text-amber-800">
                    {branch.telephones[0]}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-900">
                    View Details →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Selected Office Panel */}
        <div className="bg-[#1A1D20] text-white rounded-lg p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                  <span>{selectedBranch.province}</span>
                  <span>·</span>
                  <span>{selectedBranch.isHeadOffice ? 'National Directorate & Operations' : 'Regional Branch'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {selectedBranch.officeName}
                </h3>
              </div>

              {/* Address details */}
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Physical Address</div>
                    <div className="text-white font-medium">{selectedBranch.streetAddress}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Direct Telephones</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                      {selectedBranch.telephones.map((tel, idx) => (
                        <a
                          key={idx}
                          href={`tel:${tel.replace(/\s+/g, '')}`}
                          className="text-white hover:text-amber-400 transition-colors font-medium underline underline-offset-2"
                        >
                          {tel}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Email Inquiries</div>
                    <a
                      href={`mailto:${selectedBranch.email}`}
                      className="text-white hover:text-amber-400 transition-colors font-medium"
                    >
                      {selectedBranch.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Operating Hours</div>
                    <div className="text-slate-300">{selectedBranch.hours}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranch.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c69c28] text-slate-950 font-bold px-5 py-2.5 rounded text-xs transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:+27152911573"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-2.5 rounded text-xs border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call Branch Now</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Highlights Card */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 rounded-lg">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                Regional Hub Capabilities
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Full theoretical classrooms and accredited trade workshops on-site.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Permanent accredited assessors, moderators, and registered SDFs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Direct liaison facilities for municipal ward leaders and corporate employers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Secure learner record archiving conforming to SAQA statutory compliance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
