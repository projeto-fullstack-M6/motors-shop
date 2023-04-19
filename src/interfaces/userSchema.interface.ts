import { z } from "zod";
import {
  loginSchema,
  updateUserSchema,
  userResponseSchema,
  createUserSchema,
} from "../serializers";

type IUserLogin = z.infer<typeof loginSchema>;

type IUserRegister = z.infer<typeof createUserSchema>;

type IUserUpdate = z.infer<typeof updateUserSchema>;

type IUserResponse = z.infer<typeof userResponseSchema>;
