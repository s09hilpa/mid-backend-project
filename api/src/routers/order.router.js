import express from "express";
import { getOrders, getOrderById } from "../controllers/order.controller.js";
import { optionalAuth } from "../middlewares/optionalAuth.middleware.js";

const router = express.Router();

router.use(optionalAuth);

router.get("/", getOrders);
router.get("/orders", getOrders);
router.get("/orders/:orderId", getOrderById);

export default router;
