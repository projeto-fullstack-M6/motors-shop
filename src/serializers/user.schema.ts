import { z } from "zod";
import { createAddressSchema } from "./address.schema";

export const createUserSchema = z
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
    description: z.string().trim().nullable(),
    isBuyer: z.boolean(),
    password: z
      .string()
      .trim()
      .regex(/[A-Z]/, "Must contain a capital letter")
      .regex(/([a-z])/, "Must contain a lowercase")
      .regex(/(\d)/, "Must contain a number")
      .regex(/(\W)|_/, "Must contain a special character")
      .regex(/.{8,}/, "Must contain at least 8 characters"),
    confirmPassword: z.string().min(8).trim(),
    address: createAddressSchema.nullable(),
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
    .regex(/[A-Z]/, "Must contain a capital letter")
    .regex(/([a-z])/, "Must contain a lowercase")
    .regex(/(\d)/, "Must contain a number")
    .regex(/(\W)|_/, "Must contain a special character")
    .regex(/.{8,}/, "Must contain at least 8 characters"),
  confirmPassword: z.string().min(8).trim(),
  description: z.string().trim().nullable(),
  isAdm: z.boolean(),
  isActive: z.boolean(),
  isBuyer: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

export const updateUserSchema = z.object({
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
  password: z
    .string()
    .trim()
    .regex(/[A-Z]/, "Must contain a capital letter")
    .regex(/([a-z])/, "Must contain a lowercase")
    .regex(/(\d)/, "Must contain a number")
    .regex(/(\W)|_/, "Must contain a special character")
    .regex(/.{8,}/, "Must contain at least 8 characters"),
  address: createAddressSchema.nullable(),
});
