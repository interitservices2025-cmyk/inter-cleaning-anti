"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  animationType?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-up";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 600,
  animationType = "fade-in-up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08, // Trigger when 8% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it fully hits the viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  // Determine transition classes based on visibility and animation type
  const getAnimationClasses = () => {
    switch (animationType) {
      case "fade-in-up":
        return isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-[0.98]";
      case "fade-in":
        return isVisible ? "opacity-100" : "opacity-0";
      case "slide-in-left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12";
      case "slide-in-right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
      case "scale-up":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90";
      default:
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
