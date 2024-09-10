"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Teams() {
  const cards = data.map((card, index) => (
    <Card key={card.avatar} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Team
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    name: "Sektor7k",
    title: "Fullstack Developer",
    avatar: "https://github.com/sektor7k.png",
    link: "https://github.com/sektor7k",
    linkP:"github.com/sektor7k"

  },
  {
    name: "Sektor7k",
    title: "Fullstack Developer",
    avatar: "https://github.com/sektor7k.png",
    link: "https://github.com/sektor7k",
    linkP:"github.com/sektor7k"

  },
  {
    name: "Sektor7k",
    title: "Fullstack Developer",
    avatar: "https://github.com/sektor7k.png",
    link: "https://github.com/sektor7k",
    linkP:"github.com/sektor7k"

  },
  {
    name: "Sektor7k",
    title: "Fullstack Developer",
    avatar: "https://github.com/sektor7k.png",
    link: "https://github.com/sektor7k",
    linkP:"github.com/sektor7k"

  },
  
];
