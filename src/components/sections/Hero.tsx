"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_10%_90%,rgba(201,168,76,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_10%,rgba(201,168,76,0.05),transparent)]" />

      {/* Decorative vertical line */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-brand-gold/40 text-brand-gold text-xs font-body tracking-[0.2em] uppercase mb-10"
          >
            <span>⚖</span>
            <span>Every Step of the Way</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-brand-white leading-[1.05] mb-8"
          >
            Reliable legal support
            <br />
            <span className="text-brand-gold italic font-medium">
              for when it matters
            </span>
            <br />
            most.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-body text-brand-muted text-lg max-w-xl leading-relaxed mb-12"
          >
            1st Law is a multi-practice firm built on relationships. From Adabraka,
            Accra — delivering professional, effective legal counsel since 2005.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-4 mb-20"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-brand-gold text-brand-black font-body font-medium text-sm px-7 py-3.5 hover:bg-brand-gold-light transition-colors duration-300 tracking-wide"
            >
              Get Support
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+233302000000"
              className="inline-flex items-center gap-2 font-body text-sm text-brand-cream hover:text-brand-gold transition-colors px-5 py-3.5 tracking-wide"
            >
              <Phone size={15} />
              Call Our Office
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {["KA", "AM", "KD", "AO"].map((initials, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-brand-charcoal border-2 border-brand-black flex items-center justify-center text-xs font-body font-medium text-brand-gold"
                  style={{ zIndex: 4 - i }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <p className="font-body text-sm text-brand-white font-medium">
                Trusted by 30,000+ Clients
              </p>
              <div className="flex gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-gold text-xs">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
