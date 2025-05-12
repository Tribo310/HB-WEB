"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import poster from "../assets/poster.png";

const text = "HAPPY-BIRTHDAY-TO-YOU!";

const PosterScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-blue-50 p-4 gap-0">
      {/* Дээш унжиж ирэх текст */}
      <h1 className="mb-1 flex flex-wrap justify-center text-xl font-bold">
        {text.split("").map((ch, i) => (
          <span
            key={i}
            className="inline-block drop-letter"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {ch}
          </span>
        ))}
      </h1>

      {/* Зураг жижигрүүлэх контейнер */}
      <div className="w-65 bg-white">
        <Image
          src={poster}
          alt="Poster"
          width={300}
          height={450}
          className="object-contain mx-auto"
          priority
        />
      </div>

      <style jsx>{`
        @keyframes dropIn {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .drop-letter {
          display: inline-block;
          opacity: 0;
          animation: dropIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PosterScreen;
