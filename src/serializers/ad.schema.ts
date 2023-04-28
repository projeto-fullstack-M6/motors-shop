import { z } from "zod";
import { userResponseSchema } from "./user.schema";

export const adCreateSchema = z.object({
  brand: z.string().min(3).trim(),
  model: z.string().min(3).trim(),
  year: z.string().min(4).max(4).optional().nullable(),
  fuel: z.string().min(2).trim().optional().nullable(),
  km: z.string().min(2),
  color: z.string().min(2).trim(),
  fipePrice: z.string().min(2).trim().optional().nullable(),
  price: z.string().min(2).trim(),
  description: z.string().trim().nullable().optional(),
});

export const adResponseSchema = adCreateSchema.extend({
  id: z.string().uuid(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  isGoodToSale: z.boolean(),
  user: userResponseSchema.nullable(),
});

export const adUpdateSchema = adCreateSchema.partial();
