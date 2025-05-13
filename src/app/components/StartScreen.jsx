"use client";

import React, { useEffect } from "react";
import { DodgeButton } from "./DodgeButton";

const StartScreen = ({ musicRef, onStart }) => {
  useEffect(() => {
    // Initialize background music
    musicRef.current = new Audio("/music.mp3");
    musicRef.current.loop = true;
  }, [musicRef]);

  const handleStart = () => {
    musicRef.current?.play();
    onStart();
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-6">
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-pink-600 mb-6">
          Үргэлжлүүлэх үү?
        </h1>
        <div className="flex justify-center">
          <div className="relative w-40 sm:w-48 h-12 sm:h-14">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-5 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              onClick={handleStart}
            >
              Тийм
            </button>
            <DodgeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
