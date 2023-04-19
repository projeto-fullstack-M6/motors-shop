import { z } from "zod";

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

export const adUpdateSchema = z.object({
	brand: z.string().min(2).optional(),
	model: z.string().min(2).optional(),
	year: z.number().min(4).optional(),
	fuel: z.string().min(2).optional(),
	km: z.string().min(2).optional(),
	color: z.string().min(2).optional(),
	fipePrice: z.string().min(2).optional(),
	price: z.string().min(2).optional(),
	description: z.string().trim().nullable().optional(),
	isGoodToSale: z.boolean().optional(),
});
