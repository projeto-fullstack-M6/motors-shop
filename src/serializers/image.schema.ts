import { z } from "zod";
import { adResponseSchema } from "./ad.schema";

export const createImageSchema = z.object({
  image: z.string().trim().min(15),
});

export const imageResponseSchema = createImageSchema.extend({
  id: z.string().uuid(),
  announcement: adResponseSchema,
});

export const updateImageSchema = createImageSchema.partial();
