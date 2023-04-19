import { z } from "zod";
import {
  addressResponseSchema,
  createAddressSchema,
  updateAddressSchema,
} from "../serializers";

type IAddressRegister = z.infer<typeof createAddressSchema>;

type IAddressUpdate = z.infer<typeof updateAddressSchema>;

type IAddressResponse = z.infer<typeof addressResponseSchema>;
