"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import camile from "./../../public/camile.webp";
import sean from "./../../public/sean.webp";

const Banner: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 z-10">
      <div className="relative w-full h-[318px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#a86ff0] to-[#8498f7] opacity-60"></div>
        <div className="relative z-10 w-full h-full">
          <Image
            src={theme === "dark" ? sean : camile}
            alt="Banner Image"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
