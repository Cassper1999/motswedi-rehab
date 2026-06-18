"use client";
import { useEffect } from "react";
export default function SparkleCursor() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const sparkle = document.createElement("div");
      sparkle.style.position = "fixed";
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      sparkle.style.width = "5px";
      sparkle.style.height = "5px";
      sparkle.style.borderRadius = "9999px";
      sparkle.style.pointerEvents = "none";
      sparkle.style.zIndex = "9999";
      sparkle.style.background =
        Math.random() > 0.5 ? "#7ab648" : "#4fd1c5";
      sparkle.style.boxShadow =
        "0 0 10px rgba(122,182,72,.8), 0 0 20px rgba(79,209,197,.6)";
      sparkle.style.transform = "translate(-50%,-50%)";
      document.body.appendChild(sparkle);
      sparkle.animate(
        [
          { opacity: 1, transform: "translate(-50%,-50%) scale(1)" },
          { opacity: 0, transform: "translate(-50%,-50%) scale(2)" }
        ],
        {
          duration: 700,
          easing: "ease-out"
        }
      );
      setTimeout(() => sparkle.remove(), 700);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return null;
}
