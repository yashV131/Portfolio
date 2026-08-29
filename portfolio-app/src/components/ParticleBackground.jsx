import React, { useEffect, useRef } from "react";

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const ParticleBackground = ({ onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();

    const mouse = { x: null, y: null, radius: 140 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCanvas.width = width;
    tempCanvas.height = height;

    tempCtx.fillStyle = "black";
    tempCtx.fillRect(0, 0, width, height);
    tempCtx.fillStyle = "white";
    tempCtx.font = "bold 160px Arial";
    tempCtx.textAlign = "center";
    tempCtx.textBaseline = "middle";
    tempCtx.fillText("Yashvi Mehta", width / 2, height / 2);

    const imageData = tempCtx.getImageData(0, 0, width, height);
    const points = [];

    for (let y = 0; y < height; y += 7) {
      for (let x = 0; x < width; x += 7) {
        const index = (y * width + x) * 4;
        if (imageData.data[index] > 220) {
          points.push({ x, y });
        }
      }
    }

    if (!points.length) {
      const fallback = window.setTimeout(() => onComplete?.(), 2000);
      return () => {
        window.clearTimeout(fallback);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", resize);
      };
    }

    const particles = [];
    const particleCount = Math.min(1100, points.length * 2);

    for (let i = 0; i < particleCount; i++) {
      const target = points[Math.floor(Math.random() * points.length)];
      const startX = width / 2 + (Math.random() - 0.5) * 220;
      const startY = height / 2 + (Math.random() - 0.5) * 220;
      particles.push({
        x0: startX,
        y0: startY,
        x: startX,
        y: startY,
        targetX: target.x,
        targetY: target.y,
        homeX: Math.random() * width,
        homeY: Math.random() * height,
        size: Math.random() * 1.8 + 0.8,
        delay: Math.random() * 1000,
      });
    }

    let startTime = performance.now();
    let phase2Start = null;
    let animationFrame = null;
    let completed = false;

    const duration1 = 3000;
    const waitBetween = 1000;
    const duration2 = 2400;

    const render = (time) => {
      const elapsed = time - startTime;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (phase2Start === null) {
          const local = Math.max(0, Math.min(1, (elapsed - p.delay) / duration1));
          const eased = easeOutExpo(local);
          p.x = p.x0 + (p.targetX - p.x0) * eased;
          p.y = p.y0 + (p.targetY - p.y0) * eased;
        } else {
          const elapsed2 = time - phase2Start;
          const local2 = Math.max(0, Math.min(1, elapsed2 / duration2));
          const eased2 = easeOutExpo(local2);
          p.x = p.targetX + (p.homeX - p.targetX) * eased2;
          p.y = p.targetY + (p.homeY - p.targetY) * eased2;
        }

        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius && distance > 0) {
            const force = (mouse.radius - distance) / mouse.radius;
            p.x += (dx / distance) * force * 3;
            p.y += (dy / distance) * force * 3;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = "#00400";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (phase2Start === null && elapsed >= duration1 + waitBetween) {
        phase2Start = time;
      }

      if (phase2Start !== null && !completed) {
        const elapsed2 = time - phase2Start;
        if (elapsed2 >= duration2) {
          completed = true;
          window.setTimeout(() => onComplete?.(), 20);
        }
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    animationFrame = window.requestAnimationFrame(render);
    const fallback = window.setTimeout(() => onComplete?.(), duration1 + waitBetween + duration2 + 600);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(fallback);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "#2B4A3F",
      }}
    />
  );
};

export default ParticleBackground;
