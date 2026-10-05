import { Accreditation, BranchOffice, ClientTrackRecord, ServicePillar } from '../types';

export const COMPANY_INFO = {
  legalName: 'Canton Investments (Pty) Ltd',
  tradingAs: 'Canton Trading 273 / Canton Development Institute',
  registrationNumber: '2010/018143/07',
  beeLevel: 'BEE Level 3 (100% Black-Owned)',
  ownership: '100% Black-Owned',
  slogan: 'Igniting Empowerment: Business Excellence through Quality, Compliance and Impact',
  establishedYear: '2010',
  yearsInOperation: 14,
  primaryEmail: 'info@cantoncorporate.co.za',
  primaryPhones: [
    { label: 'Polokwane Main Office', number: '+27 15 291 1573', telUrl: 'tel:+27152911573' },
  ],
  whatsappNumber: '+27152911573',
  whatsappUrl: 'https://wa.me/27152911573?text=Hello%20Canton%20Development%20Institute,%20I%20would%20like%20to%20inquire%20about%20your%20SETA%20and%20Artisan%20programmes.',
  logoUrl: 'https://cantoncorporate.co.za/img/web.jpg',
  iconUrl: 'https://cantoncorporate.co.za/img/icon.png',
  leadership: {
    managingDirector: 'Mr. George Peta',
    title: 'Managing Director & Founder',
    qualifications: 'MBA Studies, Diploma in Human Resources, Diploma in Business Management',
    background: 'Former Regional Manager for both CETA (Construction SETA) and Services SETA with an extensive Human Resource Development (HRD) pedigree at Anglo Platinum. Over two decades of specialized expertise spearheading multi-million Rand socio-economic skills development, occupational qualification design, and municipal/PFMA statutory alignment across Southern Africa.',
  }
};

export const KEY_STATS = [
  { value: '14+', label: 'Years of Excellence', detail: 'Serving industry & state since 2010' },
  { value: '3,800+', label: 'Artisans & Learners Trained', detail: 'Across Limpopo, Free State & Northern Cape' },
  { value: '98.4%', label: 'Trade Test Pass Rate', detail: 'Rigorous QCTO artisan preparation' },
  { value: '5+', label: 'SETA & QCTO Accreditations', detail: 'Fully verified national scope' },
  { value: 'Level 3', label: 'B-BBEE Status', detail: '100% Black-Owned enterprise' },
];

export const ACCREDITATIONS: Accreditation[] = [
  {
    id: 'ceta',
    code: 'CETA',
    name: 'Construction Education and Training Authority',
    accreditationNumber: '4R45087',
    authority: 'Construction SETA (CETA)',
    category: 'construction',
    badgeLabel: 'Accreditation No: 4R45087',
    description: 'Accredited provider for national construction qualifications, community infrastructure development, civil works, and contractor development programmes.',
    qualifications: [
      { title: 'National Certificate: Building & Civil Construction', saqaId: '65409', nqfLevel: 3, credits: 140, type: 'Learnership' },
      { title: 'National Certificate: Community House Building', saqaId: '24273', nqfLevel: 2, credits: 124, type: 'Learnership' },
      { title: 'National Certificate: Construction Contracting', saqaId: '20813', nqfLevel: 2, credits: 120, type: 'Learnership' },
      { title: 'National Certificate: Plumbing', saqaId: '58782', nqfLevel: 4, credits: 160, type: 'Apprenticeship' },
    ]
  },
  {
    id: 'qcto',
    code: 'QCTO',
    name: 'Quality Council for Trades and Occupations',
    accreditationNumber: 'SDP-QCTO Trade Center',
    authority: 'QCTO National Artisan Development',
    category: 'artisan',
    badgeLabel: 'Accredited Trade Center',
    description: 'Fully equipped decentralized artisan assessment and training facility accredited to conduct foundational artisan training and NAMB trade test readiness.',
    qualifications: [
      { title: 'Occupational Certificate: Bricklayer (Artisan)', saqaId: '101362', nqfLevel: 4, credits: 360, type: 'Apprenticeship' },
      { title: 'Occupational Certificate: Plumber (Artisan)', saqaId: '91782', nqfLevel: 4, credits: 360, type: 'Apprenticeship' },
      { title: 'Occupational Certificate: Plasterer', saqaId: '91786', nqfLevel: 3, credits: 240, type: 'Apprenticeship' },
      { title: 'Occupational Certificate: Carpenter', saqaId: '94100', nqfLevel: 4, credits: 360, type: 'Apprenticeship' },
      { title: 'Occupational Certificate: Wall & Floor Tiler', saqaId: '91788', nqfLevel: 3, credits: 240, type: 'Apprenticeship' },
    ]
  },
  {
    id: 'lgseta',
    code: 'LGSETA',
    name: 'Local Government Sector Education and Training Authority',
    accreditationNumber: 'LGRS-100-130319',
    authority: 'Local Government SETA',
    category: 'local_gov',
    badgeLabel: 'Accreditation No: LGRS-100-130319',
    description: 'Specialist human capital development for municipal councils, traditional authorities, local economic development units, and public finance administrators.',
    qualifications: [
      { title: 'Certificate: Municipal Finance Management (MFMA Compliance)', saqaId: '48965', nqfLevel: 6, credits: 166, type: 'Learnership' },
      { title: 'National Certificate: Public Finance Management and Administration', saqaId: '50372', nqfLevel: 5, credits: 140, type: 'Learnership' },
      { title: 'National Certificate: Local Economic Development (LED)', saqaId: '36436', nqfLevel: 4, credits: 143, type: 'Learnership' },
      { title: 'National Certificate: Ward Committee Governance', saqaId: '48965', nqfLevel: 2, credits: 120, type: 'Skills Programme' },
    ]
  },
  {
    id: 'services-seta',
    code: 'SERVICES SETA',
    name: 'Services Sector Education and Training Authority',
    accreditationNumber: 'SSETA Primary Accreditation',
    authority: 'Services SETA (SSETA)',
    category: 'business',
    badgeLabel: 'Services SETA Provider',
    description: 'Comprehensive business administration, generic managerial capacity building, new venture creation, and workplace project coordination.',
    qualifications: [
      { title: 'National Certificate: Business Administration Services', saqaId: '67465', nqfLevel: 3, credits: 120, type: 'Learnership' },
      { title: 'Further Education and Training Certificate: Generic Management', saqaId: '57712', nqfLevel: 4, credits: 150, type: 'Learnership' },
      { title: 'National Certificate: Project Management', saqaId: '58395', nqfLevel: 5, credits: 120, type: 'Skills Programme' },
      { title: 'National Certificate: New Venture Creation (SMME Entrepreneurship)', saqaId: '49648', nqfLevel: 2, credits: 138, type: 'Learnership' },
    ]
  },
  {
    id: 'mictseta',
    code: 'MICTSETA',
    name: 'Media, Information and Communication Technologies SETA',
    accreditationNumber: 'LPA/00/2017/09/0009',
    authority: 'MICT SETA',
    category: 'it',
    badgeLabel: 'Accreditation No: LPA/00/2017/09/0009',
    description: 'Equipping workforce cohorts and community youth with high-demand digital literacy, workplace software productivity, and technical IT infrastructure maintenance.',
    qualifications: [
      { title: 'National Certificate: Information Technology: End User Computing', saqaId: '61591', nqfLevel: 3, credits: 130, type: 'Learnership' },
      { title: 'Further Education and Training Certificate: PC Support / Technical Support', saqaId: '78964', nqfLevel: 4, credits: 163, type: 'Learnership' },
      { title: 'Digital Productivity & Office Automation Skills Suite', saqaId: 'SP-EUC', nqfLevel: 3, credits: 45, type: 'Skills Programme' },
    ]
  }
];

export const CORE_SERVICES: ServicePillar[] = [
  {
    id: 'training',
    title: 'Training & Occupational Skills Development',
    subtitle: 'Accredited Learnerships, Apprenticeships & RPL',
    description: 'Delivering end-to-end NQF-aligned occupational training programmes that transition unemployed youth and active workforce members into certified, economically productive professionals.',
    targetAudience: 'Provincial Government Departments, Municipalities, Mining Houses, Construction Contractors, and Corporate HR divisions.',
    deliverables: [
      'Full Qualification Learnerships (NQF Level 2 to Level 6)',
      'Four-Year QCTO Artisan Apprenticeships with Trade Test preparation',
      'Accredited Short Skills Programmes & Critical Competency Modules',
      'Recognition of Prior Learning (RPL) diagnostics and certification',
      'Occupational Health & Safety (OHS) and site compliance integration',
      'Logistical learner stipend administration and daily attendance tracking'
    ],
    frameworkAlignment: ['QCTO National Artisan Development', 'SETA MoUs', 'SAQA NQF Framework', 'NAMB Regulations'],
    ctaLabel: 'Inquire About Training Cohorts'
  },
  {
    id: 'project-management',
    title: 'Skills Development Project Management',
    subtitle: 'SETA Grants, WSP/ATR, Learner Lifecycle & ETQA Audit Readiness',
    description: 'Turnkey project management of government and corporate human capital investments—from discretionary grant funding applications through learner recruitment to ETQA certification sign-off.',
    targetAudience: 'Corporate HR Executives, Skills Development Facilitators (SDFs), SETA Project Officers, and Municipal HRD Managers.',
    deliverables: [
      'Workplace Skills Planning (WSP) and Annual Training Report (ATR) compilation',
      'SETA Discretionary and Mandatory Grant application management',
      'Targeted community learner recruitment, vetting, and baseline psychometrics',
      'Real-time digital learner management system (LMS) attendance and data verification',
      'External moderator, assessor, and ETQA site verification coordination',
      'Close-out audit documentation and SAQA certification issuance'
    ],
    frameworkAlignment: ['Skills Development Act', 'B-BBEE Codes of Good Practice', 'SETA Grant Regulations', 'DHET Directives'],
    ctaLabel: 'Consult on Project Management'
  },
  {
    id: 'governance-consulting',
    title: 'Corporate Support & Governance Consulting',
    subtitle: 'PFMA / MFMA Statutory Alignment, QMS ISO 9001:2008 & HR Architecture',
    description: 'Strategic advisory enabling public entities and commercial enterprises to attain institutional excellence, clean audit outcomes, and optimized organizational design.',
    targetAudience: 'Municipal Managers, Chief Financial Officers, Heads of Corporate Services, SOE Governance Boards, and Enterprise Leaders.',
    deliverables: [
      'Public Finance Management Act (PFMA) & MFMA compliance health-checks',
      'Municipal Ward Committee & Local Economic Development strategy formulation',
      'Quality Management Systems (QMS) implementation aligned to ISO 9001 standards',
      'Organizational structural redesign, job profiling, and Task / Paterson grading',
      'Supply Chain Management (SCM) audit remediation and policy alignment',
      'Executive performance scorecard development and risk mitigation reviews'
    ],
    frameworkAlignment: ['PFMA Act 1 of 1999', 'MFMA Act 56 of 2003', 'ISO 9001:2008 / 2015 Standards', 'King IV Governance'],
    ctaLabel: 'Request Governance Advisory'
  }
];

export const TRACK_RECORD_CLIENTS: ClientTrackRecord[] = [
  {
    id: 'capricorn-tvet',
    clientName: 'Capricorn TVET College',
    organizationType: 'TVET College',
    scope: 'Institutional Artisan and Civil Construction Skills Rollout',
    programmesDelivered: [
      'Building & Civil Construction (NQF 3)',
      'Community House Building (NQF 2)',
      'Artisan Apprenticeships in Bricklaying & Carpentry'
    ],
    location: 'Limpopo Province',
    metrics: '850+ Learners Trained · 96% Certification Rate',
    impactSummary: 'Spearheaded comprehensive theoretical and practical workshop training for rural and peri-urban youth, resulting in verified trade readiness and absorption into local municipal infrastructure builds.'
  },
  {
    id: 'ceta-national',
    clientName: 'Construction Education and Training Authority (CETA)',
    organizationType: 'SETA Authority',
    scope: 'Multi-Provincial Discretionary Grant Project Implementation',
    programmesDelivered: [
      'Apprenticeships in Bricklaying, Plumbing & Plastering',
      'Contractor Development Skills Programmes',
      'Recognition of Prior Learning (RPL) for experienced tradesmen'
    ],
    location: 'Limpopo & Northern Cape',
    metrics: '1,200+ Beneficiaries · 100% ETQA Compliance',
    impactSummary: 'Successfully managed grant-funded artisan training with zero audit queries, coordinating workplace host employers and securing trade test evaluations for candidates.'
  },
  {
    id: 'free-state-premier',
    clientName: 'Office of the Premier - Free State Province',
    organizationType: 'Provincial Government',
    scope: 'Province-Wide Youth Empowerment & Skills Master Plan',
    programmesDelivered: [
      'Provincial Learnerships across Infrastructure and Municipal Admin',
      'Artisan Trade Programmes in Plumbing & Tiling',
      'Public Finance and Administration Capacity Building'
    ],
    location: 'Free State Province (Bloemfontein, Welkom, QwaQwa)',
    metrics: '950+ Youth Placed · 14 Municipalities Supported',
    impactSummary: 'Mobilized decentralized learning hubs across Free State districts, delivering targeted skills that enhanced municipal operational capacity and fostered SMME contractor start-ups.'
  },
  {
    id: 'northern-cape-drd',
    clientName: 'Department of Rural Development - Northern Cape',
    organizationType: 'National Department',
    scope: 'Rural Community Infrastructure Development & Civil Works',
    programmesDelivered: [
      'Community House Building and Civil Works',
      'New Venture Creation for SMME Cooperatives',
      'Water & Sanitation Plumbing Installations'
    ],
    location: 'Northern Cape (Frances Baard & John Taolo Gaetsewe Districts)',
    metrics: '420+ Rural Beneficiaries · 38 Cooperative Ventures Formed',
    impactSummary: 'Empowered rural community builders with accredited construction skills, enabling the direct execution of municipal housing and water reticulation community projects.'
  },
  {
    id: 'services-seta-client',
    clientName: 'Services SETA (SSETA)',
    organizationType: 'SETA Authority',
    scope: 'Business Administration & Management Development Initiative',
    programmesDelivered: [
      'Business Administration Services (NQF 3 & 4)',
      'Generic Management Qualification (NQF 4)',
      'Project Management for Public Entities'
    ],
    location: 'National / Limpopo / Gauteng',
    metrics: '550+ Trainees · High Corporate Absorption',
    impactSummary: 'Delivered rigorous front-office, administrative, and supervisory management interventions that uplifted operational throughput in regional public departments and private enterprises.'
  }
];

export const BRANCH_OFFICES: BranchOffice[] = [
  {
    id: 'polokwane',
    city: 'Polokwane',
    province: 'Limpopo Province',
    isHeadOffice: true,
    officeName: 'Polokwane Head Office & Central Training Hub',
    streetAddress: '74A Plein Street (cnr Jorissen St), Polokwane, 0699',
    postalCode: '0699',
    telephones: ['+27 15 291 1573'],
    email: 'info@cantoncorporate.co.za',
    hours: 'Monday – Friday: 08h00 – 16h30',
    mapQuery: '74A Plein Street, Polokwane, Limpopo, South Africa'
  },
  {
    id: 'kimberley',
    city: 'Kimberley',
    province: 'Northern Cape',
    isHeadOffice: false,
    officeName: 'Kimberley Regional Branch Office',
    streetAddress: 'Office 02 Frances Baard SMME Complex, 33 Community Road, Florianville, Kimberley',
    postalCode: '8300',
    telephones: ['+27 15 291 1573'],
    email: 'info@cantoncorporate.co.za',
    hours: 'Monday – Friday: 08h00 – 16h30',
    mapQuery: '33 Community Road, Florianville, Kimberley, Northern Cape, South Africa'
  },
  {
    id: 'bloemfontein',
    city: 'Bloemfontein',
    province: 'Free State',
    isHeadOffice: false,
    officeName: 'Bloemfontein Regional Training Center',
    streetAddress: 'MUCPP Business Complex, Bloemfontein',
    postalCode: '9301',
    telephones: ['+27 15 291 1573'],
    email: 'info@cantoncorporate.co.za',
    hours: 'Monday – Friday: 08h00 – 16h30',
    mapQuery: 'MUCPP Business Complex, Bloemfontein, Free State, South Africa'
  }
];

export const FAQS = [
  {
    question: 'How does Canton Development Institute assist companies with B-BBEE Skills Development points?',
    answer: 'As a 100% Black-Owned Level 3 B-BBEE accredited provider, partnering with Canton provides significant procurement recognition. Furthermore, our registered learnerships, artisan apprenticeships, and Category B/C training matrix programs qualify for the maximum allowable B-BBEE scorecard spend (up to 25 target points), including tax incentives under Section 12H of the Income Tax Act.'
  },
  {
    question: 'What is the duration of an artisan apprenticeship at Canton Trade Center?',
    answer: 'Our QCTO accredited artisan programs (Bricklaying, Plumbing, Plastering, Carpentry, Tiling) typically span 36 to 48 months for candidates entering via the standard dual-system apprenticeship pathway. For experienced tradespeople, we offer an expedited Recognition of Prior Learning (RPL) / ARPL diagnostic pathway leading directly to the trade test in as little as 3 to 6 months.'
  },
  {
    question: 'Can Canton assist municipalities and provincial departments with MFMA/PFMA compliance?',
    answer: 'Yes. Led by senior public governance specialists and accredited facilitators, we provide direct audit remediation, MFMA Unit Standard qualification delivery (SAQA 48965), SCM policy realignment, and QMS ISO 9001 standard operating procedures tailored specifically for municipal and government environments.'
  },
  {
    question: 'How do we request a formal RFQ or proposal for a SETA discretionary grant project?',
    answer: 'You can submit an inquiry via our online RFQ portal, contact our Polokwane Head Office at +27 15 291 1573, or email info@cantoncorporate.co.za. We provide detailed technical specifications, course curriculum outlines, compliance credentials, and cost matrices within 24 to 48 hours.'
  }
];
