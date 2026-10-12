"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
const photos = [
  "/images/about/IMG_3619.webp",
  "/images/about/IMG_3614.webp",
  "/images/about/IMG_3708.webp",
  "/images/about/IMG_3696.webp",
];
export default function AboutScrollBackground() {
  const { scrollYProgress } = useScroll();
  const firstOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.3],
    [0.3, 0.3, 0]
  );
  const secondOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.3, 0.43, 0.55],
    [0, 0.3, 0.3, 0]
  );
  const thirdOpacity = useTransform(
    scrollYProgress,
    [0.43, 0.55, 0.68, 0.8],
    [0, 0.3, 0.3, 0]
  );
  const fourthOpacity = useTransform(
    scrollYProgress,
    [0.68, 0.8, 1],
    [0, 0.3, 0.3]
  );
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-6%"]
  );
  const imageLayers = [
    { src: photos[0], opacity: firstOpacity },
    { src: photos[1], opacity: secondOpacity },
    { src: photos[2], opacity: thirdOpacity },
    { src: photos[3], opacity: fourthOpacity },
  ];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-x-0 -bottom-[8%] -top-[8%]"
      >
        {imageLayers.map(({ src, opacity }, index) => (
          <motion.div
            key={src}
            style={{ opacity }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#f3efe6]/70 via-[#e8f7ef]/35 to-[#dff4ff]/25" />
    </div>
  );
}
