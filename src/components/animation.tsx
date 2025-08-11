"use client";
import React, { useEffect, useRef } from "react";

const SimplePaperAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Dynamically import Paper.js to avoid SSR issues
    import("paper").then((paper) => {
      // Setup Paper.js
      paper.default.setup(canvas);
      const { Point, Path, PointText, Color, Size } = paper.default;

      // Set canvas size with proper DPI scaling
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      
      // Set actual canvas size in memory (scaled for high DPI)
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Scale the canvas back down using CSS
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      // Scale the drawing context so everything draws at the correct size
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      // Resize the view to match logical canvas size
      paper.default.view.viewSize = new Size(width, height);

      // Create a simple circle
      const circle = new Path.Circle({
        center: new Point(width / 2, height / 2),
        radius: 50,
        fillColor: new Color(0.2, 0.6, 1, 0.8), // Blue with transparency
        strokeColor: new Color(0, 0, 0.8),
        strokeWidth: 2,
      });

      // Create simple text
      const text = new PointText({
        point: new Point(width / 2, height / 2 + 100),
        content: "Paper.js Demo",
        justification: "center",
        fontSize: 24,
        fillColor: new Color(0.2, 0.2, 0.2),
      });

      // Animation variables
      let time = 0;

      // Animation function using Paper.js's onFrame
      paper.default.view.onFrame = (event: { delta: number }) => {
        time += event.delta;
        
        // Animate the circle
        circle.position.x = width / 2 + Math.sin(time) * 100;
        circle.position.y = height / 2 + Math.cos(time * 0.7) * 50;
        
        // Change circle color based on position
        const hue = (time * 50) % 360;
        circle.fillColor = new Color({ hue, saturation: 0.7, brightness: 0.8 });
        
        // Pulse the circle size
        const scale = 1 + Math.sin(time * 3) * 0.2;
        circle.scaling = new Point(scale, scale);
      };

      // Handle window resize
      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        const dpr = window.devicePixelRatio || 1;
        
        // Set actual canvas size in memory (scaled for high DPI)
        canvas.width = newWidth * dpr;
        canvas.height = newHeight * dpr;
        
        // Scale the canvas back down using CSS
        canvas.style.width = newWidth + 'px';
        canvas.style.height = newHeight + 'px';
        
        // Scale the drawing context
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.scale(dpr, dpr);
        }
        
        // Update Paper.js view size
        paper.default.view.viewSize = new Size(newWidth, newHeight);
        
        // Update text position
        text.position = new Point(newWidth / 2, newHeight / 2 + 100);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        if (paper.default.project) {
          paper.default.project.clear();
        }
      };
    }).catch((error) => {
      console.error("Failed to load Paper.js:", error);
    });
  }, []);

  return (
    <div className="w-full h-screen bg-gray-50">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
};

export default SimplePaperAnimation;