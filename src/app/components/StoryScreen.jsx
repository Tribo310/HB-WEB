"use client";

import React, { useState, useEffect } from "react";

const sentences = [
  "Өглөөний анхны нарны туяа чиний инээмсэглэлтэй зэрэгцэн мандлаа.",
  "Өдөр бүхэлдээ чиний аз жаргалын шуугианаар дүүрнэ гэдэгт итгэж байна.",
  "Энэ өдөр дэлхийд ганцхан чамайг төрүүлсэн агуу бэлэг.",
  "Өнгөрсөн бүх дурсамж чиний дэргэд илүү өнгөлөг санагддаг.",
  "Чиний мөрөөдөл бүр биелэн, аз жаргалын цэцэг дэлгэрэх болтугай.",
  "Өнөөдөр чиний амьдралын шинэ хуудсыг нээж байна.",
  "Хөөрхөн санаж явсан тэр мөчүүд бүгд чинийх.",
  "Happy Birthday To You! Чамд үргэлж аз жаргал, хайр дүүрэн байг!",
];

const StoryScreen = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sentences.length) {
      const timer = setTimeout(() => setIndex((prev) => prev + 1), 4000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [index, onComplete]);

  const sentence = sentences[index] || "";
  const words = sentence.split(" ");

  let cumulative = 0;
  const hearts = Array.from({ length: 30 });

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4 overflow-hidden">
      {/* ❤️ Hearts falling */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* ✨ Word display */}
      {index < sentences.length && (
        <h2
          key={index}
          className="flex flex-wrap justify-center text-xl sm:text-2xl font-medium text-center z-10"
        >
          {words.map((word, wi) => {
            const letters = word.split("");
            const startIndex = cumulative;
            cumulative += letters.length;
            return (
              <span key={wi} className="inline-block whitespace-nowrap mr-2">
                {letters.map((ch, i) => (
                  <span
                    key={`${wi}-${i}`}
                    className="inline-block animate-letter"
                    style={{ animationDelay: `${(startIndex + i) * 0.05}s` }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            );
          })}
        </h2>
      )}

      <style jsx>{`
        @keyframes letterIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-letter {
          display: inline-block;
          opacity: 0;
          animation: letterIn 0.4s ease-out forwards;
        }

        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

        .heart {
          position: absolute;
          top: -2rem;
          font-size: 1.5rem;
          animation: fall 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StoryScreen;
