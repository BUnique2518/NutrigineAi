"use client";


interface BmiMeterProps {
  value: number;
  status: string;
}

// Helper function to get dynamic styles based on BMI value
const getBmiDetails = (value: number) => {
  if (value < 18.5) {
    return {
      color: "text-blue-400", 
      percent: 25,
    };
  }
  if (value < 25) {
    return {
      color: "text-green-400",
      percent: 50,
    };
  }
  if (value < 30) {
    return {
      color: "text-yellow-400", 
      percent: 75,
    };
  }
  return {
    color: "text-red-400", 
    percent: 100,
  };
};

export default function BmiMeter({ value, status }: BmiMeterProps) {
  // Get dynamic color and percent from the helper function
  const { color, percent } = getBmiDetails(value);

  const radius = 42;
  const circumference = 2 * Math.PI * radius; // ~263.89
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 h-full flex flex-col">
      <h3 className="text-white font-semibold mb-1">BMI Meter</h3>
      <p className="text-slate-400 text-sm mb-6">
        Your current Body Mass Index
      </p>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-40 h-40 rounded-full border-10 border-slate-700 flex items-center justify-center relative">
          {/* Background Ring */}
          <svg className="w-full h-full absolute" viewBox="0 0 100 100">
            <circle
              className="text-white/10" 
              strokeWidth="10"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
            />
            {/* Value Ring */}
            <circle
              className={color} // DYNAMIC COLOR
              stroke="currentColor"
              strokeWidth="10"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset} // DYNAMIC OFFSET
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          {/* Text Inside */}
          <div className="flex flex-col items-center justify-center">
            <p className={`text-5xl font-bold ${color}`}>{value}</p> 
            <p className="text-slate-400 text-sm mt-1">{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}