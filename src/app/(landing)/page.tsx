"use client";
import React from "react";
import dynamic from "next/dynamic";

const VectorTextLines = dynamic(() => import("@/components/animation"), {
  loading: () => <div>Loading animation...</div>,
  ssr: false, // Skip server rendering to avoid Paper.js issues
});

export default function Home() {
  return (
<VectorTextLines />  );
}
