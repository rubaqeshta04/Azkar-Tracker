import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HighContrastContext } from "../context/HighContrastContext";
import azkar from "../data/azkar";
import Snackbar from "@mui/material/Snackbar";

export default function AzkarDetail() {
  const navigate = useNavigate();
  const { highContrast } = useContext(HighContrastContext);
  const { type } = useParams();

  const list = azkar[type] || [];

  const [counts, setCounts] = useState(() => {
    const saved = localStorage.getItem(`azkar_${type}`);
    if (saved) return JSON.parse(saved);
    return list.map((item) => item.count);
  });

  // Snackbar عند الانتهاء
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarOpen = () => setSnackbarOpen(true);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const isCompleted = counts.every((count) => count === 0);

  useEffect(() => {
    if (isCompleted && counts.length > 0) {
      handleSnackbarOpen();
    }
  }, [isCompleted, counts]);

  // حفظ العدادات في localStorage
  useEffect(() => {
    if (counts.length > 0) {
      localStorage.setItem(`azkar_${type}`, JSON.stringify(counts));
    }
  }, [counts, type]);

  const titles = {
    morning: "أذكار الصباح",
    evening: "أذكار المساء",
    sleep: "أذكار النوم",
  };

  return (
    <div
      className={`min-h-screen p-6 flex flex-col items-center ${
        highContrast ? "bg-[#1F3A5F] text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full max-w-md flex justify-between items-center mb-6">
        <button
          className="text-white font-bold flex items-center gap-2 hover:text-teal-300 hover:scale-105 hover:underline transition-all duration-300"
          onClick={() => navigate("/")}
        >
          ← رجوع
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-2xl font-bold hover:bg-red-600 transition"
          onClick={() => {
            const reset = list.map((item) => item.count);
            setCounts(reset);
            localStorage.setItem(`azkar_${type}`, JSON.stringify(reset));
          }}
        >
          إعادة
        </button>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
        {titles[type]}
      </h1>

      {/* قائمة الأذكار */}
      <ul className="w-full max-w-md space-y-4 mx-auto">
        {list.map((item, index) => (
          <li
            key={item.id}
            onClick={() =>
              setCounts((prev) => {
                const newCounts = [...prev];
                if (newCounts[index] > 0) newCounts[index] -= 1;
                return newCounts;
              })
            }
            className={`cursor-pointer p-5 rounded-2xl shadow-md transition-all ${
              counts[index] === 0
                ? "bg-green-200 border-green-400 opacity-70"
                : "bg-white border border-transparent hover:border-[#00897b]"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-[#004d40]">{item.title}</span>
              <span className="font-bold text-[#004d40]">{counts[index]}</span>
            </div>
            <p className="text-[#004d40]/80 text-right">{item.description}</p>
            {counts[index] === 0 && (
              <div className="mt-2 text-green-700 font-bold text-sm flex items-center gap-1 justify-center">
                ✓ تم الانتهاء
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        message="تقبل الله طاعتكم! لقد أتممت جميع الأذكار."
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        ContentProps={{
          sx: {
            backgroundColor: "#2e7d32",
            color: "#d4e157",
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
          },
        }}
      />
    </div>
  );
}
