"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff]"
        >
          {/* Background glow effects */}
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#7ab648]/25 blur-3xl" />
          <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />

          {/* Main loader card */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 mx-5 w-full max-w-md overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/80 p-8 text-center shadow-[0_35px_100px_rgba(1,77,87,0.22)] backdrop-blur-xl"
          >
            <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-100/70 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#7ab648]/20 blur-3xl" />

            <div className="relative z-10">
              {/* Logo pulse */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_20px_60px_rgba(1,77,87,0.18)]"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/logos/motswedilogo.png"
                    alt="Motswedi Rehabilitation Centre"
                    width={100}
                    height={100}
                    priority
                    className="h-auto w-24"
                  />
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-[#7ab648]"
              >
                Motswedi Rehabilitation Centre
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="mt-3 text-3xl font-black leading-tight text-[#014d57]"
              >
                A Fountain <br />
                <span className="text-[#7ab648]">Of Hope</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-4 text-sm font-medium leading-relaxed text-gray-600"
              >
                Creating pathways to independence, dignity and inclusion.
              </motion.p>

              {/* Loading bar */}
              <div className="mt-8 h-2 overflow-hidden rounded-full bg-[#014d57]/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, delay: 0.25, ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57] shadow-[0_0_20px_rgba(122,182,72,0.8)]"
                />
              </div>

              {/* Animated dots */}
              <div className="mt-5 flex justify-center gap-2">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    animate={{
                      y: [0, -6, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: dot * 0.15,
                    }}
                    className="h-2.5 w-2.5 rounded-full bg-[#7ab648]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}