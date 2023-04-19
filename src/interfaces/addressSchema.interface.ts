import { z } from "zod";
import {
  addressResponseSchema,
  createAddressSchema,
  updateAddressSchema,
} from "../serializers";

export type IAddressRegister = z.infer<typeof createAddressSchema>;

export type IAddressUpdate = z.infer<typeof updateAddressSchema>;

export type IAddressResponse = z.infer<typeof addressResponseSchema>;
