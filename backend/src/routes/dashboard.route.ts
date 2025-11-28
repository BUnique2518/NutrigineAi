import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { generateDashboard } from "../controllers/dashboard.controller";

const router = Router();

router.get("/calculate", authMiddleware, generateDashboard);

export default router;
