import { z } from "zod";

/**
 * POST /api/auth/signup
 */
export const SignupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  mobile: z.coerce.number(),
  password: z.string().min(6),
});

/**
 * POST /api/auth/login
 */
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
