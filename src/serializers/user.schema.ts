import { z } from "zod";
import { addressResponseSchema, createAddressSchema } from "./address.schema";

export const createUserSchema = z
  .object({
    name: z.string().min(1, "Deve conter pelo menos 1 caractere").trim(),
    email: z
      .string()
      .nonempty("Email é um campo obrigatório")
      .email("Email inválido")
      .trim(),
    cpf: z
      .string()
      .min(11, "Deve conter 11 caracteres")
      .max(11, "Deve conter no máximo 11 caracteres")
      .nonempty("CPF é um campo obrigatório")
      .trim(),
    cellPhone: z
      .string()
      .min(11, "Deve conter 11 caracteres")
      .max(11, "Deve conter 11 caracteres")
      .trim(),
    birthdate: z
      .string()
      .min(8, "Deve conter 8 caracteres")
      .max(8, "Deve conter 8 caracteres")
      .trim(),
    description: z.string().trim(),
    isBuyer: z.boolean(),
    password: z
      .string()
      .trim()
      .regex(/[A-Z]/, "Precisa conter pelo menos uma letra maiúscula")
      .regex(/([a-z])/, "Precisa conter pelo menos uma letra minúscula")
      .regex(/(\d)/, "Precisa conter pelo menos um número")
      .regex(/(\W)|_/, "Precisa conter pelo menos uma caracter especial")
      .regex(/.{8,}/, "Precisa conter pelo menos 8 caracters"),
    confirmPassword: z.string(),
    address: createAddressSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });

export const userResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).trim(),
  email: z
    .string()
    .nonempty("Email é um campo obrigatório")
    .email("Email inválido")
    .trim(),
  cpf: z.string().min(11).max(11).nonempty("CPF é um campo obrigatório").trim(),
  cellPhone: z.string().min(11).trim(),
  birthdate: z.string().min(8).trim(),
  password: z
    .string()
    .trim()
    .regex(/[A-Z]/, "Precisa conter pelo menos uma letra maiúscula")
    .regex(/([a-z])/, "Precisa conter pelo menos uma letra minúscula")
    .regex(/(\d)/, "Precisa conter pelo menos um número")
    .regex(/(\W)|_/, "Precisa conter pelo menos uma caracter especial")
    .regex(/.{8,}/, "Precisa conter pelo menos 8 caracters"),
  confirmPassword: z.string().min(8).trim(),
  description: z.string().trim(),
  isAdm: z.boolean(),
  isActive: z.boolean(),
  isBuyer: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  resetToken: z.string().nullable(),
  address: addressResponseSchema,
});

export const updateUserSchema = z.object({
  name: z.string().min(1).trim().optional().nullable(),
  email: z.string().email("Email inválido").trim().optional().nullable(),
  cpf: z.string().min(11).max(11).trim().optional().nullable(),
  cellPhone: z.string().min(11).trim().optional().nullable(),
  birthdate: z.string().min(8).trim().optional().nullable(),
  description: z.string().trim().optional().nullable(),
  isBuyer: z.boolean().optional().nullable(),
  password: z
    .string()
    .trim()
    .regex(/[A-Z]/, "Precisa conter pelo menos uma letra maiúscula")
    .regex(/([a-z])/, "Precisa conter pelo menos uma letra minúscula")
    .regex(/(\d)/, "Precisa conter pelo menos um número")
    .regex(/(\W)|_/, "Precisa conter pelo menos uma caracter especial")
    .regex(/.{8,}/, "Precisa conter pelo menos 8 caracters")
    .optional()
    .nullable(),
  address: createAddressSchema.optional().nullable(),
});


export const userLoginInfo = z.object({
  id: z.string().trim(),
  name: z.string().min(1).trim(),
  email: z
  .string()
  .nonempty("Email é um campo obrigatório")
  .email("Email inválido")
  .trim(),
  cpf: z.string().min(11).max(11).nonempty("CPF é um campo obrigatório").trim(),
  cellPhone: z.string().min(11).trim(),
  birthdate: z.string().min(8).trim(),
  description: z.string().trim(),
  isBuyer: z.boolean(),
  isAdm: z.boolean(),
  address: createAddressSchema.nullable(),
});

export const userForgotPasswordSchema = z.object({
  email: z
  .string()
  .nonempty("Email é um campo obrigatório")
  .email("Email inválido")
  .trim(),
});

export const forgotPasswordPageSchema = z
  .object({
    password: z
      .string()
      .trim()
      .regex(/[A-Z]/, "Precisa conter pelo menos uma letra maiúscula")
      .regex(/([a-z])/, "Precisa conter pelo menos uma letra minúscula")
      .regex(/(\d)/, "Precisa conter pelo menos um número")
      .regex(/(\W)|_/, "Precisa conter pelo menos uma caracter especial")
      .regex(/.{8,}/, "Precisa conter pelo menos 8 caracters")
      .optional()
      .nullable(),
    // confirmPassword: z.string().optional().nullable(),
  })
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Senhas não conferem",
  //   path: ["confirmPassword"],
  // });