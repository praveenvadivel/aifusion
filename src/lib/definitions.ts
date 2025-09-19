export type User = {
  id: string;
  name: string;
  phoneNumber: string;
  dob: string; // Stored as string for simplicity, can be Date object
  healthData: HealthData;
};

export type HealthData = {
  bloodGroup: string;
  bloodPressure: {
    systolic: number;
    diastolic: number;
    lastChecked: string;
  };
  sugarLevel: {
    fasting: number;
    postPrandial: number;
    lastChecked: string;
  };
  healthIssues: string[]; // "backlogs"
};

export type GovtScheme = {
  schemeId: string;
  schemeName: string;
  description: string;
  eligibilityCriteria: string; // Simplified for this example
  schemeAmount: number;
  iconUrl?: string;
};
