import React, { useState } from 'react';
import { 
  Building, 
  Wrench, 
  Landmark, 
  Briefcase, 
  Monitor, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { ACCREDITATIONS } from '../data/cantonData';
import { Accreditation } from '../types';

interface AccreditationsGridProps {
  onSelectProgrammeForRfq: (programmeName: string) => void;
}

export const AccreditationsGrid: React.FC<AccreditationsGridProps> = ({ onSelectProgrammeForRfq }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedAccreditation, setSelectedAccreditation] = useState<Accreditation | null>(null);

  const categories = [
    { id: 'all', label: 'All Accreditations' },
    { id: 'construction', label: 'Construction & Civil' },
    { id: 'artisan', label: 'QCTO Artisan Trades' },
    { id: 'local_gov', label: 'Local Government & MFMA' },
    { id: 'business', label: 'Business & Management' },
    { id: 'it', label: 'Information Technology' },
  ];

  const getAuthorityIcon = (category: string) => {
    switch (category) {
      case 'construction':
        return <Building className="w-5 h-5 text-[#800020]" />;
      case 'artisan':
        return <Wrench className="w-5 h-5 text-[#800020]" />;
      case 'local_gov':
        return <Landmark className="w-5 h-5 text-[#800020]" />;
      case 'business':
        return <Briefcase className="w-5 h-5 text-[#800020]" />;
      case 'it':
        return <Monitor className="w-5 h-5 text-[#800020]" />;
      default:
        return <Award className="w-5 h-5 text-[#800020]" />;
    }
  };

  const filteredAccreditations = ACCREDITATIONS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  return (
    <section id="accreditations" className="py-[30px] bg-[#D4AF37] border-b border-amber-600/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-6">
          <div className="text-xs font-extrabold text-[#800020] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <span className="w-6 h-0.5 bg-[#800020]"></span>
            <span>National Verification &amp; SETA Capacity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            Accreditations &amp; Occupational Scope
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
            Canton Development Institute maintains active, verified accreditation credentials across key statutory Quality Councils and Sector Education and Training Authorities (SETAs).
          </p>
        </div>

        {/* Category Filter Buttons - Flex-wrap with zero horizontal scrollbar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-amber-400/60 rounded-lg border border-amber-500 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-amber-300 shadow-sm'
                  : 'text-slate-950 hover:bg-amber-300/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accreditation Cards Grid - Boxes styled in another shade of gold (luminous champagne gold) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAccreditations.map((acc) => (
            <div
              key={acc.id}
              className="bg-[#FFF9EA] rounded-lg border border-[#C59B27] hover:border-slate-900 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 bg-[#F4E2AB] rounded-md border border-[#D8B44A] group-hover:bg-[#EED48E] transition-colors">
                    {getAuthorityIcon(acc.category)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono font-bold text-[#800020] bg-amber-100 border border-amber-300/80 px-2 py-0.5 rounded shadow-2xs">
                      {acc.badgeLabel}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-extrabold text-[#800020] tracking-wide">
                    {acc.code}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-slate-950 group-hover:text-[#800020] transition-colors">
                    {acc.name}
                  </h3>
                </div>

                <p className="mt-2 text-xs text-slate-700 leading-relaxed line-clamp-2 font-medium">
                  {acc.description}
                </p>

                {/* Scope Preview List */}
                <div className="mt-4 pt-3 border-t border-[#E8CD82]">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Primary Qualifications &amp; Trades:
                  </div>
                  <ul className="space-y-2">
                    {acc.qualifications.slice(0, 3).map((q, idx) => (
                      <li key={idx} className="text-xs text-slate-800 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-950">{q.title}</span>
                          <span className="text-[11px] text-amber-900 block font-medium">
                            NQF Level {q.nqfLevel} {q.saqaId ? `· SAQA ${q.saqaId}` : ''} {q.credits ? `· ${q.credits} Credits` : ''}
                          </span>
                        </div>
                      </li>
                    ))}
                    {acc.qualifications.length > 3 && (
                      <li className="text-[11px] text-slate-700 font-semibold pl-5">
                        +{acc.qualifications.length - 3} additional registered unit standards
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions in deeper complementary gold shade */}
              <div className="px-5 py-3 bg-[#F5E6BF] border-t border-[#DEC171] flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedAccreditation(acc)}
                  className="text-slate-900 hover:text-[#800020] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>View Full Curriculum</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#contact"
                  className="text-[#800020] hover:text-black font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Contact Us</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredAccreditations.length === 0 && (
          <div className="text-center py-10 bg-[#FFF9EA] rounded-lg border border-[#C59B27]">
            <GraduationCap className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <div className="text-sm font-bold text-slate-900">No matching accreditations found</div>
            <p className="text-xs text-slate-700 mt-1">Try viewing all registered accreditations.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-2 text-xs font-bold text-[#800020] underline cursor-pointer"
            >
              Reset Category Filter
            </button>
          </div>
        )}
      </div>

      {/* Curriculum Modal */}
      {selectedAccreditation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-amber-50/70 rounded-t-lg">
              <div>
                <span className="text-xs font-bold text-[#800020] uppercase tracking-wider">
                  {selectedAccreditation.code} Qualification Specifications
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900 mt-1">
                  {selectedAccreditation.name}
                </h3>
                <div className="text-xs text-slate-600 mt-1">
                  Accreditation Registration: <span className="font-mono font-semibold text-slate-800">{selectedAccreditation.accreditationNumber}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedAccreditation(null)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded hover:bg-slate-200 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body: Qualification Matrix */}
            <div className="p-6 overflow-y-auto space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedAccreditation.description}
              </p>

              <div className="border border-slate-200 rounded overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 border-b border-slate-200 font-semibold text-slate-700">
                    <tr>
                      <th className="p-3">Qualification / Trade Title</th>
                      <th className="p-3">Type</th>
                      <th className="p-3 text-center">NQF</th>
                      <th className="p-3 text-right">SAQA ID</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedAccreditation.qualifications.map((q, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-medium text-slate-900">
                          {q.title}
                          {q.credits && (
                            <span className="block text-[11px] text-slate-500 font-normal">
                              Credits: {q.credits}
                            </span>
                          )}
                        </td>
                        <td className="p-3 text-slate-600">{q.type}</td>
                        <td className="p-3 text-center font-mono font-semibold text-amber-700">
                          L{q.nqfLevel}
                        </td>
                        <td className="p-3 text-right font-mono text-slate-600">
                          {q.saqaId || '—'}
                        </td>
                        <td className="p-3 text-right">
                          <a
                            href="#contact"
                            onClick={() => setSelectedAccreditation(null)}
                            className="text-[#800020] hover:text-[#5e0017] font-semibold text-[11px] hover:underline"
                          >
                            Inquire
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between rounded-b-lg">
              <span className="text-xs text-slate-500">
                All certificates issued in compliance with QCTO &amp; SAQA frameworks.
              </span>
              <button
                onClick={() => setSelectedAccreditation(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
