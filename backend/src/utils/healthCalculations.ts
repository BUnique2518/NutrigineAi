// SEX: male = 1, female = 0

// 1. BMI
export const calculateBMI = (weightKg: number, heightCm: number) => {
  const heightM = heightCm / 100;
  return Number((weightKg / (heightM * heightM)).toFixed(2));
};


// 2. Body Fat %
export const calculateBodyFat = (
  bmi: number,
  age: number,
  sex: number, 
  isChild: boolean
) => {
  if (isChild) {
    return Number(
      (1.51 * bmi - 0.7 * age - 3.6 * sex + 1.4).toFixed(2)
    );
  }

  return Number(
    (1.2 * bmi + 0.23 * age - 10.8 * sex - 5.4).toFixed(2)
  );
};


// 3. BMR 
export const calculateBMR = (
  weightKg: number,
  heightCm: number,
  age: number,
  sex: number 
) => {
  if (sex === 1) {
    return Math.round(
      10 * weightKg + 6.25 * heightCm - 5 * age + 5
    );
  } else {
    return Math.round(
      10 * weightKg + 6.25 * heightCm - 5 * age - 161
    );
  }
};

// 4. Ideal Weight
export const calculateIdealWeight = (heightCm: number, sex: number) => {
  const heightInches = heightCm / 2.54;
  if (sex === 1) {
    return Number((50 + 2.3 * (heightInches - 60)).toFixed(2));
  } else {
    return Number((45.5 + 2.3 * (heightInches - 60)).toFixed(2));
  }
};

// 5. Ideal BMR
export const calculateIdealBMR = (
  idealWeight: number,
  heightCm: number,
  age: number,
  sex: number
) => {
  return calculateBMR(idealWeight, heightCm, age, sex);
};

// 6. MSF (Metabolic Stress Factor)
export const calculateMSF = (idealBmr: number, userBmr: number) => {
  return Number(
    (((idealBmr - userBmr) * 100) / idealBmr).toFixed(2)
  );
};

// 7. Stress Interpretation Scale
export const interpretStress = (msf: number) => {
  if (msf <= 10)
    return {
      level: "Excellent metabolism",
      risk: "Low",
      emoji: "🟢",
      msg: "Your metabolism is strong and balanced",
    };
  if (msf <= 25)
    return {
      level: "Slightly low metabolism",
      risk: "Mild",
      emoji: "🟡",
      msg: "Your body may be under mild energy stress",
    };
  if (msf <= 50)
    return {
      level: "Noticeably low metabolism",
      risk: "Moderate",
      emoji: "🟠",
      msg: "Your metabolism is slowing down — could increase stress risk",
    };
  return {
    level: "Very low metabolism",
    risk: "High",
    emoji: "🔴",
    msg: "High stress susceptibility due to low metabolic activity",
  };
};

// 8. Weight Loss Percentage (if initial weight available)
export const calculateWeightLossPercentage = (
  initialWeight: number,
  currentWeight: number,
  idealWeight: number
) => {
  if (!initialWeight) return null;

  const numerator = initialWeight - currentWeight;
  const denominator = initialWeight - idealWeight;

  if (denominator <= 0) return null;

  return Number(((numerator * 100) / denominator).toFixed(2));
};
