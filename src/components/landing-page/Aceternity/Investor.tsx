"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Investor() {
    return (

        <div className="h-[25rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            
                <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
                    Investors and founders
                </h2>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />

            
        </div>
    );
}

const testimonials = [
    {
        quote: "/radar.png",
        name: "Sponsor 1",
        title: "A Tale of Two Cities",
    },
    {
        quote: "/radar.png",
        name: "Sponsor 2",
        title: "A Tale of Two Cities",
    },
    {
        quote:"/thumbnail1.png",
        name: "Sponsor 3",
        title: "A Tale of Two Cities",
    },
    {
        quote:"/thumbnail1.png",
        name: "Sponsor 4",
        title: "A Tale of Two Cities",
    },
    {
        quote:"/thumbnail1.png",
        name: "Sponsor 5",
        title: "A Tale of Two Cities",
    },
];
