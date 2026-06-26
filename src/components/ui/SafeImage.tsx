"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "src" | "alt" | "onError"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = "Cleaning service",
  fallbackSrc,
  className = "",
  fill,
  width,
  height,
  priority,
  sizes,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc && fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // If width and height are not provided, default to fill layout
  const isFill = fill ?? (!width && !height);

  return (
    <div className={`relative overflow-hidden ${isFill ? "w-full h-full" : ""} ${className}`}>
      {/* Skeleton loader */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse flex items-center justify-center z-10">
          <svg
            className="w-10 h-10 text-slate-300 dark:text-slate-600 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}

      {/* Styled Gradient Fallback */}
      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#DC0D73] to-[#FDAE00] flex flex-col items-center justify-center p-4 text-white text-center z-10">
          <div className="backdrop-blur-md bg-white/20 p-4 rounded-full border border-white/30 shadow-lg mb-2 transform scale-90 md:scale-100 transition-all duration-300 hover:scale-105">
            <svg
              className="w-8 h-8 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)] animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {/* Sparkles / Clean star icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 21l-1.81-5.096L2 15l5.096-1.81L9 8l1.81 5.096L16 15l-6.187.904zM19.071 4.929l-.707 1.996-1.996.707 1.996.707.707 1.996.707-1.996 1.996-.707-1.996-.707-.707-1.996z"
              />
            </svg>
          </div>
          <span className="text-xs md:text-sm font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            Inter-Cleaning Services
          </span>
        </div>
      ) : (
        /* Next.js Image component wrapper */
        <Image
          src={imgSrc}
          alt={alt}
          fill={isFill}
          width={isFill ? undefined : width}
          height={isFill ? undefined : height}
          priority={priority}
          sizes={sizes || (isFill ? "(max-width: 768px) 100vw, 50vw" : undefined)}
          onLoad={handleLoad}
          onError={handleError}
          className={`object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          {...props}
        />
      )}
    </div>
  );
};
