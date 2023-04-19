import { z } from "zod";
import { adCreateSchema, adUpdateSchema } from "../serializers";

type AdCreateValues = z.infer<typeof adCreateSchema>;

type AdUpdateValues = z.infer<typeof adUpdateSchema>;
