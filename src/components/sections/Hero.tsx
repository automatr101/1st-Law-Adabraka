"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-start overflow-hidden noise-overlay sm:min-h-screen"
    >
      {/* ── Layer 1: Photo ── */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.jpg"
          alt="Ghana Supreme Court — Accra"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Layer 2: Dark base wash ── */}
      <div className="absolute inset-0 bg-brand-black/78" />

      {/* ── Layer 3: Gold radial glows ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_10%_90%,rgba(201,168,76,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_10%,rgba(201,168,76,0.07),transparent)]" />

      {/* ── Layer 4: Cinematic vignette ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />


      {/* Content — starts directly below fixed navbar (80px) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-[88px] sm:pt-32 lg:pt-36 pb-20 sm:pb-32">
        <div className="max-w-4xl">

          {/* Badge */}
          <FadeUp delay={0} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 border border-brand-gold/40 text-brand-gold text-[10px] sm:text-xs font-body tracking-[0.2em] uppercase mb-6 sm:mb-10">
              <span>⚖</span>
              <span>Every Step of the Way</span>
            </div>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0.12}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-brand-white leading-[1.05] mb-5 sm:mb-8">
              Reliable legal support
              <br />
              <span className="text-brand-gold italic font-medium">
                for when it matters
              </span>
              <br />
              most.
            </h1>
          </FadeUp>

          {/* Subtext */}
          <FadeUp delay={0.24}>
            <p className="font-body text-brand-muted text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mb-7 sm:mb-12">
              1st Law is a multi-practice firm built on relationships. From Adabraka,
              Accra — delivering professional, effective legal counsel since 2005.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.36}>
            <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-16">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-brand-gold text-brand-black font-body font-medium text-sm px-5 sm:px-7 py-3 sm:py-3.5 hover:bg-brand-gold-light transition-colors duration-300 tracking-wide"
              >
                Get Support
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+233244124472"
                className="inline-flex items-center gap-2 font-body text-sm text-brand-cream hover:text-brand-gold transition-colors py-3 tracking-wide"
              >
                <Phone size={14} />
                Call Our Office
              </a>
            </div>
          </FadeUp>

          {/* Social proof */}
          <FadeUp delay={0.48}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "/team/attorney-1.png",
                  "/team/attorney-2.png",
                  "/team/attorney-3.png",
                  "/team/attorney-4.png",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-brand-black overflow-hidden bg-brand-charcoal"
                    style={{ zIndex: 4 - i }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-body text-xs sm:text-sm text-brand-white font-medium">
                  Trusted by 370+ Clients
                </p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-brand-gold text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* Bottom info bar + scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-end justify-between"
      >
        {/* Firm credentials */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {["Est. 2005", "Adabraka, Accra", "6 Practice Areas"].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-brand-gold/40" />}
              <span className="font-body text-[10px] sm:text-xs text-brand-muted/70 tracking-[0.15em] uppercase">{item}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-body text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-brand-muted/50">Scroll</span>
          <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-brand-gold/60 to-transparent" />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
