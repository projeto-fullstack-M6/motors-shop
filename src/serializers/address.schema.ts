import { z } from "zod";
import { userResponseSchema } from "./user.schema";

export const createAddressSchema = z.object({
  zipcode: z.string().min(8).max(8).trim(),
  state: z.string().min(2).trim(),
  city: z.string().min(2).trim(),
  street: z.string().min(2).trim(),
  number: z.string().min(1).trim(),
  complement: z
    .string()
    .nullable()
    .optional()
    .transform((value) => (value === null ? "" : value)),
});

export const addressResponseSchema = createAddressSchema.extend({
  id: z.string().uuid(),
  user: userResponseSchema,
});

export const updateAddressSchema = createAddressSchema.partial();
