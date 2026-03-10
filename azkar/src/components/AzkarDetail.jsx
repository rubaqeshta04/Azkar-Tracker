import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import azkar from "../data/azkar";
import Snackbar from "@mui/material/Snackbar";

export default function AzkarDetail() {
  const navigate = useNavigate();
  const { type } = useParams();
  const list = azkar[type] || [];

  // عدادات الأذكار
  const [counts, setCounts] = useState(() => {
    const saved = localStorage.getItem(`azkar_${type}`);
    if (saved) return JSON.parse(saved);
    return list.map((item) => item.count);
  });

  // Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarOpen = () => setSnackbarOpen(true);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  // التحقق من الانتهاء
  const isCompleted = counts.every((count) => count === 0);

  // فتح Snackbar عند الانتهاء
  useEffect(() => {
    if (isCompleted && counts.length > 0) {
      handleSnackbarOpen();
    }
  }, [isCompleted, counts]);

  // حفظ في localStorage
  useEffect(() => {
    if (counts.length > 0) {
      localStorage.setItem(`azkar_${type}`, JSON.stringify(counts));
    }
  }, [counts, type]);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#004d40] to-[#00796b] flex flex-col items-center p-6 dir-rtl">
      <div className="w-full max-w-md flex justify-between items-center mb-6">
        <button
          className="text-white font-bold flex items-center gap-2 hover:text-teal-300 hover:scale-105 hover:underline transition-all duration-300"
          onClick={() => navigate("/")}
        >
          <span>←</span> <span>رجوع</span>
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-2xl font-bold hover:bg-red-600 transition"
          onClick={() => setCounts(list.map((item) => item.count))}
        >
          إعادة
        </button>
      </div>

      <h1 className="text-3xl font-extrabold text-white mb-6">
        {type === "morning" ? "أذكار الصباح" : "أذكار المساء"}
      </h1>

      <ul className="w-full max-w-md space-y-4">
        {list.map((item, index) => (
          <li
            key={item.id}
            onClick={() => {
              setCounts((prev) => {
                const newCounts = [...prev];
                if (newCounts[index] > 0) newCounts[index] -= 1;
                return newCounts;
              });
            }}
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
              <div className="mt-2 text-green-700 font-bold text-sm flex items-center gap-1">
                ✓ تم الانتهاء
              </div>
            )}
          </li>
        ))}
      </ul>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        message="تقبل الله طاعتكم !  لقد أتممت جميع الأذكار."
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
