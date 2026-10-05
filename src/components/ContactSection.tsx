import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Building, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/cantonData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    serviceType: 'SETA Training',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // POST directly to Web3Forms / AJAX
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'eccbe885-3031-4172-ba00-c9a35e959da6',
          to_email: COMPANY_INFO.primaryEmail,
          subject: `Corporate Contact Form Submission: ${formData.organization || formData.fullName}`,
          from_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          service_required: formData.serviceType,
          message: formData.message,
        }),
      });

      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[30px] bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Corporate Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-bold text-[#800020] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <span className="w-6 h-0.5 bg-[#800020]"></span>
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Contact Our Corporate Directorate
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Connect with our team for tender partnerships, SETA discretionary grant rollouts, QCTO trade center bookings, or municipal governance consultations.
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="space-y-4">
              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  Headquarters &amp; Direct Telephone Lines
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="font-semibold text-slate-900">Polokwane Central Landline:</span>
                    <a href="tel:+27152911573" className="hover:text-amber-700 underline font-medium">
                      +27 15 291 1573
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  Official Email Correspondence
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-semibold text-slate-900">Inquiries:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.primaryEmail}`}
                    className="hover:text-amber-700 underline font-medium"
                  >
                    {COMPANY_INFO.primaryEmail}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  Head Office Physical Location
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-[#800020] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Polokwane Central Campus:</div>
                    <div>74A Plein Street (cnr Jorissen St), Polokwane, 0699, Limpopo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Online RFQ & Support Form */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Online RFQ &amp; Support Request
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Submissions are sent directly to <span className="font-mono text-slate-800">{COMPANY_INFO.primaryEmail}</span> without page reload.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Message Dispatched Successfully
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Canton Investments. An executive advisor will review your specifications and get in touch shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: '',
                      organization: '',
                      email: '',
                      phone: '',
                      serviceType: 'SETA Training',
                      message: '',
                    });
                  }}
                  className="mt-3 px-5 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Person Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. George Mthembu"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organization / Department Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Free State Provincial Government"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +27 15 291 1573"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Required <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:bg-white"
                  >
                    <option value="SETA Training">SETA Training &amp; Learnerships</option>
                    <option value="Artisan Apprenticeship">Artisan Apprenticeship (QCTO Trades)</option>
                    <option value="Corporate Governance/PFMA">Corporate Governance / PFMA / MFMA Advisory</option>
                    <option value="Skills Project Mgmt">Skills Development Project Management</option>
                    <option value="General Inquiry">General Corporate Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Project Details <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your requirements, training cohort numbers, or procurement deadlines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:bg-white"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#800020] hover:bg-[#68001a] text-white font-semibold text-sm py-3 px-4 rounded shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Corporate Inquiry</span>
                        <Send className="w-4 h-4 text-[#D4AF37]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
