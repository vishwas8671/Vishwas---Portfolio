
import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let particles = [];

    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    // =========================
    // Resize Canvas
    // =========================
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // =========================
    // Mouse Events
    // =========================
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // =========================
    // Particle Class
    // =========================
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;

        this.size = Math.random() * 2 + 1;

        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;

        this.density = Math.random() * 30 + 10;

        this.color =
          Math.random() > 0.5
            ? 'rgba(6, 182, 212, 0.45)'
            : 'rgba(99, 102, 241, 0.45)';
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        // Normal movement
        this.x += this.vx;
        this.y += this.vy;

        // Wall bounce
        if (this.x <= 0 || this.x >= canvas.width) {
          this.vx *= -1;
        }

        if (this.y <= 0 || this.y >= canvas.height) {
          this.vy *= -1;
        }

        // Mouse Repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius && distance > 0) {
            const force = (mouse.radius - distance) / mouse.radius;

            const directionX = (dx / distance) * force * this.density * 0.3;

            const directionY = (dy / distance) * force * this.density * 0.3;

            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }
    }

    // =========================
    // Initialize Particles
    // =========================
    const initParticles = () => {
      particles = [];

      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / 11000),
        100
      );

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        particles.push(new Particle(x, y));
      }
    };

    // =========================
    // Draw Connection Lines
    // =========================
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            const opacity = ((110 - distance) / 110) * 0.15;

            ctx.beginPath();

            ctx.strokeStyle = `rgba(99,102,241,${opacity})`;

            ctx.lineWidth = 0.8;

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.stroke();

            ctx.closePath();
          }
        }
      }
    };

    // =========================
    // Draw Grid
    // =========================
    const drawGrid = () => {
      const gridSize = 60;

      ctx.strokeStyle = 'rgba(255,255,255,0.015)';
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // =========================
    // Animation Loop
    // =========================
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    // =========================
    // Event Listeners
    // =========================
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Start
    handleResize();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-slate-950 pointer-events-none z-0"
    />
  );
}