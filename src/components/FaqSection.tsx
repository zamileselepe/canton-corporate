import React, { useState } from 'react';
import { ChevronDown, Calculator, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/cantonData';

interface FaqSectionProps {
  onOpenCalculator: () => void;
  onOpenRfq: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenCalculator, onOpenRfq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[30px] bg-[#800020] text-white border-b border-rose-950/60 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Heading & Tools */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <span className="w-6 h-0.5 bg-[#D4AF37]"></span>
                <span>Statutory Clarity &amp; FAQs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Frequently Asked Inquiries
              </h2>
              <p className="mt-2 text-sm text-amber-100/90 leading-relaxed font-medium">
                Clear answers regarding accreditation verification, B-BBEE skills spend compliance, Section 12H tax allowances, and trade test readiness.
              </p>
            </div>

            {/* Quick Interactive Tool Promotion */}
            <div className="p-5 bg-[#5E0017] border border-rose-900/80 rounded-lg space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-[#D4AF37]" />
                <span>Interactive Assessment Tool</span>
              </div>
              <h3 className="font-bold font-heading text-white text-base">
                Calculate Mandatory Grant &amp; SARS 12H Tax Rebates
              </h3>
              <p className="text-xs text-amber-100/80 leading-relaxed">
                Estimate the return on investment for enrolling artisan apprentices and learnership candidates against your annual Skills Development Levy (SDL).
              </p>
              <button
                onClick={onOpenCalculator}
                className="w-full bg-[#D4AF37] hover:bg-[#c69c28] text-slate-950 font-bold text-xs py-2.5 px-4 rounded flex items-center justify-center gap-2 cursor-pointer transition-colors shadow"
              >
                <span>Launch SETA Grant Calculator</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-2.5">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-rose-900/60 rounded-lg overflow-hidden transition-colors bg-[#5E0017]"
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full p-4 text-left bg-[#5E0017] hover:bg-[#6E001C] flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  >
                    <span className="text-sm font-bold text-white font-heading">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-300' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-1 bg-[#520014] border-t border-rose-900/50 text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Contact Prompt */}
            <div className="p-3.5 bg-[#4F0013] border border-rose-900/60 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-100">
              <span>
                Have a customized municipal mandate or specific tender requirement?
              </span>
              <a
                href="#contact"
                className="text-[#D4AF37] font-bold hover:underline whitespace-nowrap"
              >
                Inquire Directly With Our Directorate →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
