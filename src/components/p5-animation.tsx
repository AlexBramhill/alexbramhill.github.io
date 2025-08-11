"use client";
import React, { useEffect, useRef } from "react";
import type p5 from "p5";

const P5Animation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamically import p5 to avoid SSR issues
    import("p5").then((p5Module) => {
      const p5 = p5Module.default;
      
      // Particle system
      const particles: Particle[] = [];
      const mouseTrail: { x: number; y: number; life: number }[] = [];
      let time = 0;

      class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        life: number;
        maxLife: number;
        size: number;
        color: p5.Color;

        constructor(p: p5, x: number, y: number) {
          this.x = x;
          this.y = y;
          this.vx = p.random(-2, 2);
          this.vy = p.random(-2, 2);
          this.life = p.random(60, 120);
          this.maxLife = this.life;
          this.size = p.random(2, 8);
          this.color = p.color(
            p.random(100, 255),
            p.random(100, 255),
            p.random(200, 255),
            150
          );
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.life--;
          
          // Add some physics
          this.vx *= 0.99;
          this.vy *= 0.99;
          this.vy += 0.02; // gravity
        }

        draw(p: p5) {
          const alpha = p.map(this.life, 0, this.maxLife, 0, 255);
          this.color.setAlpha(alpha);
          p.fill(this.color);
          p.noStroke();
          
          const currentSize = p.map(this.life, 0, this.maxLife, 0, this.size);
          p.ellipse(this.x, this.y, currentSize, currentSize);
        }

        isDead(): boolean {
          return this.life <= 0;
        }
      }

      const sketch = (p: p5) => {
        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
          canvas.parent(containerRef.current!);
          p.colorMode(p.HSB, 360, 100, 100, 255);
          p.background(220, 15, 8); // Dark background
        };

        p.draw = () => {
          // Create trailing effect
          p.fill(220, 15, 8, 30);
          p.rect(0, 0, p.width, p.height);
          
          time += 0.02;

          // Add particles on mouse movement
          if (p.mouseX !== p.pmouseX || p.mouseY !== p.pmouseY) {
            for (let i = 0; i < 3; i++) {
              particles.push(new Particle(p, 
                p.mouseX + p.random(-10, 10), 
                p.mouseY + p.random(-10, 10)
              ));
            }
            
            // Add to mouse trail
            mouseTrail.push({ 
              x: p.mouseX, 
              y: p.mouseY, 
              life: 60 
            });
          }

          // Auto-generate particles from the center with wave motion
          if (p.frameCount % 3 === 0) {
            const centerX = p.width / 2 + p.sin(time) * 100;
            const centerY = p.height / 2 + p.cos(time * 0.7) * 50;
            particles.push(new Particle(p, centerX, centerY));
          }

          // Update and draw mouse trail
          p.strokeWeight(2);
          for (let i = mouseTrail.length - 1; i >= 0; i--) {
            const trail = mouseTrail[i];
            const alpha = p.map(trail.life, 0, 60, 0, 255);
            p.stroke(280, 70, 90, alpha);
            
            if (i > 0) {
              const prevTrail = mouseTrail[i - 1];
              p.line(trail.x, trail.y, prevTrail.x, prevTrail.y);
            }
            
            trail.life--;
            if (trail.life <= 0) {
              mouseTrail.splice(i, 1);
            }
          }

          // Update and draw particles
          for (let i = particles.length - 1; i >= 0; i--) {
            const particle = particles[i];
            particle.update();
            particle.draw(p);

            // Remove dead particles
            if (particle.isDead()) {
              particles.splice(i, 1);
            }
          }

          // Draw connections between nearby particles
          p.stroke(280, 50, 70, 50);
          p.strokeWeight(1);
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const p1 = particles[i];
              const p2 = particles[j];
              const distance = p.dist(p1.x, p1.y, p2.x, p2.y);
              
              if (distance < 80) {
                const alpha = p.map(distance, 0, 80, 100, 0);
                p.stroke(280, 50, 70, alpha);
                p.line(p1.x, p1.y, p2.x, p2.y);
              }
            }
          }

          // Draw floating geometric shapes
          p.push();
          p.translate(p.width / 2, p.height / 2);
          p.rotate(time);
          p.noFill();
          p.stroke(60, 70, 90, 100);
          p.strokeWeight(2);
          
          for (let i = 0; i < 3; i++) {
            p.push();
            p.rotate((p.TWO_PI / 3) * i + time * 0.5);
            p.translate(100 + p.sin(time * 2) * 20, 0);
            p.rect(-15, -15, 30, 30);
            p.pop();
          }
          p.pop();

          // Display particle count
          p.fill(0, 0, 100, 200);
          p.noStroke();
          p.textSize(16);
          p.text(`Particles: ${particles.length}`, 20, 30);
          p.text(`Mouse Trail: ${mouseTrail.length}`, 20, 50);
          p.text("Move your mouse around!", 20, p.height - 30);
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

        p.mousePressed = () => {
          // Burst of particles on click
          for (let i = 0; i < 20; i++) {
            particles.push(new Particle(p, 
              p.mouseX + p.random(-20, 20), 
              p.mouseY + p.random(-20, 20)
            ));
          }
        };
      };

      // Create p5 instance
      p5InstanceRef.current = new p5(sketch);
    });

    // Cleanup function
    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-screen bg-gray-900 overflow-hidden"
      style={{ cursor: 'crosshair' }}
    />
  );
};

export default P5Animation;
