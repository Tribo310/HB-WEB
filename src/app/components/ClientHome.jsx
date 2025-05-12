"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import BirthdayScreen from "./BirthdayScreen";

const StartScreen = dynamic(() => import("./StartScreen"), { ssr: false });

export default function ClientHome() {
  const [started, setStarted] = useState(false);

  return started ? (
    <BirthdayScreen />
  ) : (
    <StartScreen onStart={() => setStarted(true)} />
  );
}
