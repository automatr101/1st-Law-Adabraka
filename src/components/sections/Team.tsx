"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const attorneys = [
  { initials: "KA", photo: "/principal/lawyer-4.jpeg", name: "Kwame Asante", title: "Managing Partner", focus: "Corporate & Commercial Law" },
  { initials: "EA", photo: "/team/ebow-akombeah-sackey.jpeg", name: "Ebow Akombeah Sackey", title: "Associate", focus: "1st Law" },
  { initials: "VC", photo: "/team/victoria-crentsil.jpeg", name: "Victoria Crentsil", title: "Associate", focus: "1st Law" },
  { initials: "GA", photo: "/team/george-adusei-sarpong.jpeg", name: "George Adusei Sarpong", title: "Associate", focus: "1st Law" },
  { initials: "JB", photo: "/team/james-bamfo.jpeg", name: "James Bamfo", title: "Staff Member", focus: "1st Law" },
];

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 lg:py-36 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-3 sm:mb-4">The People</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white">Meet Our Attorneys</h2>
          <div className="w-full h-px bg-brand-gold/10 mt-8 sm:mt-10" />
        </motion.div>

        {/* Group banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.85, ease }}
          className="relative w-full overflow-hidden mb-10 sm:mb-14 h-56 sm:h-72 lg:h-96"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/team/team-group.jpeg" alt="The 1st Law team" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-brand-black/40" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark to-transparent" />
          <div className="absolute bottom-5 left-6 sm:bottom-8 sm:left-8">
            <p className="font-display text-xl sm:text-2xl font-light text-brand-white italic">One firm. One team. One goal.</p>
            <div className="w-12 h-px bg-brand-gold mt-2" />
          </div>
        </motion.div>

        {/* Attorney cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {attorneys.map((attorney, i) => (
            <motion.div
              key={attorney.name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="group bg-brand-charcoal hover:bg-brand-black transition-colors duration-300 p-5 sm:p-8 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-brand-black border-2 border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300 overflow-hidden mb-4 sm:mb-5">
                {attorney.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={attorney.photo} alt={attorney.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <span className="w-full h-full flex items-center justify-center font-display text-lg sm:text-2xl font-semibold text-brand-gold">
                    {attorney.initials}
                  </span>
                )}
              </div>
              <h3 className="font-display text-base sm:text-xl font-medium text-brand-white mb-1">{attorney.name}</h3>
              <p className="font-body text-brand-gold text-[10px] sm:text-xs tracking-wider uppercase mb-2 sm:mb-3">{attorney.title}</p>
              <p className="font-body text-brand-muted text-[10px] sm:text-xs leading-relaxed">{attorney.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
