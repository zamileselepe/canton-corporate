import React, { useState } from 'react';
import { X, Calculator, HelpCircle, ArrowRight, Award, DollarSign } from 'lucide-react';

interface SetaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

export const SetaCalculatorModal: React.FC<SetaCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenRfq,
}) => {
  const [annualPayroll, setAnnualPayroll] = useState<number>(5000000);
  const [learnersCount, setLearnersCount] = useState<number>(10);
  const [learnerType, setLearnerType] = useState<'artisan' | 'learnership'>('artisan');

  if (!isOpen) return null;

  // SDL is 1% of total payroll
  const sdlLevy = annualPayroll * 0.01;
  // Mandatory Grant is 20% of SDL levy paid back upon approved WSP/ATR
  const mandatoryGrantRebate = sdlLevy * 0.2;
  // Section 12H tax allowance: R40,000 commencement allowance + R40,000 completion allowance (artisan)
  const taxAllowancePerLearner = learnerType === 'artisan' ? 80000 : 80000;
  const totalTaxAllowance = learnersCount * taxAllowancePerLearner;
  // Estimated corporate tax saving at 27%
  const corporateTaxSaving = totalTaxAllowance * 0.27;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#1A1D20] text-white flex items-start justify-between">
          <div>
            <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">
              Corporate HR &amp; Municipal Financial Tool
            </div>
            <h3 className="text-xl font-bold font-heading text-white mt-1">
              SETA Grant &amp; Section 12H Tax Estimator
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Estimate your Mandatory Grant rebate and Section 12H income tax deduction.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Annual Company Payroll (ZAR): R {annualPayroll.toLocaleString()}
              </label>
              <input
                type="range"
                min="500000"
                max="50000000"
                step="500000"
                value={annualPayroll}
                onChange={(e) => setAnnualPayroll(Number(e.target.value))}
                className="w-full accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-0.5">
                <span>R 500k</span>
                <span>R 25M</span>
                <span>R 50M+</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Enrolled Candidates / Apprentices
                </label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={learnersCount}
                  onChange={(e) => setLearnersCount(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded font-semibold text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Qualification Pathway
                </label>
                <select
                  value={learnerType}
                  onChange={(e) => setLearnerType(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded font-semibold text-slate-900"
                >
                  <option value="artisan">QCTO Trade Apprenticeship</option>
                  <option value="learnership">NQF Learnership</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
              Estimated Financial Return &amp; Subsidies
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
              <span className="text-slate-600">Annual Skills Development Levy (1%):</span>
              <span className="font-mono font-semibold text-slate-900">
                R {sdlLevy.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
              <span className="text-slate-600 font-medium">
                SETA Mandatory Grant Rebate (20% WSP/ATR):
              </span>
              <span className="font-mono font-bold text-emerald-700 text-sm">
                + R {mandatoryGrantRebate.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
              <span className="text-slate-600">Section 12H Tax Allowance:</span>
              <span className="font-mono font-semibold text-slate-900">
                R {totalTaxAllowance.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center py-2 bg-amber-50/80 px-3 rounded border border-amber-200">
              <span className="font-bold text-slate-900">
                Direct SARS Tax Cash Saving (27% rate):
              </span>
              <span className="font-mono font-extrabold text-amber-900 text-sm">
                + R {corporateTaxSaving.toLocaleString()}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed italic">
            * Estimates are indicative based on prevailing SARS Section 12H allowances for able-bodied South African learners and approved SETA Workplace Skills Plans. Additional Discretionary Grants and allowances apply for learners with disabilities.
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenRfq();
              }}
              className="w-full bg-[#D4AF37] hover:bg-[#c69c28] text-slate-950 font-bold py-2.5 px-4 rounded text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Workplace Skills Plan (WSP) Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
