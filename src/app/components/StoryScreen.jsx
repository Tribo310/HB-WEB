// components/StoryScreen.js
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
  const sentence = sentences[index] || "";

  useEffect(() => {
    if (index < sentences.length) {
      const timer = setTimeout(() => setIndex(index + 1), 4000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [index, onComplete]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-50 p-4">
      {index < sentences.length && (
        <h2
          key={index}
          className="flex flex-wrap justify-center text-xl sm:text-2xl font-medium"
        >
          {sentence.split("").map((ch, i) => (
            <span
              key={i}
              className="inline-block animate-letter"
              style={{
                animationDelay: `${i * 0.05}s`,
                marginRight: ch === " " ? "0.5em" : "0.05em",
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h2>
      )}
      <style jsx>{`
        @keyframes letterIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-letter {
          display: inline-block;
          opacity: 0;
          animation: letterIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default StoryScreen;
