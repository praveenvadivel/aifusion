import type { User, GovtScheme } from './definitions';

export const sampleUser: User = {
  id: 'user-123',
  name: 'Jane Doe',
  phoneNumber: '123-456-7890',
  dob: '1985-05-15',
  healthData: {
    bloodGroup: 'O+',
    bloodPressure: {
      systolic: 120,
      diastolic: 80,
      lastChecked: '2023-10-26T10:00:00Z',
    },
    sugarLevel: {
      fasting: 90,
      postPrandial: 130,
      lastChecked: '2023-10-26T08:00:00Z',
    },
    healthIssues: ['High Cholesterol'],
  },
};

export const sampleSchemes: GovtScheme[] = [
  {
    schemeId: 'scheme-001',
    schemeName: 'National Health Protection Scheme',
    description: 'Provides health coverage to economically weaker sections. This scheme aims to provide health insurance coverage to 10 crore poor and vulnerable families.',
    eligibilityCriteria: 'Family income below a certain threshold. Specific health conditions may provide additional benefits.',
    schemeAmount: 500000,
  },
  {
    schemeId: 'scheme-002',
    schemeName: 'Senior Citizen Health Insurance Scheme',
    description: 'A top-up health insurance plan for senior citizens aged 60 and above, covering critical illnesses.',
    eligibilityCriteria: 'Must be an Indian citizen aged 60 or above. Pre-existing conditions are covered after a waiting period.',
    schemeAmount: 100000,
  },
  {
    schemeId: 'scheme-003',
    schemeName: 'Maternity Benefit Program',
    description: 'A cash incentive program for pregnant women and lactating mothers for the first live birth.',
    eligibilityCriteria: 'Pregnant women and lactating mothers for their first child. Must register pregnancy at an approved health facility.',
    schemeAmount: 6000,
  },
  {
    schemeId: 'scheme-004',
    schemeName: 'Diabetes Care Initiative',
    description: 'Provides financial assistance and support for individuals diagnosed with Type 2 diabetes.',
    eligibilityCriteria: 'Diagnosed with Type 2 diabetes. Age between 30 and 65.',
    schemeAmount: 25000,
  },
];
