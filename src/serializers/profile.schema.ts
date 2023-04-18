import { z } from "zod";

export const updateProfileSchema = z.object({
	name: z.string().min(1).trim().optional(),
	email: z.string().email("Email inválido").trim().optional(),
	cpf: z.string().min(11).max(11).trim().optional(),
	cellPhone: z.string().min(11).trim().optional(),
	birthdate: z.string().min(8).trim().optional(),
	description: z.string().trim().nullable().optional().optional(),
});
