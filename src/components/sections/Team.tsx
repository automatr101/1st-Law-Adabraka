"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const attorneys = [
  {
    initials: "KA",
    name: "Kwame Asante",
    title: "Managing Partner",
    focus: "Corporate & Commercial Law",
  },
  {
    initials: "AM",
    name: "Abena Mensah",
    title: "Senior Associate",
    focus: "Civil Litigation",
  },
  {
    initials: "KD",
    name: "Kofi Darko",
    title: "Associate",
    focus: "Real Estate & Property",
  },
  {
    initials: "AO",
    name: "Ama Owusu",
    title: "Corporate Counsel",
    focus: "Employment & Family Law",
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" ref={ref} className="py-28 lg:py-36 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-4">
            The People
          </p>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white">
            Meet Our Attorneys
          </h2>
          <div className="w-full h-px bg-brand-gold/10 mt-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attorneys.map((attorney, i) => (
            <motion.div
              key={attorney.name}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-brand-charcoal hover:bg-brand-black transition-colors duration-300 p-8 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-brand-black border-2 border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300 flex items-center justify-center mb-5">
                <span className="font-display text-2xl font-semibold text-brand-gold">
                  {attorney.initials}
                </span>
              </div>

              <h3 className="font-display text-xl font-medium text-brand-white mb-1">
                {attorney.name}
              </h3>
              <p className="font-body text-brand-gold text-xs tracking-wider uppercase mb-3">
                {attorney.title}
              </p>
              <p className="font-body text-brand-muted text-xs">{attorney.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
