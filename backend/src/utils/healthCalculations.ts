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





// -------------------------------------------
// 9. NUTRIGENIE SCORE SYSTEM
// -------------------------------------------

export interface NutriGenieInput {
  bmi: number;
  bodyFat: number;
  bmr: number;
  idealBmr: number;
  currentWeight: number;
  idealWeight: number;
  msf: number;
  stress: {
    level: string;
    risk: string;
  };
  sexFormat?: "Male" | "Female" | "unknown";
}

// Sub-scores
export const bmiScore = (bmi: number): number => {
  if (bmi < 18.5) return 40;
  if (bmi <= 24.9) return 100;
  if (bmi <= 29.9) return 70;
  if (bmi <= 34.9) return 50;
  return 30;
};

export const bodyFatScore = (bodyFat: number, sex: string): number => {
  if (sex === "Male") {
    if (bodyFat < 8) return 50;
    if (bodyFat <= 20) return 100;
    if (bodyFat <= 25) return 70;
    return 40;
  }
  if (sex === "Female") {
    if (bodyFat < 15) return 50;
    if (bodyFat <= 30) return 100;
    if (bodyFat <= 35) return 70;
    return 40;
  }
  return 60;
};

export const bmrScore = (bmr: number, idealBmr: number): number => {
  if (!idealBmr) return 0;
  const ratio = bmr / idealBmr;
  if (ratio >= 0.95 && ratio <= 1.05) return 100;
  if (ratio >= 0.85 && ratio <= 1.15) return 80;
  if (ratio >= 0.75 && ratio <= 1.25) return 60;
  return 40;
};

export const idealWeightScore = (current: number, ideal: number): number => {
  const diff = Math.abs(current - ideal);
  if (diff <= 2) return 100;
  if (diff <= 5) return 80;
  if (diff <= 10) return 60;
  return 40;
};

export const msfScore = (msf: number): number => {
  if (msf <= 10) return 100;
  if (msf <= 25) return 80;
  if (msf <= 50) return 60;
  return 40;
};

export const stressScore = (level: string, risk: string): number => {
  switch (risk) {
    case "Low": return 100;
    case "Mild": return 80;
    case "Moderate": return 60;
    case "High": return 40;
    default: return 50;
  }
};

// Final NutriGenie Score
export const nutrigenieScore = (input: NutriGenieInput): number => {
  const bmiS         = bmiScore(input.bmi);
  const bfS          = bodyFatScore(input.bodyFat, input.sexFormat || "unknown");
  const bmrS         = bmrScore(input.bmr, input.idealBmr);
  const idealWeightS = idealWeightScore(input.currentWeight, input.idealWeight);
  const msfS         = msfScore(input.msf);
  const stressS      = stressScore(input.stress.level, input.stress.risk);

  const rawScore =
      bmiS         * 0.20 +
      bfS          * 0.25 +
      bmrS         * 0.20 +
      idealWeightS * 0.15 +
      msfS         * 0.10 +
      stressS      * 0.10;

  return Math.round(Math.max(0, Math.min(100, rawScore)));
};
