import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="w-full h-screen">  {/* Set height to full screen */}
      <Compare
        firstImage="/sabah.mp4"
        secondImage="/gece.mp4"
        firstImageClassName="object-cover object-left-top w-full h-full"
        secondImageClassname="object-cover object-left-top w-full h-full"
        className="w-full h-full"
        slideMode="hover"
      />
    </div>
  );
}
