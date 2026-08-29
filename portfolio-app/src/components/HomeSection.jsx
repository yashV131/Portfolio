import React, { useCallback, useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import Me from "../assets/Me.jpeg";
import ParticleBackground from "./ParticleBackground";

export default function HomeSection({ scrollToSection, onParticlesComplete }) {
  const animationPlayorPause = useRef(null);
  const glitchRef = useRef(null);
  const [homeVisible, setHomeVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  const generateSlices = () => {
    const sizes = [];
    let remaining = 100;

    while (remaining > 0) {
      const max = Math.min(20, remaining);

      const min = remaining <= 20 ? remaining : 5;
      const size =
        remaining <= 20
          ? remaining
          : Math.floor(Math.random() * (max - min + 1)) + min;

      sizes.push(size);
      remaining -= size;
    }

    return sizes;
  };

  const [sliceSizes, setSliceSizes] = useState(generateSlices);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setHomeVisible(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    if (!isMobile) {
      animationPlayorPause.current = animate(".portfolio-track", {
        translateX: ["-50%", "0%"],
        duration: 21000,
        ease: "linear",
        loop: true,
        autoplay: true,
      });

      const fallback = setTimeout(() => setHomeVisible(true), 8000);
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(fallback);
      };
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const handleLoadComplete = useCallback(() => {
    setHomeVisible(true);
  }, []);

  useEffect(() => {
    if (homeVisible) onParticlesComplete?.();
  }, [homeVisible, onParticlesComplete]);

  const playGlitch = () => {
    // Generate new random slices on every hover
    setSliceSizes(generateSlices());

    // Run glitch animation
    for (let i = 1; i <= sliceSizes.length; i++) {
      animate(`.slice${i}`, {
        translateX: [
          Math.random() * 50 - 25,
          Math.random() * 50 - 25,
          0,
        ],
        duration: 700 + Math.random() * 120,
        ease:"easeOut"
      });
    }

    animate(".red", {
      opacity: [0, 0.5, 0],
      duration: 700,
      easing: "easeInOutSine",

    });

    animate(".blue", {
      opacity: [0, 0.5, 0],
      duration: 500,
      easing: "easeInOutSine",

    });

    animate(".base", {
      translateX: [-3, 3, -2, 0],
      translateY: [2, -2, 1, 0],
      duration: 500,
      easing: "easeInOutSine",

    });
  };

  const marquee = Array.from({ length: 8 }, (_, i) => (
    <span
      key={i}
      className="mr-24 shrink-0 font-bold text-[#F5F0E6] font-['Playfair_Display'] text-[clamp(3rem,8vw,8rem)]"
    >
      PORTFOLIO
    </span>
  ));

  let currentTop = 0;

  return (
    <section
      id="homepage"
      className="relative min-h-fit md:min-h-screen overflow-hidden bg-[#2B4A3F]"
    >
      {!isMobile && <ParticleBackground onComplete={handleLoadComplete} />}

      <div
        className="absolute top-[30%] left-0 z-0 w-full overflow-hidden sm:top-[10%]"
        onMouseEnter={() => animationPlayorPause.current?.pause()}
        onMouseLeave={() => animationPlayorPause.current?.resume()}
      >
        <div className="md:hidden portfolio-track flex w-max whitespace-nowrap">
          {marquee}
          {marquee}
        </div>
      </div>

      <div
        className={`relative z-10 flex min-h-screen items-center justify-center transition-opacity duration-500 ${
          homeVisible ? "opacity-100" : "opacity-0"
        } ${isMobile ? 'opacity-100' : ''}`}
        style={{ pointerEvents: homeVisible ? "auto" : "none" }}
      >

        {/* Why are u not working? To fix*/}
        <div
          ref={glitchRef}
          onMouseEnter={playGlitch}
          className="glitch relative hidden h-[30vw] w-[30vw] overflow-hidden border bg-[rgb(163,163,128)] md:flex"
        >
          <img
            src={Me}
            alt="Me"
            className="base absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"
          />

          {sliceSizes.map((height, i) => {
            const top = currentTop;
            currentTop += height;

            const type = i % 3;

            return (
              <div
                key={i}
                className={`slice slice${i + 1} absolute inset-0`}
                style={{
                  clipPath: `inset(${top}% 0 ${
                    100 - top - height
                  }% 0)`,
                }}
              >
                <img
                  src={Me}
                  alt=""
                  className={`absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-0 ${
                    type === 0
                      ? "red"
                      : type === 1
                      ? "blue"
                      : "original"
                  }`}
                  style={{
                    filter:
                      type === 0
                        ? "hue-rotate(-40deg) saturate(6)"
                        : type === 1
                        ? "hue-rotate(180deg) saturate(6)"
                        : "none",
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute right-0 top-1/2 hidden h-[15vw] w-[15vw] -translate-y-1/2 items-center bg-[#2B4A3F] p-3 md:flex">
            <p className="font-['Playfair_Display'] text-xs leading-tight md:text-lg lg:text-xl xl:text-2xl">
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/yashvimehtaa"
                className="text-[#B6C598] hover:animate-pulse"
              >
                YASHVI
              </a>
              <br />
              Github:{" "}
              <a
                href="https://github.com/yashV131"
                className="text-[#B6C598] hover:animate-pulse"
              >
                yashV131
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:mehta.yashvi@gmail.com"
                className="text-[#B6C598] hover:animate-pulse"
              >
                yashvi@tamu.edu
              </a>
            </p>
          </div>

          {[1, 2, 3].map((_, i) => (
            <h1
              key={i}
              className="font-['Playfair_Display'] text-[clamp(3rem,8vw,8rem)] font-bold text-transparent [-webkit-text-stroke:2px_#D8B25C]"
            >
              PORTFOLIO
              <br />
            </h1>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
        <div
          onClick={scrollToSection}
          className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-[#D8B25C] text-sm animate-pulse md:h-32 md:w-32 md:text-base xl:h-40 xl:w-40 xl:text-xl"
        />
      </div>
    </section>
  );
}