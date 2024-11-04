"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import { Nav } from "../nav/Nav";

export function Home() {
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Lorem ipsum dolor sit.
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, sit.
        </p>
        <Nav />
      </WavyBackground>
    </>
  );
}
