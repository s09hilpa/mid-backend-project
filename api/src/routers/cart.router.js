import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  getCart,
  addCartItem,
  updateCartItem,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", authMiddleware, getCart);

router.post("/items", authMiddleware, addCartItem);

router.put("/items/:itemId", authMiddleware, updateCartItem);

export default router;
