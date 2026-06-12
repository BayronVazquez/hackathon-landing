"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export function FadeIn({ children, className = "", delay = 0, direction = "up" }: FadeInProps) {
  const shouldReduce = useReducedMotion();

  const offsetMap = { up: [0, 28], down: [0, -28], left: [28, 0], right: [-28, 0], none: [0, 0] };
  const [x, y] = offsetMap[direction];

  return (
    <motion.div
      className={className}
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
