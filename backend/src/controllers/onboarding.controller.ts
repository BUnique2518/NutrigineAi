import { Request, Response } from "express";
import { getOnboardingData, saveOnboardingData } from "../services/onboarding.service";

export const submitOnboarding = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id; // coming from authMiddleware

    const { profile, fitnessGoals, healthProfile } = req.body;

    if (!profile || !fitnessGoals || !healthProfile) {
      return res.status(400).json({ error: "Incomplete onboarding data" });
    }

    const result = await saveOnboardingData(
      userId,
      profile,
      fitnessGoals,
      healthProfile
    );

    return res.json({
      message: "Onboarding completed successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const getOnboarding = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const data = await getOnboardingData(userId);

    return res.json({
      message: "Onboarding data fetched successfully",
      data,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
