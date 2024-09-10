import Maskot from '../ThreeModel/Maskot';
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
    return (
        <div className='flex flex-row justify-between items-center w-full'>
            <div style={{ height: '50vh' }} className=' px-40'>
                <Maskot />
            </div>
            <div className="flex items-center justify-center z-50 w-full ">
                <TextHoverEffect text="Welcome" />
            </div>
        </div>
    );
}
