import express from "express";
import eventRouter from "./event.router.js";

import authRouter from "./auth.router.js";
import cartRouter from "./cart.router.js";
import orderRouter from "./order.router.js";

const apiRouter = express.Router();
// ❌ NO /api HERE (IMPORTANT FIX)
apiRouter.use("/events", eventRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/cart", cartRouter);
apiRouter.use("/orders", orderRouter);
apiRouter.use("/api/orders", orderRouter);
export default apiRouter;
