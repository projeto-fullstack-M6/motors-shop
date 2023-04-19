import { z } from "zod";
import {
  imageResponseSchema,
  createImageSchema,
  updateImageSchema,
} from "../serializers";

type IImageRegister = z.infer<typeof createImageSchema>;

type IImageUpdate = z.infer<typeof updateImageSchema>;

type IImageResponse = z.infer<typeof imageResponseSchema>;
