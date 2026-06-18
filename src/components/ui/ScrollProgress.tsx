"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Soft track */}
      <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-white/20" />

      {/* Animated premium progress */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed left-0 top-0 z-[101]
          h-1 w-full origin-left
          bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]
          shadow-[0_0_20px_rgba(122,182,72,0.75)]
        "
      />

      {/* Glow underneath */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed left-0 top-0 z-[100]
          h-2 w-full origin-left
          bg-gradient-to-r from-[#7ab648]/40 via-cyan-400/40 to-[#014d57]/40
          blur-md
        "
      />
    </>
  );
}