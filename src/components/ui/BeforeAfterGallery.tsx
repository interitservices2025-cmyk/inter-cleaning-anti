"use client";

import React, { useState, useEffect, useRef } from "react";
import { SafeImage } from "./SafeImage";
import { Icons } from "./Icons";
import { useTranslation } from "@/hooks/useTranslation";

export interface GalleryProject {
  id: number;
  title: string;
  service: string;
  location: string;
  desc: string;
  imageBefore: string;
  imageAfter: string;
}

interface BeforeAfterGalleryProps {
  projects: GalleryProject[];
  className?: string;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({
  projects,
  className = "",
}) => {
  const { t, language } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [phase, setPhase] = useState<"before" | "after">("before");
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Autoplay logic using simple and robust setTimeout (prevents infinite render loops)
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      if (phase === "before") {
        setPhase("after");
      } else {
        setPhase("before");
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }
    }, 3000); // 3 seconds per phase

    return () => clearTimeout(timer);
  }, [phase, currentSlide, isPaused, projects.length]);

  const setCurrentProject = (index: number) => {
    setCurrentSlide(index);
    setPhase("before");
  };

  const nextProject = () => {
    setCurrentProject((currentSlide + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((currentSlide - 1 + projects.length) % projects.length);
  };

  // Touch Swipe Support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diffX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diffX > swipeThreshold) {
      nextProject(); // Swiped left
    } else if (diffX < -swipeThreshold) {
      prevProject(); // Swiped right
    }
  };

  // Safe labels checking translation fallback
  const labelBefore = language === "fr" ? "AVANT" : "BEFORE";
  const labelAfter = language === "fr" ? "APRÈS" : "AFTER";

  return (
    <div
      className={`w-full ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Centered Gallery Container: 70% width on Desktop, responsive, soft shadow, modern rounded corners */}
      <div className="relative max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100/80">
        
        {/* Main interactive area with touch events */}
        <div 
          className="relative h-[280px] sm:h-[400px] md:h-[480px] w-full overflow-hidden bg-slate-900 group/gallery"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Track Wrapper (for smooth horizontal transition) */}
          <div
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div 
                  key={project.id} 
                  className="w-full h-full flex-shrink-0 relative overflow-hidden"
                >
                  {/* BEFORE Image (Always background of the slide) */}
                  <div className="absolute inset-0 w-full h-full z-0">
                    <SafeImage
                      src={project.imageBefore}
                      alt={`${project.title} - Before`}
                      className="w-full h-full object-cover select-none scale-100 group-hover/gallery:scale-102 transition-transform duration-[4000ms]"
                      fill
                      priority={idx === 0}
                    />
                  </div>

                  {/* AFTER Image (Superimposed absolute, transitions opacity based on active status & phase) */}
                  <div
                    className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-1000 ease-in-out pointer-events-none`}
                    style={{ opacity: isActive && phase === "after" ? 1 : 0 }}
                  >
                    <SafeImage
                      src={project.imageAfter}
                      alt={`${project.title} - After`}
                      className="w-full h-full object-cover select-none scale-100 group-hover/gallery:scale-102 transition-transform duration-[4000ms]"
                      fill
                    />
                    
                    {/* Watermark: Premium and subtle, only on AFTER images, in a corner */}
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 pointer-events-none select-none animate-pulse duration-3000">
                      <img 
                        src="/logo.png" 
                        alt="Inter-Cleaning Logo" 
                        className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-80"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Badges Overlays: 🔴 BEFORE vs 🟢 AFTER with smooth transitions */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {/* BEFORE Badge */}
              <span 
                className={`flex items-center gap-1.5 bg-red-600/90 text-white font-montserrat text-2xs md:text-xs uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow-lg backdrop-blur-sm border border-red-500/20 transition-all duration-500 ${
                  phase === "before" 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 -translate-y-2 scale-90 pointer-events-none"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                🔴 {labelBefore}
              </span>

              {/* AFTER Badge */}
              <span 
                className={`absolute top-0 left-0 flex items-center gap-1.5 bg-emerald-600/90 text-white font-montserrat text-2xs md:text-xs uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow-lg backdrop-blur-sm border border-emerald-500/20 transition-all duration-500 ${
                  phase === "after" 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 -translate-y-2 scale-90 pointer-events-none"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                🟢 {labelAfter}
              </span>
            </div>
          </div>

          {/* Local styles for smooth animations without main-thread heavy JS intervals */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes progressFill {
              from { width: 0%; }
              to { width: 100%; }
            }
            @keyframes arrowFadeInBounce {
              0%, 75% { opacity: 0; transform: translate(-50%, -50%) scale(0.7); }
              85% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
              90% { transform: translate(-50%, -50%) scale(0.95); }
              100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
            .animate-progress-fill {
              animation: progressFill 3000ms linear forwards;
            }
            .animate-arrow-bounce-delay {
              animation: arrowFadeInBounce 3000ms infinite;
            }
          `}} />

          {/* Central Optional Arrow Transition Animation indicator */}
          {phase === "before" && (
            <div 
              className="absolute top-1/2 left-1/2 z-20 pointer-events-none animate-arrow-bounce-delay"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-2xl flex items-center justify-center">
                <Icons.ArrowRight className="text-primary w-6 h-6 animate-pulse" />
              </div>
            </div>
          )}

          {/* Visual Progress Bar at the bottom of the image area */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20 overflow-hidden">
            <div 
              key={`${currentSlide}-${phase}`}
              className={`h-full animate-progress-fill ${
                phase === "before" ? "bg-red-500" : "bg-emerald-500"
              }`}
              style={{
                animationPlayState: isPaused ? "paused" : "running"
              }}
            />
          </div>

          {/* Navigation Arrows: Overlaid on the sides, elegant circular buttons */}
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-text-dark dark:text-white flex items-center justify-center border border-gray-200/50 hover:bg-primary hover:text-white hover:border-primary shadow-lg transition-all duration-200 opacity-0 group-hover/gallery:opacity-100 translate-x-[-10px] group-hover/gallery:translate-x-0 cursor-pointer"
          >
            <Icons.ChevronRight className="rotate-180 w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextProject}
            aria-label="Next project"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-text-dark dark:text-white flex items-center justify-center border border-gray-200/50 hover:bg-primary hover:text-white hover:border-primary shadow-lg transition-all duration-200 opacity-0 group-hover/gallery:opacity-100 translate-x-[10px] group-hover/gallery:translate-x-0 cursor-pointer"
          >
            <Icons.ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Project Description Details Section (below the image) */}
        <div className="p-6 md:p-8 bg-white border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-primary/10 text-primary font-montserrat font-bold text-3xs uppercase tracking-widest px-3 py-1 rounded-full">
                {projects[currentSlide].service}
              </span>
              <span className="bg-slate-50 text-text-muted font-montserrat font-bold text-3xs uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                <Icons.MapPin size={10} className="text-primary" /> {projects[currentSlide].location}
              </span>
            </div>
            
            <h3 className="font-montserrat font-extrabold text-xl md:text-2xl text-text-dark">
              {projects[currentSlide].title}
            </h3>
            
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-opensans">
              {projects[currentSlide].desc}
            </p>
          </div>

          {/* Dots Pagination indicators */}
          <div className="flex items-center gap-2 self-center md:self-end pb-1">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProject(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide 
                    ? "bg-primary w-6" 
                    : "bg-slate-200 hover:bg-slate-300 w-2.5"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
export default BeforeAfterGallery;
