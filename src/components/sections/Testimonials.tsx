"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const testimonials = [
  { quote: "1st Law handled our corporate restructuring with exceptional professionalism. They were available every step of the way and delivered results beyond our expectations.", name: "Emmanuel Boateng", role: "CEO, Boateng Holdings Ltd." },
  { quote: "I came to 1st Law in a difficult family matter. Their team was compassionate, thorough, and fought for my interests without compromise. I cannot recommend them enough.", name: "Akosua Frimpong", role: "Private Client" },
  { quote: "Their knowledge of Ghanaian property law is unmatched. They secured our land title in record time. A firm that genuinely understands what's at stake.", name: "Ibrahim Al-Hassan", role: "Director, Al-Hassan Properties" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-36 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-3 sm:mb-4">Client Voices</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-white">What our clients say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
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
              className="bg-brand-charcoal p-7 sm:p-10 lg:p-14 text-center"
            >
              <span className="font-display text-5xl sm:text-7xl text-brand-gold/30 leading-none block mb-2">&ldquo;</span>
              <p className="font-display text-lg sm:text-xl lg:text-2xl font-light text-brand-cream italic leading-relaxed mb-6 sm:mb-8">
                {testimonials[index].quote}
              </p>
              <div className="flex justify-center gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-brand-gold text-sm">★</span>)}
              </div>
              <p className="font-body font-medium text-brand-white text-sm">{testimonials[index].name}</p>
              <p className="font-body text-brand-muted text-xs mt-1">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-5 sm:mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)}
                className={`h-0.5 transition-all duration-300 ${i === index ? "bg-brand-gold w-8" : "bg-brand-muted/30 w-4"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
