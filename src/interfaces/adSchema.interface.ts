import { z } from "zod";
import {
  adCreateSchema,
  adResponseSchema,
  adUpdateSchema,
} from "../serializers";

export type IAdRegister = z.infer<typeof adCreateSchema>;

export type IAdUpdate = z.infer<typeof adUpdateSchema>;

export type IAdResponse = z.infer<typeof adResponseSchema>;
