import { Router } from "express";
import { getOnboarding, submitOnboarding } from "../controllers/onboarding.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/form", authMiddleware, submitOnboarding);
router.get("/form-data", authMiddleware, getOnboarding);

export default router;
