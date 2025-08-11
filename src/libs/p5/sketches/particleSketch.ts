import type { P5Sketch } from "../types";

export const particleSketch: P5Sketch = (p) => {
  const particles: { x: number; y: number; vx: number; vy: number }[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(20);
  };

  p.draw = () => {
    p.fill(20, 20, 20, 20);
    p.noStroke();
    p.rect(0, 0, p.width, p.height);

    if (p.mouseIsPressed) {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: p.mouseX,
          y: p.mouseY,
          vx: p.random(-2, 2),
          vy: p.random(-2, 2),
        });
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const part = particles[i];
      part.x += part.vx;
      part.y += part.vy;
      p.fill(255);
      p.ellipse(part.x, part.y, 5, 5);

      if (part.x < 0 || part.x > p.width || part.y < 0 || part.y > p.height) {
        particles.splice(i, 1);
      }
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};
