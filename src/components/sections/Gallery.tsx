"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-60px" } as const;

// Curated firm moments — lead counsel, associates, team.
const photos = [
  { src: "/principal/lawyer-1.jpeg", alt: "Lead Counsel in court robes", span: "row-span-2" },
  { src: "/principal/lawyer-8.jpeg", alt: "Legal commentary on national television", span: "" },
  { src: "/gallery/george-1.jpeg", alt: "George Adusei Sarpong, Associate", span: "row-span-2" },
  { src: "/principal/lawyer-9.jpeg", alt: "1st Law team at the Law Court Complex", span: "" },
  { src: "/team/team-group.jpeg", alt: "The 1st Law team", span: "col-span-2" },
  { src: "/principal/lawyer-2.jpeg", alt: "Lead Counsel, robed and ready", span: "row-span-2" },
  { src: "/principal/lawyer-5.jpeg", alt: "1st Law counsel with a client", span: "" },
  { src: "/gallery/george-2.jpeg", alt: "George Adusei Sarpong at chambers", span: "" },
  { src: "/principal/lawyer-7.jpeg", alt: "Lead Counsel on the court steps", span: "" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % photos.length)), []);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-36 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-3 sm:mb-4">In Practice</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white">
              Life at 1st Law
            </h2>
            <p className="font-body text-brand-muted text-sm leading-relaxed max-w-sm">
              From the courtroom to the chambers — moments that capture the people and practice behind the firm.
            </p>
          </div>
          <div className="w-full h-px bg-brand-gold/10 mt-8 sm:mt-10" />
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[200px] gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: (i % 4) * 0.06, duration: 0.55, ease }}
              className={`group relative overflow-hidden bg-brand-charcoal ${photo.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-body text-xs text-brand-cream text-left leading-snug">{photo.alt}</p>
              </div>
              {/* Gold corner tick */}
              <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-brand-gold/0 group-hover:border-brand-gold/70 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-brand-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 text-brand-cream hover:text-brand-gold transition-colors z-10"
              aria-label="Close"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-6 text-brand-cream/70 hover:text-brand-gold transition-colors z-10 p-2"
              aria-label="Previous"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            {/* Image */}
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease }}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos[active].src}
                alt={photos[active].alt}
                className="max-w-full max-h-[78vh] object-contain"
              />
              <p className="font-body text-sm text-brand-muted mt-4 text-center">{photos[active].alt}</p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-6 text-brand-cream/70 hover:text-brand-gold transition-colors z-10 p-2"
              aria-label="Next"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
