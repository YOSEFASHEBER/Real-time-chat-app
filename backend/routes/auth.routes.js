import express from "express";
import { signUp, Logout, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);
router.get("/logout", Logout);
router.get("/login", login);
export default router;
