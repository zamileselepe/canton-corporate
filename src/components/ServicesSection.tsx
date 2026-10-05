import React, { useState } from 'react';
import { 
  GraduationCap, 
  Workflow, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  FileCheck2, 
  Users, 
  TrendingUp,
  Award
} from 'lucide-react';
import { CORE_SERVICES } from '../data/cantonData';

interface ServicesSectionProps {
  onOpenRfqWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenRfqWithService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('training');

  const selectedService = CORE_SERVICES.find(s => s.id === selectedServiceId) || CORE_SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'training':
        return <GraduationCap className="w-5 h-5" />;
      case 'project-management':
        return <Workflow className="w-5 h-5" />;
      case 'governance-consulting':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-[30px] bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-bold text-[#800020] uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-6 h-0.5 bg-[#800020]"></span>
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Core Service Offerings
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Delivering integrated human capital empowerment, statutory project oversight, and institutional governance across the public and corporate spheres.
          </p>
        </div>

        {/* 3 Pillar Selection Strip (Interactive Segmented Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CORE_SERVICES.map((service, index) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-6 rounded-lg text-left transition-all duration-200 border cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1A1D20] text-white border-slate-800 shadow-md ring-1 ring-amber-500/50'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`p-2.5 rounded-md ${
                      isSelected
                        ? 'bg-amber-500/20 text-[#D4AF37]'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {getServiceIcon(service.id)}
                    </span>
                    <span className={`text-xs font-mono font-bold ${
                      isSelected ? 'text-amber-400' : 'text-slate-400'
                    }`}>
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold font-heading mb-1.5 ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`text-xs line-clamp-2 ${
                    isSelected ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {service.subtitle}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-xs font-semibold flex items-center justify-between ${
                  isSelected ? 'border-slate-800 text-[#D4AF37]' : 'border-slate-200 text-slate-600'
                }`}>
                  <span>Explore Deliverables</span>
                  <span className="text-sm">→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Bento for Selected Pillar */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                  Pillar Focus
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {selectedService.title}
                </h3>
                <p className="text-sm font-medium text-[#800020] mt-1">
                  {selectedService.subtitle}
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Target Audience Bar */}
              <div className="p-3.5 bg-white border border-slate-200 rounded text-xs text-slate-700">
                <span className="font-bold text-slate-900">Key Beneficiaries &amp; Clients: </span>
                {selectedService.targetAudience}
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Standard Scope of Deliverables:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded border border-slate-200/70">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Framework Badges */}
              <div className="pt-2">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Regulatory Framework Alignment:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {selectedService.frameworkAlignment.map((fw, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-slate-200/80 text-slate-800 px-2.5 py-1 rounded border border-slate-300/60"
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenRfqWithService(selectedService.title)}
                  className="bg-[#800020] hover:bg-[#68001a] text-white font-semibold text-sm px-6 py-3 rounded shadow transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>{selectedService.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Media / Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-white">
                <img
                  src="https://cantoncorporate.co.za/img/work-from-home-essentials-laptop-and-coffee-free-photo.jpg"
                  alt="Canton Development Institute Skills Training & Corporate Delivery"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/src/assets/images/vocational_campus_students_1791105132291.jpg';
                  }}
                />
                <div className="p-5 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#800020]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>ISO 9001:2008 &amp; ETQA Audit Certified</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Every learner cohort and corporate project operates under documented moderation policies, ensuring seamless compliance sign-off.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
