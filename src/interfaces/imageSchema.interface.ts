import { z } from "zod";
import {
  imageResponseSchema,
  createImageSchema,
  updateImageSchema,
} from "../serializers";

export type IImageRegister = z.infer<typeof createImageSchema>;

export type IImageUpdate = z.infer<typeof updateImageSchema>;

export type IImageResponse = z.infer<typeof imageResponseSchema>;
