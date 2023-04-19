import { z } from "zod";
import { userResponseSchema } from "./user.schema";

export const adCreateSchema = z.object({
  brand: z.string().min(2).trim(),
  model: z.string().min(2).trim(),
  year: z.number().min(4),
  fuel: z.string().min(2).trim(),
  km: z.string().min(2),
  color: z.string().min(2).trim(),
  fipePrice: z.string().min(2).trim(),
  price: z.string().min(2).trim(),
  description: z.string().trim().nullable().optional(),
  isGoodToSale: z.boolean(),
});

export const adResponseSchema = adCreateSchema.extend({
  id: z.string().uuid(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: userResponseSchema,
});

export const adUpdateSchema = adCreateSchema.partial();
