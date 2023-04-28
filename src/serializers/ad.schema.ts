import { z } from "zod";

export const adCreateSchema = z.object({
  brand: z.string().min(3).trim(),
  model: z.string().min(3).trim(),
  year: z.string().min(4).max(4),
  fuel: z.string().min(2).trim(),
  km: z.string().min(2),
  color: z.string().min(2).trim(),
  fipePrice: z.string().min(2).trim(),
  price: z.string().min(2).trim(),
  description: z.string().trim().nullable().optional(),
});

export const adResponseSchema = adCreateSchema.extend({
  id: z.string().uuid(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const adUpdateSchema = adCreateSchema.partial();
