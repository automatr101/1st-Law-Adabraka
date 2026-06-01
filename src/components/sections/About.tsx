"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-100px" } as const;

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-36 bg-brand-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease }}
          >
            <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-4 sm:mb-5">Who We Are</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white leading-tight mb-5 sm:mb-6">
              A relationship-driven firm built on{" "}
              <span className="italic text-brand-gold">trust.</span>
            </h2>
            <div className="w-16 h-px bg-brand-gold mb-6 sm:mb-8" />
            <p className="font-body text-brand-muted leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
              Founded in October 2005, 1st Law is a young, dynamic multi-practice law firm established to provide professional and effective legal services to all clients. We are headquartered at No. 28, Castle Road, Adabraka, Accra — at the heart of Ghana&apos;s legal community.
            </p>
            <p className="font-body text-brand-muted leading-relaxed text-sm sm:text-base">
              Our objective is to be relationship-driven. Client relationship management is not an afterthought — it is integral to every brief we accept, every strategy we devise, and every courtroom we enter. When your matter is before us, you are not a case number. You are our priority.
            </p>
            <div className="mt-8 sm:mt-10 flex items-center gap-6">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-brand-gold">2005</p>
                <p className="font-body text-xs text-brand-muted mt-1 tracking-wide uppercase">Year Founded</p>
              </div>
              <div className="w-px h-10 bg-brand-gold/20" />
              <div>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-brand-gold">Accra</p>
                <p className="font-body text-xs text-brand-muted mt-1 tracking-wide uppercase">Ghana</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Lead lawyer photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-brand-gold z-10" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-brand-gold z-10" />
            <div className="relative overflow-hidden aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/principal/lawyer-2.jpeg" alt="Lead Counsel — 1st Law" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-black/90 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-display text-4xl text-brand-gold/40 leading-none mb-1">&ldquo;</p>
                <p className="font-display text-base sm:text-lg font-light text-brand-cream italic leading-snug">
                  Justice is not merely a concept — it is a commitment we renew with every client who walks through our doors.
                </p>
                <p className="font-body text-brand-gold/70 text-xs mt-3 tracking-wide">— Founding Principle, 1st Law (2005)</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
