import prisma from "../config/prisma";

export const saveOnboardingData = async (
  userId: number,
  profileData: any,
  fitnessData: any,
  healthData: any
) => {
  
  // 1. Upsert User Profile (Step 1)
  const profile = await prisma.userProfile.upsert({
    where: { userId },
    update:{... profileData,
    initialWeight: profileData.weightKg ?? undefined,
  },
    create: {
      userId,
      ...profileData,
      initialWeight: profileData.weightKg,
    },
  });

  // 2. Upsert Fitness Goals (Step 2)
  const fitnessGoals = await prisma.userFitnessGoals.upsert({
    where: { userId },
    update: fitnessData,
    create: {
      userId,
      ...fitnessData,
    },
  });

  // 3. Upsert Health Profile (Step 3)
  const healthProfile = await prisma.userHealthProfile.upsert({
    where: { userId },
    update: healthData,
    create: {
      userId,
      ...healthData,
    },
  });

  return {
    profile,
    fitnessGoals,
    healthProfile,
  };
};


export const getOnboardingData = async (userId: number) => {
  const profile = await prisma.userProfile.findUnique({
    where: { userId },
  });

  const fitnessGoals = await prisma.userFitnessGoals.findUnique({
    where: { userId },
  });

  const healthProfile = await prisma.userHealthProfile.findUnique({
    where: { userId },
  });

  return {
    profile,
    fitnessGoals,
    healthProfile,
  };
};
