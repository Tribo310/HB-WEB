// File: pages/index.js
"use client";

import React, { useState } from "react";
import Head from "next/head";
import StartScreen from "./components/StartScreen";
import StoryScreen from "./components/StoryScreen";
import PosterScreen from "./components/PosterScreen";
import BirthdayScreen from "./components/BirthdayScreen";

export default function Home() {
  const [step, setStep] = useState("start");

  const handleRestart = () => {
    setStep("start");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Төрсөн өдрийн мэнд</title>
      </Head>

      {step === "start" && <StartScreen onStart={() => setStep("story")} />}

      {step === "story" && <StoryScreen onComplete={() => setStep("poster")} />}

      {step === "poster" && (
        <PosterScreen onComplete={() => setStep("birthday")} />
      )}

      {step === "birthday" && <BirthdayScreen onRestart={handleRestart} />}
    </>
  );
}
