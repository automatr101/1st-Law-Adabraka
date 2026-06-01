"use client";

import { motion } from "framer-motion";
import { Award, Tv, Briefcase } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const credentials = [
  { icon: Award, label: "20+ Years at the Bar", desc: "Called to the Ghana Bar and a seasoned courtroom advocate across multiple practice areas." },
  { icon: Tv, label: "Media Legal Commentator", desc: "Regular legal analyst on national television, bringing public understanding to complex legal matters." },
  { icon: Briefcase, label: "Multi-Practice Authority", desc: "Led matters spanning corporate law, criminal defense, civil litigation, real estate and family law." },
];

export default function Principal() {
  return (
    <section className="py-16 sm:py-24 lg:py-36 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-3 sm:mb-4">Our Principal</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white">Meet the Lead Counsel</h2>
            <p className="font-body text-brand-muted text-sm leading-relaxed max-w-sm">
              Founding attorney and Managing Partner of 1st Law. A formidable presence in Ghana&apos;s courts for over two decades.
            </p>
          </div>
          <div className="w-full h-px bg-brand-gold/10 mt-8 sm:mt-10" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.85, ease }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="col-span-1 row-span-2 relative overflow-hidden aspect-[2/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/principal/lawyer-1.jpeg" alt="Lead Counsel in court robes" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
            </div>
            <div className="relative overflow-hidden aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/principal/lawyer-7.jpeg" alt="Lead Counsel at court steps" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
            </div>
            <div className="relative overflow-hidden aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/principal/lawyer-8.jpeg" alt="Lead Counsel on TV" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-brand-black/70 backdrop-blur-sm px-2 py-1">
                <Tv size={10} className="text-brand-gold" />
                <span className="font-body text-[9px] text-brand-gold tracking-wider uppercase">Media</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.85, ease, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-brand-gold/10">
              <h3 className="font-display text-3xl sm:text-4xl font-light text-brand-white mb-1">Kwame Asante</h3>
              <p className="font-body text-brand-gold text-xs tracking-[0.2em] uppercase mb-5">Managing Partner · Founding Attorney</p>
              <p className="font-body text-brand-muted text-sm sm:text-base leading-relaxed mb-4">
                A powerhouse in Ghana&apos;s legal landscape, Kwame Asante founded 1st Law in 2005 with one conviction: that every client deserves a tenacious, relationship-driven advocate — not just a legal service provider.
              </p>
              <p className="font-body text-brand-muted text-sm sm:text-base leading-relaxed">
                With over two decades at the bar, he has argued landmark matters in the High Court, Court of Appeal, and Supreme Court of Ghana. His reputation precedes him in both the courtroom and the boardroom.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              {credentials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease }}
                    className="flex gap-4"
                  >
                    <div className="w-9 h-9 shrink-0 border border-brand-gold/30 flex items-center justify-center mt-0.5">
                      <Icon size={15} className="text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-body text-brand-white text-sm font-medium mb-1">{item.label}</p>
                      <p className="font-body text-brand-muted text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={vp}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 sm:mt-12"
            >
              <a href="#contact" className="inline-flex items-center gap-2 font-body text-sm text-brand-gold border border-brand-gold/40 px-6 py-3 hover:bg-brand-gold hover:text-brand-black transition-all duration-300 tracking-wide">
                Book a Consultation →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
