import express from "express";
import { listEvents, getEvent } from "#controllers/event.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 */
router.get("/", listEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: Get event by id
 *     tags: [Events]
 */
router.get("/:id", getEvent);

export default router;
