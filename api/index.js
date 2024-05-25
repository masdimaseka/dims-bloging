import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config(); // untuk mengamankan link mongo

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running is port ${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Sever Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
