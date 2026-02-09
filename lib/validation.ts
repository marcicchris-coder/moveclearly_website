import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(30),
  type: z.string().min(2).max(80),
  source: z.string().min(2).max(120),
  message: z.string().max(2000).optional().default(''),
  locationInterest: z.string().max(140).optional().default(''),
  website: z.string().max(0).optional()
});

export type LeadInput = z.infer<typeof leadSchema>;
