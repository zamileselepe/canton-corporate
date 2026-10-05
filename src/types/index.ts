export interface Accreditation {
  id: string;
  code: string;
  name: string;
  accreditationNumber: string;
  authority: string;
  category: 'construction' | 'artisan' | 'local_gov' | 'business' | 'it';
  badgeLabel: string;
  description: string;
  qualifications: {
    title: string;
    saqaId?: string;
    nqfLevel: number;
    credits?: number;
    type: 'Learnership' | 'Apprenticeship' | 'Skills Programme' | 'Short Course';
  }[];
}

export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  deliverables: string[];
  frameworkAlignment: string[];
  ctaLabel: string;
}

export interface ClientTrackRecord {
  id: string;
  clientName: string;
  organizationType: 'TVET College' | 'Provincial Government' | 'SETA Authority' | 'National Department';
  scope: string;
  programmesDelivered: string[];
  location: string;
  metrics: string;
  impactSummary: string;
}

export interface BranchOffice {
  id: string;
  city: string;
  province: string;
  isHeadOffice: boolean;
  officeName: string;
  streetAddress: string;
  postalCode: string;
  telephones: string[];
  email: string;
  hours: string;
  mapQuery: string;
}

export interface RfqFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  serviceType: string;
  estimatedLearners?: string;
  province: string;
  message: string;
}
