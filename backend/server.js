import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.routes.js";
import db from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/auth", authRoute);

db();

app.listen(port, async () => {
  console.log(`server is running on port ${port}`);
});
