import { z } from "zod";

/**
 * GET /api/events (query)
 */
export const EventListQuery = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

/**
 * GET /api/events/:id (params)
 */
export const EventIdParams = z.object({
  id: z.coerce.number().int().positive(),
});

/**
 * (future use)
 */
export const EventInput = z.object({
  title: z.string().min(1),
  price: z.coerce.number().min(0),
  currency: z.string().length(3),
  description: z.string().optional(),
});
