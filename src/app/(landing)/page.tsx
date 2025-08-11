"use client"
import { particleSketch } from "@/libs/p5/sketches/particleSketch";
import dynamic from "next/dynamic";

// Dynamically load the wrapper to ensure it runs only on the client
const P5Wrapper = dynamic(() => import("@/components/p5-wrapper"), {
  ssr: false,
});

export default function HomePage() {
  return <P5Wrapper sketch={particleSketch} />;
}
