"use client";

export default function NutriGenScore({ score }: { score: number }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius; // ~263.89
  // Calculate the offset for the SVG stroke
  const offset = circumference * (1 - score / 100);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
      <h3 className="text-white font-bold mb-6 pl-6" >NutriGen Score</h3>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-48 h-48 rounded-full border-8 border-slate-700 flex items-center justify-center relative mb-6 md:mb-0">
          <svg className="w-full h-full absolute" viewBox="0 0 100 100">
            <circle
              className="text-slate-700"
              stroke="currentColor"
              strokeWidth="8"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
            />
            <circle
              className="text-green-400"
              stroke="currentColor"
              strokeWidth="8"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              strokeDasharray={circumference}
              // Made the SVG progress ring dynamic
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <p className="text-6xl font-bold text-green-400">{score}</p>
        </div>
        <div className="flex-1 md:ml-12 text-center md:text-left">
          <p className="text-3xl font-bold text-white leading-relaxed">
            Take care of your body. It's the only place you have to live.
          </p>
        </div>
      </div>
    </div>
  );
}