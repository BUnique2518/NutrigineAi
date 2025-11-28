import { Router } from "express";
import { loginUser, logoutUser, refreshToken, registerUser } from "../controllers/auth.controller";

const router = Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshToken);
router.post("/logout", logoutUser);


export default router;
