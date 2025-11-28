import { Request, Response } from "express";
import { getDashboardSummary } from "../services/dashboard.service";

export const generateDashboard = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const data = await getDashboardSummary(userId);
    return res.json(data);

  } catch (err: any) {
    console.error("Dashboard error:", err);
    return res.status(500).json({ error: err.message });
  }
};
