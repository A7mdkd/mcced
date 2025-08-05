
'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ target, duration = 1500, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    // Use a non-linear step to make the animation feel more natural (ease-out)
    const totalSteps = 60; // Number of steps for the animation
    const stepDuration = duration / totalSteps;
    
    const counter = setInterval(() => {
      start += 1;
      const progress = start / totalSteps;
      // Ease-out function: starts fast, ends slow
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(end * easedProgress);
      
      setCount(currentCount);

      if (start >= totalSteps) {
        setCount(end); // Ensure it ends on the exact target number
        clearInterval(counter);
      }
    }, stepDuration);

    return () => clearInterval(counter);
  }, [target, duration]);

  return <span ref={countRef} className={className}>{count.toLocaleString()}</span>;
}
