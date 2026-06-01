"use client";

import { motion } from "framer-motion";
import { Briefcase, Gavel, Home, Users, Heart, Shield } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const areas = [
  { icon: Briefcase, title: "Corporate & Commercial Law", desc: "Mergers, acquisitions, contracts, and corporate governance for businesses of all sizes." },
  { icon: Gavel, title: "Civil Litigation", desc: "Tenacious advocacy in commercial disputes, debt recovery, and civil claims." },
  { icon: Home, title: "Real Estate & Property", desc: "Land acquisition, conveyancing, title registration, and property disputes." },
  { icon: Users, title: "Employment Law", desc: "Protecting employer and employee rights — contracts, redundancy, and workplace disputes." },
  { icon: Heart, title: "Family Law", desc: "Divorce, custody, maintenance, and estate planning handled with sensitivity." },
  { icon: Shield, title: "Criminal Defense", desc: "Robust defense representation from investigation through trial and appeal." },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-16 sm:py-24 lg:py-36 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-3 sm:mb-4">What We Do</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white">Our Practice Areas</h2>
            <p className="font-body text-brand-muted max-w-sm text-sm leading-relaxed">
              Six disciplines. One firm. Comprehensive legal counsel across the matters that shape lives and businesses.
            </p>
          </div>
          <div className="w-full h-px bg-brand-gold/10 mt-8 sm:mt-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gold/10">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.08, duration: 0.6, ease }}
                className="group bg-brand-dark hover:bg-brand-charcoal transition-colors duration-300 p-7 sm:p-8 lg:p-10 cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5 sm:mb-6">
                  <Icon className="text-brand-gold group-hover:scale-110 transition-transform duration-300" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-medium text-brand-white mb-2 sm:mb-3 group-hover:text-brand-gold transition-colors duration-300">{area.title}</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">{area.desc}</p>
                <div className="mt-5 sm:mt-6 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
