import { z } from "zod";

export const addressCreateSchema = z.object({
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

export const addressUpdateSchema = z.object({
	zipcode: z.string().min(8).max(8).trim().optional(),
	state: z.string().min(2).trim().optional(),
	city: z.string().min(2).trim().optional(),
	street: z.string().min(2).trim().optional(),
	number: z.string().min(1).trim().optional(),
	complement: z
		.string()
		.nullable()
		.optional()
		.transform((value) => (value === null ? "" : value)),
});
