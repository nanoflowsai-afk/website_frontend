"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { normalizeImageUrl } from "@/lib/images";

export type HeroSlide = {
  id: number;
  heading: string;
  subHeading: string;
  tags: string[];
  backgroundImageUrl: string;
  isActive: boolean;
  displayOrder: number;
};

type Props = {
  slides: HeroSlide[];
};

const rotatingKeywords = [
  "AI Automation",
  "AI Agents",
  "Intelligent Software",
  "Business Intelligence",
  "Growth Systems",
];

export function HeroCarousel({ slides }: Props) {
  const activeSlides = useMemo(
    () => slides.filter((s) => s.isActive).sort((a, b) => a.displayOrder - b.displayOrder),
    [slides],
  );

  const [index, setIndex] = useState(0);
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!activeSlides.length) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % activeSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [activeSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % rotatingKeywords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const defaultHeadline = "Empowering Businesses with Generative AI & Intelligent Automation";
  const defaultSubheadline = "From ideas to intelligent systems — we design AI-driven software, automation, and agents that run your business smarter, faster, and at scale.";

  const defaultSlide = {
    id: 0,
    heading: defaultHeadline,
    subHeading: defaultSubheadline,
    tags: rotatingKeywords,
    backgroundImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80",
    isActive: true,
    displayOrder: 0,
  };

  const current = activeSlides.length ? activeSlides[index] : defaultSlide;
  const bgUrl = current.backgroundImageUrl?.trim() || defaultSlide.backgroundImageUrl;

  // Normalize hero background image URL the same way as team avatars/blog images,
  // so that /uploads/* paths are always resolved against the backend API base URL.
  const normalizedBgUrl = useMemo(() => {
    const url = bgUrl || defaultSlide.backgroundImageUrl;
    return normalizeImageUrl(url);
  }, [bgUrl]);

  // Preload current image and next slide image
  useEffect(() => {
    if (!normalizedBgUrl) return;
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.warn("Hero image failed to load:", normalizedBgUrl);
      setImageLoaded(true); // Still show even if failed
    };
    img.src = normalizedBgUrl;
  }, [normalizedBgUrl]);

  // Preload next slide image
  useEffect(() => {
    if (!activeSlides.length || activeSlides.length <= 1) return;
    const nextIndex = (index + 1) % activeSlides.length;
    const nextSlide = activeSlides[nextIndex];
    if (!nextSlide?.backgroundImageUrl) return;
    const nextUrl = normalizeImageUrl(nextSlide.backgroundImageUrl);
    const img = new Image();
    img.src = nextUrl;
  }, [index, activeSlides]);

  return (
    <div className="relative isolate overflow-hidden min-h-[auto] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={normalizedBgUrl}
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={normalizedBgUrl}
            alt="Hero background"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? "blur-0" : "blur-md"
            }`}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-center text-center lg:text-left">
          <div className="flex-1 space-y-5 lg:max-w-3xl mx-auto lg:min-h-0 flex flex-col justify-center">
            <div className="flex items-center justify-center lg:justify-start gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 mx-auto lg:mx-0 w-fit max-w-xs sm:max-w-sm">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-white truncate">
                NanoFlows AI Software Technologies
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-5"
              >
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]">
                  {current.heading}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
                  {current.subHeading}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={keywordIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1.5 text-sm font-medium text-white"
                >
                  {rotatingKeywords[keywordIndex]}
                </motion.span>
              </AnimatePresence>
              {current.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-sm font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
              <a
                href="/login"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/40"
              >
                <span className="relative z-10">Get Started</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-gray-900 shadow-lg transition hover:-translate-y-0.5"
              >
                Explore Services
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
