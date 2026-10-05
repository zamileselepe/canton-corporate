/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopUtilityBar } from './components/TopUtilityBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyOverview } from './components/CompanyOverview';
import { AccreditationsGrid } from './components/AccreditationsGrid';
import { ServicesSection } from './components/ServicesSection';
import { FootprintSection } from './components/FootprintSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { RfqModal } from './components/RfqModal';
import { SetaCalculatorModal } from './components/SetaCalculatorModal';

export default function App() {
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [rfqInitialService, setRfqInitialService] = useState('SETA Training');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleOpenRfq = (serviceName?: string) => {
    if (serviceName) {
      setRfqInitialService(serviceName);
    }
    setIsRfqModalOpen(true);
  };

  const handleCloseRfq = () => {
    setIsRfqModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500/20 selection:text-amber-950">
      {/* 1. Top Utility Header Bar */}
      <TopUtilityBar />

      {/* 2. Main Sticky Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onOpenRfq={() => handleOpenRfq('SETA Training')} />

        {/* 4. Company Overview */}
        <CompanyOverview />

        {/* 5. Comprehensive Solutions (Core Services) */}
        <ServicesSection onOpenRfqWithService={(service) => handleOpenRfq(service)} />

        {/* 6. National Verification & SETA Capacity */}
        <AccreditationsGrid onSelectProgrammeForRfq={(prog) => handleOpenRfq(prog)} />

        {/* 7. Multi-Provincial Branch Footprint */}
        <FootprintSection />

        {/* 9. FAQs & SETA Grant Tax Calculator */}
        <FaqSection
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onOpenRfq={() => handleOpenRfq('Workplace Skills Planning')}
        />

        {/* 10. Direct Contact Section & Online RFQ Form */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* 13. Interactive Modals */}
      <RfqModal
        isOpen={isRfqModalOpen}
        onClose={handleCloseRfq}
        initialService={rfqInitialService}
      />

      <SetaCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onOpenRfq={() => {
          setIsCalculatorOpen(false);
          handleOpenRfq('Workplace Skills Planning (WSP) & Tax Allowances');
        }}
      />
    </div>
  );
}
