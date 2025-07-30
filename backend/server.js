import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.routes.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello Chat!");
});

app.use("/api/auth", authRoute);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
