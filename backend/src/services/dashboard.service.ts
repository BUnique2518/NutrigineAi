import prisma from "../config/prisma";
import {
  calculateBMI,
  calculateBodyFat,
  calculateBMR,
  calculateIdealWeight,
  calculateIdealBMR,
  calculateMSF,
  interpretStress,
  calculateWeightLossPercentage,
  nutrigenieScore
} from "../utils/healthCalculations";

export const getDashboardSummary = async (userId: number) => {
 
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
    },
  });

  const profile = await prisma.userProfile.findUnique({ where: { userId } });
  const fitnessGoals = await prisma.userFitnessGoals.findUnique({ where: { userId } });
  const healthProfile = await prisma.userHealthProfile.findUnique({ where: { userId } });

  const onboardingCompleted = !!profile && !!fitnessGoals && !!healthProfile;

  if (!onboardingCompleted) {
    return {
      user,
      profile,
      fitnessGoals,
      healthProfile,
      onboardingCompleted,
      computed: null,
      stored: null,
    };
  }



  if (!profile.weightKg || !profile.heightCm || !profile.age || !profile.gender) {
    throw new Error("Missing required profile fields — weight, height, age, gender");
  }

  // Convert gender → numeric sex
  const sex = profile.gender.toLowerCase() === "male" ? 1 : 0;

  // CALCULATE DASHBOARD METRICS

  const bmi = calculateBMI(profile.weightKg, profile.heightCm);
  const bodyFat = calculateBodyFat(bmi, profile.age, sex, profile.age < 18);
  const bmr = calculateBMR(profile.weightKg, profile.heightCm, profile.age, sex);

  const idealWeight = calculateIdealWeight(profile.heightCm, sex);
  const idealBmr = calculateIdealBMR(idealWeight, profile.heightCm, profile.age, sex);

  const msf = calculateMSF(idealBmr, bmr);
  const stress = interpretStress(msf);

  
const initialWeight = profile.initialWeight ?? profile.weightKg;

const weightLossPercentage = calculateWeightLossPercentage(
  initialWeight,
  profile.weightKg,
  idealWeight
);

const nutriScore = nutrigenieScore({
  bmi,
  bodyFat,
  bmr,
  idealBmr,
  currentWeight: profile.weightKg,
  idealWeight,
  msf,
  stress,
  sexFormat: profile.gender as "Male" | "Female" | "unknown" | undefined,
});


  //currently calculated metrics- fresh live values
  const computed = {
    bmi,
    bodyFat,
    bmr,
    idealWeight,
    idealBmr,
    msf,
    stress,
    weightLossPercentage,
    nutriScore
  };

  

  await prisma.dashboardMetrics.upsert({
    where: { userId },
    create: {
      userId,
      bmi,
      bodyFat,
      bmr,
      idealWeight,
      idealBmr,
      msf,
      stressLevel: stress.level,
      stressRisk: stress.risk,
      stressEmoji: stress.emoji,
      stressMsg: stress.msg,
      weightLossPercentage,
      nutriScore
    },
    update: {
      bmi,
      bodyFat,
      bmr,
      idealWeight,
      idealBmr,
      msf,
      stressLevel: stress.level,
      stressRisk: stress.risk,
      stressEmoji: stress.emoji,
      stressMsg: stress.msg,
      weightLossPercentage,
      nutriScore
    },
  });

  //last stored/updated metrics
  const stored = await prisma.dashboardMetrics.findUnique({
    where: { userId },
  });

  return {
    user,
    profile,
    fitnessGoals,
    healthProfile,
    onboardingCompleted,
    computed,
    stored,
  };
};
