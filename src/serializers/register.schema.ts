import { z } from "zod";
import { addressCreateSchema } from "../serializers";

export const registerSchema = z
	.object({
		name: z.string().min(1).trim(),
		email: z
			.string()
			.nonempty("Email é um campo obrigatório")
			.email("Email inválido")
			.trim(),
		cpf: z
			.string()
			.min(11)
			.max(11)
			.nonempty("CPF é um campo obrigatório")
			.trim(),
		cellPhone: z.string().min(11).trim(),
		birthdate: z.string().min(8).trim(),
		description: z.string().trim().nullable().optional(),
		address: addressCreateSchema.nullable().optional(),
		isBuyer: z.boolean().optional(),
		isSeller: z.boolean().optional(),
		password: z
			.string()
			.trim()
			.regex(/[A-Z]/, "Must contain a capital letter")
			.regex(/([a-z])/, "Must contain a lowercase")
			.regex(/(\d)/, "Must contain a number")
			.regex(/(\W)|_/, "Must contain a special character")
			.regex(/.{8,}/, "Must contain at least 8 characters"),
		confirmPassword: z.string().min(8).trim(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Senhas não conferem",
		path: ["confirmPassword"],
	});
