'use server';
/**
 * @fileOverview Recommends eligible government health schemes based on user health data.
 *
 * - recommendEligibleGovtSchemes - A function that analyzes user health data and returns a list of applicable government health schemes.
 * - RecommendEligibleGovtSchemesInput - The input type for the recommendEligibleGovtSchemes function.
 * - RecommendEligibleGovtSchemesOutput - The return type for the recommendEligibleGovtSchemes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HealthDataSchema = z.object({
  bloodGroup: z.string().describe('The user\'s blood group.'),
  bloodPressureSystolic: z.number().describe('The user\'s systolic blood pressure.'),
  bloodPressureDiastolic: z.number().describe('The user\'s diastolic blood pressure.'),
  sugarLevelFasting: z.number().describe('The user\'s fasting blood sugar level.'),
  sugarLevelPostPrandial: z.number().describe('The user\'s post-prandial blood sugar level.'),
  healthIssues: z.array(z.string()).describe('A list of the user\'s health issues.'),
  age: z.number().describe('The age of the user.'),
  income: z.number().describe('The annual income of the user.'),
});

const GovtSchemeSchema = z.object({
  schemeId: z.string().describe('The unique identifier for the scheme.'),
  schemeName: z.string().describe('The name of the government scheme.'),
  description: z.string().describe('A brief description of the scheme.'),
  eligibilityCriteria: z.string().describe('The eligibility criteria for the scheme.'),
  schemeAmount: z.number().describe('The amount of financial assistance provided by the scheme.'),
});

const RecommendEligibleGovtSchemesInputSchema = z.object({
  healthData: HealthDataSchema.describe('The user\'s health data.'),
  schemes: z.array(GovtSchemeSchema).describe('A list of available government schemes.'),
});
export type RecommendEligibleGovtSchemesInput = z.infer<typeof RecommendEligibleGovtSchemesInputSchema>;

const EligibleSchemeSchema = z.object({
  schemeId: z.string().describe('The unique identifier for the scheme.'),
  schemeName: z.string().describe('The name of the government scheme.'),
  eligibleAmount: z.number().describe('The amount the user is eligible for under the scheme.'),
  notes: z.string().optional().describe('Any additional notes or information about the eligibility.'),
});

const RecommendEligibleGovtSchemesOutputSchema = z.array(EligibleSchemeSchema).describe(
  'A list of government schemes the user is eligible for, with the eligible amount for each scheme.'
);
export type RecommendEligibleGovtSchemesOutput = z.infer<typeof RecommendEligibleGovtSchemesOutputSchema>;

export async function recommendEligibleGovtSchemes(
  input: RecommendEligibleGovtSchemesInput
): Promise<RecommendEligibleGovtSchemesOutput> {
  return recommendEligibleGovtSchemesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendEligibleGovtSchemesPrompt',
  input: {schema: RecommendEligibleGovtSchemesInputSchema},
  output: {schema: RecommendEligibleGovtSchemesOutputSchema},
  prompt: `Based on the following health data and a list of available government schemes, determine which schemes the user is eligible for and the eligible amount for each scheme.\n\nHealth Data:\nBlood Group: {{{healthData.bloodGroup}}}\nBlood Pressure: {{{healthData.bloodPressureSystolic}}}/{{{healthData.bloodPressureDiastolic}}}\nSugar Level (Fasting): {{{healthData.sugarLevelFasting}}}\nSugar Level (Post-Prandial): {{{healthData.sugarLevelPostPrandial}}}\nHealth Issues: {{#each healthData.healthIssues}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}\nAge: {{{healthData.age}}}\nIncome: {{{healthData.income}}}\n\nGovernment Schemes:\n{{#each schemes}}\nScheme Name: {{{this.schemeName}}}\nDescription: {{{this.description}}}\nEligibility Criteria: {{{this.eligibilityCriteria}}}\nScheme Amount: {{{this.schemeAmount}}}\n{{/each}}\n\nReturn a list of eligible schemes with the scheme name and eligible amount. Add notes if the user does not qualify for the scheme or specific conditions apply.\n`,
});

const recommendEligibleGovtSchemesFlow = ai.defineFlow(
  {
    name: 'recommendEligibleGovtSchemesFlow',
    inputSchema: RecommendEligibleGovtSchemesInputSchema,
    outputSchema: RecommendEligibleGovtSchemesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
