import { z } from "zod";
import { userResponseSchema } from "./user.schema";
import { adResponseSchema } from "./ad.schema";

export const createCommentSchema = z.object({
	text: z.string().trim().min(3),
});

export const commentResponseSchema = createCommentSchema.extend({
	id: z.string().uuid(),
	createdAt: z.date(),
	updatedAt: z.date(),
	user: userResponseSchema,
	announcement: adResponseSchema,
});

export const updateCommentSchema = createCommentSchema.partial();
