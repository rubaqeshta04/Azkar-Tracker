import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { HighContrastContext } from "../context/HighContrastContext";

// material ui
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

export default function Home() {
  const navigate = useNavigate();
  const { highContrast, toggleContrast } = useContext(HighContrastContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 dir-rtl 
      ${highContrast ? "bg-[#1F3A5F]" : "bg-gradient-to-br from-[#004d40] to-[#00796b]"}`}
    >
      <div className="absolute top-4 right-4">
        <button
          className="group relative w-full bg-white text-[#004d40] px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg rounded-3xl flex items-center justify-between hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-2xl border border-white/30"
          onClick={toggleContrast}
        >
          {highContrast ? "إلغاء الوضع المريح" : "وضع مريح للعين"}
        </button>
      </div>
      <div className="w-full max-w-md flex flex-col items-center mb-10">
        <div className="w-20 h-20 md:w-30 md:h-30 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl mb-4">
          <ImportContactsIcon sx={{ fontSize: 50 }} className="text-white" />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          تطبيق الأذكار
        </h1>
        <p className="text-teal-100 text-sm md:text-lg opacity-80 text-center">
          «أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ»
        </p>
      </div>

      <div className="w-full max-w-md space-y-4">
        {/* أذكار الصباح */}
        <button
          onClick={() => navigate("/morning")}
          className="group relative w-full bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl flex items-center justify-between hover:bg-white/20 transition-all duration-300 shadow-xl overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 p-2 bg-yellow-400/40 rounded-2xl flex items-center justify-center text-3xl">
              <SunnyIcon fontSize="medium" />
            </div>
            <div className="flex flex-col text-right ">
              <h2 className="text-xl font-bold text-white">أذكار الصباح</h2>
              <p className="text-sm text-teal-100/60  font-medium mt-2">
                ابدأ يومك بذكر الله
              </p>
            </div>
          </div>
          <span className="text-white/40 group-hover:translate-x-2.5 transition-transform">
            ←
          </span>
        </button>

        {/* أذكار المساء */}
        <button
          onClick={() => navigate("/evening")}
          className="group relative w-full bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl flex items-center justify-between hover:bg-white/20 transition-all duration-300 shadow-xl overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 p-2 bg-indigo-400/40 rounded-2xl flex items-center justify-center text-3xl">
              <BedtimeIcon fontSize="medium" />
            </div>
            <div className="flex flex-col text-right ">
              <h2 className="text-xl font-bold text-white">أذكار المساء</h2>
              <p className="text-sm text-teal-100/60 font-medium mt-2">
                اختم يومك بذكر الله
              </p>
            </div>
          </div>
          <span className="text-white/40 group-hover:translate-x-2.5 transition-transform">
            ←
          </span>
        </button>

        {/* أذكار النوم */}
        <button
          onClick={() => navigate("/sleep")}
          className="group relative w-full bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl flex items-center justify-between hover:bg-white/20 transition-all duration-300 shadow-xl overflow-hidden"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 p-2 bg-gray-800/60 rounded-2xl flex items-center justify-center text-3xl">
              <AlarmOnIcon fontSize="medium" />
            </div>

            <div className="flex flex-col text-right">
              <h2 className="text-xl font-bold text-white">أذكار النوم</h2>
              <p className="text-sm text-teal-100/60 font-medium mt-2">
                اجعل آخر كلماتك قبل النوم ذكر الله
              </p>
            </div>
          </div>
          <span className="text-white/40 group-hover:translate-x-2.5 transition-transform">
            ←
          </span>
        </button>
      </div>
    </div>
  );
}
