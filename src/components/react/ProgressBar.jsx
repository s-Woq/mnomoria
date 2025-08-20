import { useState } from "react";

export default function ActiveRecallCard() {
  const totalSessions = 5;
  const [completed, setCompleted] = useState(1);

  const radius = 40;
  const circumference = Math.PI * radius; // only half circle length
  const progress = (completed / totalSessions) * circumference;

  return (
    <div className="flex justify-between items-center  rounded-lg p-4 h-48 relative overflow-hidden  w-full">
      <div><div className="w-41 h-22 relative  left-4 top-5 ">
        <svg width="100%" height="100%" viewBox="0 0 100 50">
          {/* Background half circle */}
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            stroke="rgba(20,20,20,0.4)"
            strokeWidth="10"
            fill="none"
          />
          {/* Progress half circle */}
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            stroke="white"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
          {completed * 5}min
        </div>
      </div></div>
      <div className=" flex flex-col align-middle text-center">
        <h2 className="text-xl font-bold text-white">Active Recall</h2>
        <p className="text-white">
          {completed}/{totalSessions} Sessions
        </p>
        <button
          onClick={() => setCompleted((c) => Math.min(totalSessions, c + 1))}
          className="mt-2 bg-black text-white m-6 p-3 rounded-xl hover:scale-110  duration-1000 "
        >
          Add Session
        </button>
      </div>
    </div>
  );
}
