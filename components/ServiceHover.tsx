"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useState } from "react";

type ServiceHoverProps = {
  children: ReactNode;
};

export default function ServiceHover({
  children,
}: ServiceHoverProps) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      animate={{
        x: active ? 6 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="relative"
    >
      {children}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a35a]/10 blur-[35px]"
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1.2 : 0.6,
        }}
        transition={{
          duration: 0.4,
        }}
      />
    </motion.div>
  );
}