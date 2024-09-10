"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import PlaceholdersAndVanishInputDemo from "./join-waitlist-input";

export default function JoinWaitlist() {
  return (
    <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased ">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        If you want to be informed about the latest updates about castrum legions, please leave your e-mail address.
        </p>
        <PlaceholdersAndVanishInputDemo/>
      </div>
      <BackgroundBeams />
    </div>
  );
}
