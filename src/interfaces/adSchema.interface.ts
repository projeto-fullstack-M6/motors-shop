import { z } from "zod";
import {
  adCreateSchema,
  adResponseSchema,
  adUpdateSchema,
} from "../serializers";

type IAdRegister = z.infer<typeof adCreateSchema>;

type IAdUpdate = z.infer<typeof adUpdateSchema>;

type IAdResponse = z.infer<typeof adResponseSchema>;
