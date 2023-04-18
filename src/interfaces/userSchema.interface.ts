import { z } from "zod";
import { loginSchema } from "../serializers";
import { registerSchema } from "../serializers";

type LoginValues = z.infer<typeof loginSchema>;

type RegisterValues = z.infer<typeof registerSchema>;
