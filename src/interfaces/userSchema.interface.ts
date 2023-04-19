import { z } from "zod";
import {
  loginSchema,
  updateUserSchema,
  userResponseSchema,
  createUserSchema,
} from "../serializers";

export type IUserLogin = z.infer<typeof loginSchema>;

export type IUserRegister = z.infer<typeof createUserSchema>;

export type IUserUpdate = z.infer<typeof updateUserSchema>;

export type IUserResponse = z.infer<typeof userResponseSchema>;
