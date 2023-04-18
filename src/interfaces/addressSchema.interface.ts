import { z } from "zod";
import { addressCreateSchema, addressUpdateSchema } from "../serializers";

type AddressCreateValues = z.infer<typeof addressCreateSchema>;

type AddressUpdateValues = z.infer<typeof addressUpdateSchema>;
