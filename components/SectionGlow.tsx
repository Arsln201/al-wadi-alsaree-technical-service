"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type SectionGlowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionGlow({
  children,
  className = "",
}: SectionGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glowY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [80, 0, -80]
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 0.8, 0.8, 0]
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden="true"
        style={{
          y: glowY,
          opacity: glowOpacity,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a35a]/[0.045] blur-[120px] md:size-[620px]"
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}