import { useState, useEffect } from "react";

export function RandomVerticalSvgLine() {
  const [size, setSize] = useState<{ width: number; height: number }>();
  const [d, setD] = useState<string>();

  useEffect(() => {
    const resetSize = () => {
      const width = window.innerWidth;
      const height = document.body.scrollHeight;
      setSize({ width, height });
      const step = 40;
      let path = `M ${Math.round(Math.random() * width)} 0 Q`;
      let totalSteps = Math.round(height / step);
      let beforeY = 0;

      while (totalSteps > 0) {
        const x1 = Math.round(Math.random() * width);
        const y1 = beforeY + Math.round(Math.random() * 10 * step);
        const x2 = Math.round(Math.random() * width);
        const y2 = beforeY + Math.round(Math.random() * 10 * step);
        beforeY = y1;
        path += ` ${x1} ${y1}, ${x2} ${y2} Q`;
        totalSteps -= 1;
      }

      const randomStep = Math.round(Math.random() * 10 * step);
      const randomStepTwo = beforeY + Math.round(Math.random() * 10 * step);
      path += ` ${randomStep} ${randomStepTwo}`;
      setD(path);
    };

    resetSize();
    window.addEventListener("resize", resetSize);
    return () => window.removeEventListener("resize", resetSize);
  }, []);

  return (
    <svg
      {...size}
      viewBox={`0 0 ${size?.width} ${size?.height}`}
      className="opacity-30 absolute top-0 left-0 z-0 stroke-blue fill-none"
    >
      <path d={d} strokeWidth="2" stroke="current" />
    </svg>
  );
}