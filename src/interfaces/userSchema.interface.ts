import { z } from "zod";
import { loginSchema } from "../serializers";
import { registerSchema } from "../serializers";
import { updateProfileSchema } from "../serializers";

type LoginValues = z.infer<typeof loginSchema>;

type RegisterValues = z.infer<typeof registerSchema>;

type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
