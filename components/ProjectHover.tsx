"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";

type ProjectHoverProps = {
  children: ReactNode;
};

export default function ProjectHover({
  children,
}: ProjectHoverProps) {
  const [active, setActive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const offsetX =
      event.clientX - (rect.left + rect.width / 2);

    const offsetY =
      event.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.015);
    y.set(offsetY * 0.015);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setActive(false);
  };

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onMouseEnter={() => setActive(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {children}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[#c9a35a]/10 blur-[90px]"
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1 : 0.65,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.div>
  );
}