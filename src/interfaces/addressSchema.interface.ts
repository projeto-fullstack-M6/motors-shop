import { z } from "zod";
import { addressCreateSchema } from "../serializers";

type AddressCreateValues = z.infer<typeof addressCreateSchema>;
