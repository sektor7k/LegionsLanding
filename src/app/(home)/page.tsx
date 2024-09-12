"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Maskot from "@/components/ThreeModel/Maskot";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutube,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import axios from 'axios'
import { toast } from "@/components/ui/use-toast";

export default function Page() {
  const placeholders = [
    "What steps should I take to participate in the tournament?",
    "How can I effectively trade my game tokens?",
    "Where can I access the latest updates and news about games?",
    "For answers to all these questions, please join the waitlist.",
  ];

  const [email, setMail] = useState("");

  function showErrorToast(message: string): void {
    toast({
      variant: "destructive",
      title: message,
      description: "",
    })
  }

  function showToast(message: string): void {
    toast({
      variant: "default",
      title: message,
      description: "",
    })
  }


  const onSubmit = async () => {
    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/addmail`, { email })
      console.log("Signup success", response);
      showToast("Successfully!");

    } catch (error: any) {
      const errorMessage = error.response.data.message;
      showErrorToast(errorMessage);
    };
  }

   

    const links = [

      {
        title: "Twitter",
        icon: (
          <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://x.com/CastrumLegion",
      },
      {
        title: "Discord",
        icon: (
          <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://discord.gg/mSxS8xJJ",
      },

      {
        title: "Telegram",
        icon: (
          <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://t.me/CastrumLegions/1",
      },
      {
        title: "Youtube",
        icon: (
          <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.youtube.com/@castrumlegions",
      },
      {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
    ];

    return (
      <div className=" w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center h-screen">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="transform -translate-y-16">
          <FloatingDock
            mobileClassName="translate-y-20"
            items={links}
          />
        </div>
        <div className="transform -translate-x-28">
          <Maskot />
        </div>
        <div className="w-full">
          <h2 className="mb-10 text-xl text-center sm:text-5xl dark:text-white text-black w-full">
            Get Waitlist
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e) => setMail(e.target.value)}
            onSubmit={onSubmit}
          />
        </div>
      </div>

    );
}
