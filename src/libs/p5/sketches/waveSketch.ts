import type { P5Sketch } from "../types";

export const waveSketch: P5Sketch = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.stroke(255);
  };

  p.draw = () => {
    p.background(0);
    p.noFill();
    p.beginShape();
    for (let x = 0; x < p.width; x += 10) {
      const y = p.height / 2 + p.sin(x * 0.01 + p.frameCount * 0.05) * 50;
      p.vertex(x, y);
    }
    p.endShape();
  };
};
