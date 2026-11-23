import "dotenv/config";
import dns from "node:dns";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import userRouter from "./routes/userRoutes.js";

// إصلاح مشكلة DNS مع MongoDB Atlas
dns.setServers(["1.1.1.1", "8.8.8.8"]);

process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception Error:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection:", reason);
});

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// ملفات الصور
app.use("/images", express.static("uploads"));

// Routes
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working Successfully");
});

const startServer = async () => {
  try {
    console.log("جارِ الاتصال بقاعدة البيانات...");

    if (!process.env.MONGODB_URI) {
      throw new Error("متغير MONGODB_URI غير موجود في ملف .env!");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ Database Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`🚀 Server is Running on PORT ${PORT}`);
    });

  } catch (error) {
    console.error("❌ فشل في تشغيل السيرفر:", error.message);
  }
};

startServer();