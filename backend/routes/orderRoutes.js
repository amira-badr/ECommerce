import express from "express";
import {
  placeOrder,
  verifyOrder,
  userOrder,
  listOrder,
  updateStatus
} from "../controllers/orderControllers.js";

import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrder);
orderRouter.post("/list", listOrder);
orderRouter.post("/status", updateStatus);

export default orderRouter;