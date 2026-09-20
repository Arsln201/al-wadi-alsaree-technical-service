"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress((scrollTop / documentHeight) * 100);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      {/* Top progress line */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-[2px] bg-[#c9a35a] transition-[width] duration-150"
        style={{
          width: `${progress}%`,
        }}
      />

      {/* Desktop side indicator */}
      <div className="pointer-events-none fixed bottom-8 right-7 z-40 hidden items-center gap-3 md:flex">
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-black/30">
          Scroll
        </span>

        <div className="relative h-16 w-px overflow-hidden bg-black/10">
          <div
            className="absolute left-0 top-0 w-full bg-[#c9a35a] transition-[height] duration-150"
            style={{
              height: `${progress}%`,
            }}
          />
        </div>

        <span className="min-w-[28px] text-[9px] font-medium tabular-nums text-black/30">
          {Math.round(progress)}
        </span>
      </div>
    </>
  );
}