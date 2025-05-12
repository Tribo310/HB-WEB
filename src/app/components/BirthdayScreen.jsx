/*
File: components/BirthdayScreen.js
*/
"use client";

import React from "react";

const BirthdayScreen = ({ onRestart }) => (
  <div className="relative w-full h-screen flex flex-col items-center justify-center bg-white p-4">
    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center fade-in-up">
      🎉 HAPPY BIRTHDAY! 🎂
    </h1>
    <p
      className="text-base sm:text-lg text-center fade-in-up"
      style={{ animationDelay: "0.5s" }}
    >
      Чамд хэзээд инээмсэглэл, аз жаргал дүүрэн байг!
    </p>
    <button
      className="absolute bottom-4 right-4 px-4 py-2 bg-pink-500 text-white rounded shadow fade-in-up"
      style={{ animationDelay: "1s" }}
      onClick={onRestart}
    >
      Ахиад үзэх
    </button>

    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .fade-in-up {
        opacity: 0;
        animation: fadeInUp 0.8s ease-out forwards;
      }
    `}</style>
  </div>
);

export default BirthdayScreen;
