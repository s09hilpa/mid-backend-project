import express from "express";
import eventRouter from "./event.router.js";

const apiRouter = express.Router();

// ❌ NO /api HERE (IMPORTANT FIX)
apiRouter.use("/events", eventRouter);

export default apiRouter;
