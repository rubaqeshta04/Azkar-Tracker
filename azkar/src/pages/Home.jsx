import React from "react";
import { useNavigate } from "react-router-dom";

// material ui
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#004d40] to-[#00796b] flex flex-col items-center justify-center p-6 dir-rtl"
      dir="rtl"
    >
      {/* شعار وترويسة */}
      <div className="w-full max-w-md text-center mb-10">
        <div className="inline-block px-6 py-5 bg-white/10 backdrop-blur-md rounded-3xl mb-4 shadow-2xl">
          <span className="text-8xl flex items-center justify-center text-white">
            <ImportContactsIcon fontSize="large" />
          </span>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          تطبيق الأذكار
        </h1>
        <p className="text-teal-100 text-lg opacity-80">
          «أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ»
        </p>
      </div>

      {/* الأزرار */}
      <div className="w-full max-w-md space-y-4">
        {/* أذكار الصباح */}
        <button
          onClick={() => navigate("/morning")}
          className="group relative w-full bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl flex items-center justify-between hover:bg-white/20 transition-all duration-300 shadow-xl overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 p-2 text-[#004d40] bg-yellow-400/50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
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
            <div className="w-14 h-14 p-2 text-[#004d40] bg-indigo-400/40 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
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
            <div className="w-14 h-14 p-2 text-[#ffeb3b] bg-[#000000] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
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

      {/* Footer */}
      <footer className="mt-12 text-white/40 text-sm font-medium">
        تم التطوير بكل ❤️ لخدمتكم
      </footer>
    </div>
  );
}
