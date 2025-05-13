"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import poster from "../assets/poster.png";

const text = "HAPPY-BIRTHDAY-TO-YOU!";
const emojis = ["❤️", "🎈", "🩵", "🩷", "💛", "💜"];

const PosterScreen = ({ onComplete }) => {
  const [showEmojis, setShowEmojis] = useState(false);

  useEffect(() => {
    // Текст анимэйшн дууссаны дараа emoji унагах
    const timer = setTimeout(() => setShowEmojis(true), 2000);
    const done = setTimeout(onComplete, 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4 gap-0 overflow-hidden">
      {/* 🎊 Emoji унжих */}
      {showEmojis &&
        Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="emoji-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </span>
        ))}

      {/* Дээш унжиж ирэх текст */}
      <h1 className="mb-1 flex flex-wrap justify-center text-xl font-bold z-10">
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

      {/* Постер зураг */}
      <div className="w-65 bg-white z-10">
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

        @keyframes fallDown {
          0% {
            top: -2rem;
            opacity: 0;
            transform: translateY(0);
          }
          10% {
            opacity: 1;
          }
          100% {
            top: 110%;
            opacity: 0;
            transform: translateY(30px);
          }
        }

        .emoji-fall {
          position: absolute;
          top: -2rem;
          font-size: 1.5rem;
          animation: fallDown 4s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default PosterScreen;
