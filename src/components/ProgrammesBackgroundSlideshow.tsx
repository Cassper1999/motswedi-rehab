"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const backgroundImages = [
  "/images/programmes/background/IMG_3638.JPG",
  "/images/programmes/background/IMG_3640.JPG",
  "/images/programmes/background/IMG_3650.JPG",
  "/images/programmes/background/IMG_3652.JPG",
  "/images/programmes/background/IMG_3658.JPG",
  "/images/programmes/background/IMG_3659.JPG",
  "/images/programmes/background/IMG_3661.JPG",
  "/images/programmes/background/IMG_3663.JPG",
  "/images/programmes/background/IMG_3671.JPG",
  "/images/programmes/background/IMG_3687.JPG",
  "/images/programmes/background/IMG_3696.JPG",
  "/images/programmes/background/IMG_3697.JPG",
  "/images/programmes/background/IMG_3716.JPG",
];
export default function ProgrammesBackgroundSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    // Automatically change photo every 4 seconds
    const interval = window.setInterval(() => {
      setCurrentImage(
        (previous) => (previous + 1) % backgroundImages.length
      );
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* AUTOMATIC SMOOTH CROSSFADE */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImages[currentImage]}
            alt=""
            fill
            sizes="100vw"
            priority={currentImage === 0}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
      {/* SOFT WHITE OVERLAY FOR READABILITY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(247,245,241,0.82) 0%, rgba(247,245,241,0.66) 50%, rgba(247,245,241,0.48) 100%)",
        }}
      />
    </div>
  );
}