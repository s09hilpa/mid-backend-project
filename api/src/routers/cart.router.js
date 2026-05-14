import express from "express";
//import authMiddleware from "../middlewares/auth.middleware.js";
import { optionalAuth } from "../middlewares/optionalAuth.middleware.js";

import {
  getCart,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  checkout,
} from "../controllers/cart.controller.js";

const router = express.Router();
router.use(optionalAuth);

//router.use(authMiddleware);

//router.get("/", authMiddleware, getCart);

//router.post("/items", authMiddleware, addCartItem);

//router.put("/items/:itemId", authMiddleware, updateCartItem);
router.get("/", getCart);

router.post("/items", addCartItem);

router.put("/items/:itemId", updateCartItem);
router.delete("/items/:itemId", deleteCartItem);
router.post("/checkout", checkout);
export default router;
