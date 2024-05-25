import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";

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

app.listen(port, () => {
  console.log(`Server is running is port ${port}`);
});

app.use("/api/user", userRoutes);
