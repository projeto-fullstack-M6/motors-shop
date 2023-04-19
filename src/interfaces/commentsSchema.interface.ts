import { z } from "zod";
import {
  commentResponseSchema,
  createCommentSchema,
  updateCommentSchema,
} from "../serializers";

type ICommentRegister = z.infer<typeof createCommentSchema>;

type ICommentUpdate = z.infer<typeof updateCommentSchema>;

type ICommentResponse = z.infer<typeof commentResponseSchema>;
