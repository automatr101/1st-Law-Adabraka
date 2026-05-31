"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Gavel,
  Home,
  Users,
  Heart,
  Shield,
} from "lucide-react";

const areas = [
  {
    icon: Briefcase,
    title: "Corporate & Commercial Law",
    desc: "Mergers, acquisitions, contracts, and corporate governance for businesses of all sizes.",
  },
  {
    icon: Gavel,
    title: "Civil Litigation",
    desc: "Tenacious advocacy in commercial disputes, debt recovery, and civil claims.",
  },
  {
    icon: Home,
    title: "Real Estate & Property",
    desc: "Land acquisition, conveyancing, title registration, and property disputes.",
  },
  {
    icon: Users,
    title: "Employment Law",
    desc: "Protecting employer and employee rights — contracts, redundancy, and workplace disputes.",
  },
  {
    icon: Heart,
    title: "Family Law",
    desc: "Divorce, custody, maintenance, and estate planning handled with sensitivity.",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    desc: "Robust defense representation from investigation through trial and appeal.",
  },
];

export default function PracticeAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="practice-areas"
      ref={ref}
      className="py-28 lg:py-36 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-4">
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white">
              Our Practice Areas
            </h2>
            <p className="font-body text-brand-muted max-w-sm text-sm leading-relaxed">
              Six disciplines. One firm. Comprehensive legal counsel across the
              matters that shape lives and businesses.
            </p>
          </div>
          <div className="w-full h-px bg-brand-gold/10 mt-10" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gold/10">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-brand-dark hover:bg-brand-charcoal transition-colors duration-300 p-8 lg:p-10 cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-6">
                  <Icon
                    className="text-brand-gold group-hover:scale-110 transition-transform duration-300"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-xl font-medium text-brand-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  {area.desc}
                </p>
                <div className="mt-6 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
