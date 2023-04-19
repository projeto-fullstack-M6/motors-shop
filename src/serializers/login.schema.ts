import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Digite um email válido").trim(),
  password: z.string().trim(),
});
