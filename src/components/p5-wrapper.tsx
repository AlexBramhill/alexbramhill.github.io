"use client";

import React, { useEffect, useRef } from "react";
import type p5 from "p5";
import { P5Sketch } from "@/libs/p5/types";

interface P5WrapperProps {
  sketch: P5Sketch;
  className?: string;
  style?: React.CSSProperties;
}

const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch, className, style }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    let isMounted = true;

    import("p5").then((p5Module) => {
      if (!isMounted || !containerRef.current) return;
      const P5 = p5Module.default;
      p5InstanceRef.current = new P5(sketch, containerRef.current);
    });

    return () => {
      isMounted = false;
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, [sketch]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100vh", ...style }}
      aria-hidden="true"
    />
  );
};

export default P5Wrapper;
