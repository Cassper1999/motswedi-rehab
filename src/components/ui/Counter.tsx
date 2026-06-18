"use client";

import { useState } from "react";
import { animate } from "framer-motion";

export default function Counter({
  value,
}: {
  value: number;
}) {
  const [count, setCount] = useState(0);

  const startCount = () => {
    animate(0, value, {
      duration: 1.5,
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });
  };

  return (
    <span onMouseEnter={startCount}>
      {count}+
    </span>
  );
}