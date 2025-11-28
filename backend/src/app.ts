import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import onboardingRoutes from "./routes/onboarding.routes";
import dashboardRoutes from "./routes/dashboard.route";

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/onboarding", onboardingRoutes);
app.use("/dashboard", dashboardRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running (TypeScript)...");
});

export default app;
