import express from "express";
import apiRouter from "./api.js";

const router = express.Router();

// 👇 SINGLE API PREFIX HERE
router.use("/api", apiRouter);

export default router;
