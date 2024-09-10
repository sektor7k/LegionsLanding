"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function Hero() {
  const words = [
    {
      text: "Are",
    },
    {
      text: "you",
    },
    {
      text: "ready",
    },
    {
      text: "for",
      className: "text-red-800 dark:text-red-800"
    },
    {
      text: "the",
    },
    {
      text: "play",
      className: "text-red-800 dark:text-red-800",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Welcome to castrum legions
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
