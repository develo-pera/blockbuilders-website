"use client";

import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import "./animations.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"]
});

export default function Home() {
  // Calculate number of squares needed based on viewport size
  const calculateSquares = () => {
    if (typeof window === 'undefined') return; // Default for SSR

    const width = window.innerWidth;
    const height = window.innerHeight;
    const squareSize = 40;
    const cols = Math.ceil(width / squareSize);
    const rows = Math.ceil(height / squareSize);
    return cols * rows;
  };

  const typeformUrl =
    process.env.NEXT_PUBLIC_TYPEFORM_URL ||
    'https://form.typeform.com/to/i3SUry9z';

  return (
    <div className="h-screen w-screen bg-black p-0 m-0 relative overflow-hidden">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))] h-full w-full">
        {Array.from({ length: calculateSquares() }).map((_, index) => (
          <div
            key={index}
            className="square w-[40px] h-[40px] bg-black"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none space-y-8">
        <Image
          src="/BlockBuilders-logo.svg"
          alt="BlockBuilders Logo"
          width={400}
          height={400}
          className="w-auto h-auto max-w-[600px]"
        />
        <button
          className={`${spaceGrotesk.className} cursor-pointer pointer-events-auto px-6 py-3 rounded font-bold bg-[#a1d078] text-black transition duration-200 hover:opacity-80 active:scale-95`}
          onClick={() => window.open(typeformUrl, '_blank')}
        >
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}
