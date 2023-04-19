import { z } from "zod";
import { userResponseSchema } from "./user.schema";

export const createAddressSchema = z.object({
  zipcode: z
    .string()
    .min(8, "Deve conter 11 caracteres")
    .max(8, "Deve conter no máximo 11 caracteres")
    .trim(),
  state: z.string().min(2, "Deve conter pelo menos 2 caracteres").trim(),
  city: z.string().min(2, "Deve conter pelo menos 2 caracteres").trim(),
  street: z.string().min(2, "Deve conter pelo menos 2 caracteres").trim(),
  number: z.string().min(1, "Deve conter pelo menos 1 caractere").trim(),
  complement: z
    .string()
    .nullable()
    .optional()
    .transform((value) => (value === null ? "" : value)),
});

export const addressResponseSchema = createAddressSchema.extend({
  id: z.string().uuid(),
  // user: userResponseSchema,
});

export const updateAddressSchema = createAddressSchema.partial();
