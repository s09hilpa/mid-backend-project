import express from "express";
import { getEvents } from "#controllers/events.js";

const eventsRouter = express.Router();

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get paginated list of events
 *     description: Returns a paginated list of events. Pagination is zero-based.
 *     tags:
 *       - Events
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 0
 *           default: 0
 *         required: false
 *         description: Page number (zero-based)
 *     responses:
 *       200:
 *         description: Paginated list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       price:
 *                         type: number
 *                         example: 150
 *                       currency:
 *                         type: string
 *                         example: DKK
 *                       title:
 *                         type: string
 *                         example: Live Jazz Trio
 *                       description:
 *                         type: string
 *                         example: An intimate jazz evening.
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                 meta:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                       example: 0
 *                     pageSize:
 *                       type: integer
 *                       example: 5
 *                     totalItems:
 *                       type: integer
 *                       example: 245
 *                     totalPages:
 *                       type: integer
 *                       example: 49
 *       400:
 *         description: Invalid query parameters
 *       500:
 *         description: Server error
 */
eventsRouter.get("/", getEvents);

export default eventsRouter;