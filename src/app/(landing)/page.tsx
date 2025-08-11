"use client";
import React from "react";
import dynamic from "next/dynamic";

const P5Animation = dynamic(() => import("@/components/p5-animation"), {
  loading: () => <div className="w-full h-screen bg-gray-900 flex items-center justify-center text-white">Loading p5.js animation...</div>,
  ssr: false, // Skip server rendering to avoid p5.js issues
});

export default function Home() {
  return (
    <P5Animation />
  );
}
