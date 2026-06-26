"use client";

import React, { useState, useRef, useEffect } from "react";
import { SafeImage } from "./SafeImage";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  altBefore = "Before cleaning",
  altAfter = "After cleaning",
  className = "",
  beforeLabel,
  afterLabel,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden h-full w-full rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{ cursor: isDragging ? "ew-resize" : "default" }}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <SafeImage src={afterImage} alt={altAfter} className="w-full h-full" />
        
        {/* Label After */}
        <span className="absolute top-4 right-4 bg-green-600 text-white font-montserrat text-2xs uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow-md z-20">
          {afterLabel || "After"}
        </span>
      </div>

      {/* Before Image (Overlay clipped by width) */}
      <div
        className="absolute inset-0 top-0 left-0 h-full overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* Fixed-width child container prevents image distortion */}
        <div
          className="absolute inset-0 h-full"
          style={{ width: containerWidth || "100%" }}
        >
          <div className="w-full h-full relative">
            <SafeImage src={beforeImage} alt={altBefore} className="w-full h-full" />
          </div>
          
          {/* Label Before */}
          <span className="absolute top-4 left-4 bg-red-600 text-white font-montserrat text-2xs uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow-md z-20">
            {beforeLabel || "Before"}
          </span>
        </div>
      </div>

      {/* Slider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg z-30"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Slider Handle Button */}
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-xl border-2 border-white transform -translate-x-1/2 scale-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-ew-resize">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default BeforeAfterSlider;

