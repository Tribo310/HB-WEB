"use client";
import React from "react";
import DodgeButton from "./DodgeButton";

const StartScreen = ({ onStart }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-pink-100 overflow-hidden p-4">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6 tracking-wide text-center">
        Үргэлжлүүлэх үү?
      </h1>
      <div className="relative w-48 sm:w-64 h-12 sm:h-16">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 sm:px-6 py-2 sm:py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-400 transition text-sm sm:text-base"
          onClick={onStart}
        >
          Тийм
        </button>
        <DodgeButton />
      </div>
    </div>
  );
};

export default StartScreen;
