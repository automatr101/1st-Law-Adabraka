"use client";

import { useState, useEffect } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "1st Law handled our corporate restructuring with exceptional professionalism. They were available every step of the way and delivered results beyond our expectations.",
    name: "Emmanuel Boateng",
    role: "CEO, Boateng Holdings Ltd.",
  },
  {
    quote:
      "I came to 1st Law in a difficult family matter. Their team was compassionate, thorough, and fought for my interests without compromise. I cannot recommend them enough.",
    name: "Akosua Frimpong",
    role: "Private Client",
  },
  {
    quote:
      "Their knowledge of Ghanaian property law is unmatched. They secured our land title in record time. A firm that genuinely understands what's at stake.",
    name: "Ibrahim Al-Hassan",
    role: "Director, Al-Hassan Properties",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-4">
            Client Voices
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-brand-white">
            What our clients say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease }}
              className="bg-brand-charcoal p-10 lg:p-14 text-center"
            >
              {/* Gold quote mark */}
              <span className="font-display text-7xl text-brand-gold/30 leading-none block mb-2">
                &ldquo;
              </span>

              <p className="font-display text-xl lg:text-2xl font-light text-brand-cream italic leading-relaxed mb-8">
                {testimonials[index].quote}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-gold">
                    ★
                  </span>
                ))}
              </div>

              <p className="font-body font-medium text-brand-white text-sm">
                {testimonials[index].name}
              </p>
              <p className="font-body text-brand-muted text-xs mt-1">
                {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-6 h-0.5 transition-all duration-300 ${
                  i === index ? "bg-brand-gold" : "bg-brand-muted/30"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
