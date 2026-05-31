"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 lg:py-36 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-5">
              Who We Are
            </p>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white leading-tight mb-6">
              A relationship-driven firm built on{" "}
              <span className="italic text-brand-gold">trust.</span>
            </h2>

            {/* Gold rule */}
            <div className="w-16 h-px bg-brand-gold mb-8" />

            <p className="font-body text-brand-muted leading-relaxed mb-5 text-base">
              Founded in October 2005, 1st Law is a young, dynamic multi-practice law
              firm established to provide professional and effective legal services to
              all clients. We are headquartered at No. 28, Castle Road, Adabraka,
              Accra — at the heart of Ghana&apos;s legal community.
            </p>
            <p className="font-body text-brand-muted leading-relaxed text-base">
              Our objective is to be relationship-driven. Client relationship
              management is not an afterthought — it is integral to every brief we
              accept, every strategy we devise, and every courtroom we enter. When
              your matter is before us, you are not a case number. You are our
              priority.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="font-display text-3xl font-semibold text-brand-gold">
                  2005
                </p>
                <p className="font-body text-xs text-brand-muted mt-1 tracking-wide uppercase">
                  Year Founded
                </p>
              </div>
              <div className="w-px h-10 bg-brand-gold/20" />
              <div>
                <p className="font-display text-3xl font-semibold text-brand-gold">
                  Accra
                </p>
                <p className="font-body text-xs text-brand-muted mt-1 tracking-wide uppercase">
                  Ghana
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Decorative quote block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="relative bg-brand-charcoal p-10 lg:p-14">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-gold" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-gold" />

              <p className="font-display text-6xl text-brand-gold/20 leading-none mb-2">
                &ldquo;
              </p>
              <blockquote className="font-display text-2xl lg:text-3xl font-light text-brand-cream italic leading-snug">
                Justice is not merely a concept — it is a commitment we renew with
                every client who walks through our doors.
              </blockquote>
              <p className="font-body text-brand-muted text-sm mt-6 tracking-wide">
                — Founding Principle, 1st Law (2005)
              </p>

              {/* Abstract gold lines */}
              <div className="mt-10 flex flex-col gap-2">
                <div className="h-px bg-gradient-to-r from-brand-gold to-transparent" />
                <div className="h-px bg-gradient-to-r from-brand-gold/50 to-transparent w-3/4" />
                <div className="h-px bg-gradient-to-r from-brand-gold/25 to-transparent w-1/2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
