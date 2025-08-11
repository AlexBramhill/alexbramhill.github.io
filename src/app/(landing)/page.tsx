"use client";
import React from "react";
import dynamic from "next/dynamic";

const MetaballAnimation = dynamic(() => import("@/components/metaball"), {
  loading: () => <> </>,
  ssr: false, // Skip server rendering to avoid Paper.js issues
});

export default function Home() {
  return (
    <MetaballAnimation />
  );
}
