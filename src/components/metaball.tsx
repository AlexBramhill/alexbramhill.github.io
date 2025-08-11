"use client";
import React, { useEffect, useRef } from "react";

const MetaballAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Dynamically import Paper.js to avoid SSR issues
    import("paper").then((paper) => {
      // Setup Paper.js
      paper.default.setup(canvas);
      const { Point, Path, Group } = paper.default;

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
      paper.default.view.viewSize = new paper.default.Size(width, height);

      // Ported from original Metaball script by SATO Hiroyuki
      // http://park12.wakwak.com/~shp/lc/et/en_aics_script.html
      
      const ballPositions = [[255, 129], [610, 73], [486, 363],
        [117, 459], [484, 726], [843, 306], [789, 615], [1049, 82],
        [1292, 428], [1117, 733], [1352, 86], [92, 798]];

      const handle_len_rate = 2.4;
      const circlePaths: paper.Path[] = [];
      
      for (let i = 0, l = ballPositions.length; i < l; i++) {
        const circlePath = new Path.Circle({
          center: ballPositions[i],
          radius: 50,
          fillColor: new paper.default.Color('black')
        });
        circlePaths.push(circlePath);
      }

      const largeCircle = new Path.Circle({
        center: [676, 433],
        radius: 100,
        fillColor: new paper.default.Color('black')
      });
      circlePaths.push(largeCircle);

      const connections = new Group();

      function generateConnections(paths: paper.Path[]) {
        // Remove the last connection paths:
        connections.removeChildren();

        for (let i = 0, l = paths.length; i < l; i++) {
          for (let j = i - 1; j >= 0; j--) {
            const path = metaball(paths[i], paths[j], 0.5, handle_len_rate, 300);
            if (path) {
              connections.addChild(path);
            }
          }
        }
      }

      // ---------------------------------------------
      function metaball(ball1: paper.Path, ball2: paper.Path, v: number, handle_len_rate: number, maxDistance: number): paper.Path | null {
        const center1 = ball1.position;
        const center2 = ball2.position;
        const radius1 = ball1.bounds.width / 2;
        const radius2 = ball2.bounds.width / 2;
        const pi2 = Math.PI / 2;
        const d = center1.getDistance(center2);
        let u1, u2;

        if (radius1 == 0 || radius2 == 0)
          return null;

        if (d > maxDistance || d <= Math.abs(radius1 - radius2)) {
          return null;
        } else if (d < radius1 + radius2) { // case circles are overlapping
          u1 = Math.acos((radius1 * radius1 + d * d - radius2 * radius2) /
              (2 * radius1 * d));
          u2 = Math.acos((radius2 * radius2 + d * d - radius1 * radius1) /
              (2 * radius2 * d));
        } else {
          u1 = 0;
          u2 = 0;
        }

        const centerVector = center2.subtract(center1);
        const angle1 = centerVector.angle * Math.PI / 180; // Convert to radians
        const angle2 = Math.acos((radius1 - radius2) / d);
        const angle1a = angle1 + u1 + (angle2 - u1) * v;
        const angle1b = angle1 - u1 - (angle2 - u1) * v;
        const angle2a = angle1 + Math.PI - u2 - (Math.PI - u2 - angle2) * v;
        const angle2b = angle1 - Math.PI + u2 + (Math.PI - u2 - angle2) * v;
        const p1a = center1.add(getVector(angle1a, radius1));
        const p1b = center1.add(getVector(angle1b, radius1));
        const p2a = center2.add(getVector(angle2a, radius2));
        const p2b = center2.add(getVector(angle2b, radius2));

        // define handle length by the distance between
        // both ends of the curve to draw
        const totalRadius = (radius1 + radius2);
        const distanceVector = p1a.subtract(p2a);
        let d2 = Math.min(v * handle_len_rate, distanceVector.length / totalRadius);

        // case circles are overlapping:
        d2 *= Math.min(1, d * 2 / (radius1 + radius2));

        const finalRadius1 = radius1 * d2;
        const finalRadius2 = radius2 * d2;

        const path = new Path({
          segments: [p1a, p2a, p2b, p1b],
          fillColor: new paper.default.Color('black'),
          closed: true
        });
        const segments = path.segments;
        segments[0].handleOut = getVector(angle1a - pi2, finalRadius1);
        segments[1].handleIn = getVector(angle2a + pi2, finalRadius2);
        segments[2].handleOut = getVector(angle2b - pi2, finalRadius2);
        segments[3].handleIn = getVector(angle1b + pi2, finalRadius1);
        return path;
      }

      // ------------------------------------------------
      function getVector(radians: number, length: number) {
        return new Point({
          // Convert radians to degrees:
          angle: radians * 180 / Math.PI,
          length: length
        });
      }

      function onMouseMove(event: { point: paper.Point }) {
        largeCircle.position = event.point;
        generateConnections(circlePaths);
      }

      // Set up mouse move event
      paper.default.view.onMouseMove = onMouseMove;

      // Initial generation
      generateConnections(circlePaths);

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
        paper.default.view.viewSize = new paper.default.Size(newWidth, newHeight);
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
    <div className="w-full h-screen bg-white">
      <canvas
        ref={canvasRef}
        className="block w-full h-full cursor-none"
      />
    </div>
  );
};

export default MetaballAnimation;
