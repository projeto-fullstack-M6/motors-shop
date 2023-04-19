import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Digite um email válido").trim(),
  password: z
    .string()
    .trim()
    .regex(/[A-Z]/, "Precisa conter pelo menos uma letra em caixa alta")
    .regex(/([a-z])/, "Precisa conter pelo menos uma letra em caixa baixa")
    .regex(/(\d)/, "Precisa conter pelo menos um número")
    .regex(/(\W)|_/, "Precisa conter pelo menos uma caracter especial")
    .regex(/.{8,}/, "Precisa conter pelo menos 8 caracters"),
});
