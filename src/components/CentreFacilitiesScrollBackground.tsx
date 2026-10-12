"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/programmes/centre-facilities-and-services/IMG_3630.JPG",
  "/images/programmes/centre-facilities-and-services/IMG_3678.JPG",
  "/images/programmes/centre-facilities-and-services/IMG_3697.JPG",
];

export default function CentreFacilitiesScrollBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${images[index]}")`,
            }}
          />

          {/* soft overlay to match About page feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f3efe6]/92 via-[#e8f7ef]/85 to-[#dff4ff]/82" />

          {/* soft glow accents */}
          <div className="absolute right-0 top-0 h-[850px] w-[850px] rounded-full bg-cyan-200/20 blur-3xl" />
          <div className="absolute left-0 top-40 h-[500px] w-[500px] rounded-full bg-[#6aa93b]/10 blur-3xl" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}