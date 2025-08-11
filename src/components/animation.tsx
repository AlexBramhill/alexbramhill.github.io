"use client";
import React, { useEffect, useRef } from "react";

const VectorTextLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Dynamically import Paper.js to avoid SSR issues
    import("paper").then((paper) => {
      // Setup Paper.js
      paper.default.setup(canvas);
      const { Point, Path, PointText, Color } = paper.default;

      // Canvas size
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Create vector text
      const text = new PointText({
        point: new Point(width / 2, height / 2),
        content: "VECTOR",
        justification: "center",
        fontSize: 100,
        fillColor: new Color("lightgray"),
        strokeColor: new Color("lightgray"),
        strokeWidth: 1,
      });

      // Draw horizontal lines that react to vector text with variable thickness
      const numLines = 50;
      const spacing = 4;

      // Get text bounds for intersection detection
      const textBounds = text.bounds;
      const lines: { remove?: () => void }[] = [];

      function createLines() {
        // Clear existing lines
        lines.forEach(line => line.remove && line.remove());
        lines.length = 0;

        for (let i = 0; i < numLines; i++) {
          const y = height / 2 - (numLines / 2) * spacing + i * spacing;

          // Check if this line intersects with the text bounds
          const lineIntersectsText = textBounds && 
            (y >= textBounds.top && y <= textBounds.bottom);

          if (lineIntersectsText) {
            // Create segments: left side, text area, right side
            const leftStart = 0;
            const leftEnd = textBounds.left;
            const textStart = textBounds.left;
            const textEnd = textBounds.right;
            const rightStart = textBounds.right;
            const rightEnd = width;

            // Left side - thin line
            if (leftEnd > leftStart) {
              const leftLine = new Path();
              leftLine.moveTo(new Point(leftStart, y));
              leftLine.lineTo(new Point(leftEnd, y));
              
              const textCenter = new Point(width / 2, height / 2);
              const distanceFromCenter = Math.abs(y - textCenter.y);
              const maxDistance = height * 0.3;
              const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
              const noise = Math.sin(y * 0.05) * 0.2;
              const thinThickness = 0.3 + (1 - normalizedDistance) * 1.5 + noise;
              
              leftLine.strokeColor = new Color("black");
              leftLine.strokeWidth = Math.max(0.2, thinThickness);
              leftLine.strokeCap = 'round';
              lines.push(leftLine);
            }

            // Text area - thick, variable line
            if (textEnd > textStart) {
              const segmentLength = textEnd - textStart;
              const steps = Math.max(Math.floor(segmentLength / 3), 10);
              
              for (let step = 0; step < steps - 1; step++) {
                const t = step / (steps - 1);
                const nextT = (step + 1) / (steps - 1);
                
                const x1 = textStart + t * segmentLength;
                const x2 = textStart + nextT * segmentLength;
                
                // Variable thickness with wave pattern
                const time = Date.now() * 0.001;
                const wavePattern1 = Math.sin(x1 * 0.02 + i * 0.3 + time) * 0.5 + 0.5;
                const wavePattern2 = Math.sin(x2 * 0.02 + i * 0.3 + time) * 0.5 + 0.5;
                const thickness1 = 2 + wavePattern1 * 8; // 2 to 10
                const thickness2 = 2 + wavePattern2 * 8; // 2 to 10
                const avgThickness = (thickness1 + thickness2) / 2;
                
                const segmentLine = new Path();
                segmentLine.moveTo(new Point(x1, y));
                segmentLine.lineTo(new Point(x2, y));
                segmentLine.strokeColor = new Color("black");
                segmentLine.strokeWidth = avgThickness;
                segmentLine.strokeCap = 'round';
                lines.push(segmentLine);
              }
            }

            // Right side - thin line
            if (rightEnd > rightStart) {
              const rightLine = new Path();
              rightLine.moveTo(new Point(rightStart, y));
              rightLine.lineTo(new Point(rightEnd, y));
              
              const textCenter = new Point(width / 2, height / 2);
              const distanceFromCenter = Math.abs(y - textCenter.y);
              const maxDistance = height * 0.3;
              const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
              const noise = Math.sin(y * 0.05) * 0.2;
              const thinThickness = 0.3 + (1 - normalizedDistance) * 1.5 + noise;
              
              rightLine.strokeColor = new Color("black");
              rightLine.strokeWidth = Math.max(0.2, thinThickness);
              rightLine.strokeCap = 'round';
              lines.push(rightLine);
            }
          } else {
            // Line doesn't intersect text - draw a thin line across the whole width
            const line = new Path();
            line.moveTo(new Point(0, y));
            line.lineTo(new Point(width, y));
            
            const textCenter = new Point(width / 2, height / 2);
            const distanceFromCenter = Math.abs(y - textCenter.y);
            const maxDistance = height * 0.3;
            const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
            const noise = Math.sin(y * 0.05) * 0.2;
            const thinThickness = 0.3 + (1 - normalizedDistance) * 1.5 + noise;
            
            line.strokeColor = new Color("black");
            line.strokeWidth = Math.max(0.2, thinThickness);
            line.strokeCap = 'round';
            lines.push(line);
          }
        }
      }

      // Initial creation
      createLines();

      // Animation loop
      const animationInterval = setInterval(() => {
        createLines();
      }, 50); // Update every 50ms for smooth animation

      return () => {
        clearInterval(animationInterval);
        paper.default.project.clear();
      };
    }).catch((error) => {
      console.error("Failed to load Paper.js:", error);
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100vw", height: "100vh" }}
    />
  );
};

export default VectorTextLines;
