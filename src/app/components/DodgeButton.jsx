"use client";

import React, { useRef } from "react";

const DodgeButton = () => {
  const btnRef = useRef(null);

  const dodge = () => {
    const btn = btnRef.current;
    const container = btn.parentElement;
    const rect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const maxX = rect.width - btnRect.width;
    const maxY = rect.height - btnRect.height;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
  };

  return (
    <button
      ref={btnRef}
      className="absolute px-5 py-2 bg-purple-300 text-white font-medium rounded-full shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
      style={{ left: "70%", top: "50%", transform: "translateY(-50%)" }}
      onMouseEnter={dodge}
      onMouseDown={(e) => {
        e.preventDefault();
        dodge();
      }}
    >
      Үгүй
    </button>
  );
};

export { DodgeButton };
