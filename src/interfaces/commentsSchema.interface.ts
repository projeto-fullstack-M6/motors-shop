import { z } from "zod";
import {
  commentResponseSchema,
  createCommentSchema,
  updateCommentSchema,
} from "../serializers";

export type ICommentRegister = z.infer<typeof createCommentSchema>;

export type ICommentUpdate = z.infer<typeof updateCommentSchema>;

export type ICommentResponse = z.infer<typeof commentResponseSchema>;
