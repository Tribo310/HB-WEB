/*
File: pages/index.js
*/
"use client";

import React, { useState, useRef } from "react";
import Head from "next/head";
import StartScreen from "./components/StartScreen";
import StoryScreen from "./components/StoryScreen";
import PosterScreen from "./components/PosterScreen";
import BirthdayScreen from "./components/BirthdayScreen";

export default function Home() {
  const [step, setStep] = useState("start");
  const musicRef = useRef(null);

  const handleStart = () => setStep("story");
  const handleStoryComplete = () => setStep("poster");
  const handlePosterComplete = () => setStep("birthday");
  const handleRestart = () => setStep("start");

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Төрсөн өдрийн мэнд</title>
      </Head>

      {step === "start" && (
        <StartScreen musicRef={musicRef} onStart={handleStart} />
      )}

      {step === "story" && <StoryScreen onComplete={handleStoryComplete} />}

      {step === "poster" && <PosterScreen onComplete={handlePosterComplete} />}

      {step === "birthday" && (
        <BirthdayScreen musicRef={musicRef} onRestart={handleRestart} />
      )}
    </>
  );
}
