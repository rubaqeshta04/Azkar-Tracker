import React from "react";
import azkar from "../data/azkar";
import AzkarList from "../components/AzkarList";

export default function Home() {
  return (
    <div className="min-h-screen  bg-[#004d40] flex items-center justify-center p-5">
      <div className="bg-[#122d2d] rounded-lg p-6  shadow-lg  w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-white mt-5">
          أذكار اليوم
        </h1>
        <AzkarList azkar={azkar} />
      </div>
    </div>
  );
}
