"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, UserCheck, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Trophy,
    title: "Experienced Team",
    body: "Our attorneys bring decades of combined experience across corporate, litigation, real estate, and criminal practice — trained to navigate Ghana's legal landscape with precision.",
  },
  {
    icon: UserCheck,
    title: "Client-First Approach",
    body: "We believe legal representation begins with listening. Every strategy is built around your specific circumstances, goals, and constraints — not a template.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    body: "85% client success rate across 650,000+ matters. Our track record speaks plainly: we win, we resolve, and we protect the interests entrusted to us.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-4">
            Why 1st Law
          </p>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white">
            Three pillars of our practice
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 border border-brand-gold/30 mb-8">
                  <Icon className="text-brand-gold" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-medium text-brand-white mb-1">
                  {pillar.title}
                </h3>
                {/* Gold underline accent */}
                <div className="w-8 h-0.5 bg-brand-gold mx-auto mb-5" />
                <p className="font-body text-brand-muted text-sm leading-relaxed max-w-xs mx-auto">
                  {pillar.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
