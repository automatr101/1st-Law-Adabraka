"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const matters = [
  "Corporate & Commercial Law",
  "Civil Litigation",
  "Real Estate & Property",
  "Employment Law",
  "Family Law",
  "Criminal Defense",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-28 lg:py-36 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white">
            Book a Consultation
          </h2>
          <div className="w-full h-px bg-brand-gold/10 mt-10" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex gap-4">
              <MapPin className="text-brand-gold mt-0.5 shrink-0" size={18} strokeWidth={1.5} />
              <div>
                <p className="font-body text-brand-white text-sm font-medium mb-1">Address</p>
                <p className="font-body text-brand-muted text-sm leading-relaxed">
                  No. 28, Castle Road<br />
                  Adabraka, Accra, Ghana
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-brand-gold mt-0.5 shrink-0" size={18} strokeWidth={1.5} />
              <div>
                <p className="font-body text-brand-white text-sm font-medium mb-1">Phone</p>
                <a href="tel:+233302000000" className="font-body text-brand-muted text-sm hover:text-brand-gold transition-colors">
                  +233 30 200 0000
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="text-brand-gold mt-0.5 shrink-0" size={18} strokeWidth={1.5} />
              <div>
                <p className="font-body text-brand-white text-sm font-medium mb-1">Email</p>
                <a href="mailto:info@1stlaw.org" className="font-body text-brand-muted text-sm hover:text-brand-gold transition-colors">
                  info@1stlaw.org
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-brand-gold mt-0.5 shrink-0" size={18} strokeWidth={1.5} />
              <div>
                <p className="font-body text-brand-white text-sm font-medium mb-1">Office Hours</p>
                <p className="font-body text-brand-muted text-sm leading-relaxed">
                  Mon – Fri: 8:00 AM – 6:00 PM<br />
                  Saturday: 9:00 AM – 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-2 overflow-hidden h-52 bg-brand-charcoal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.987!2d-0.2045!3d5.5601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMzYuNCJOIDDCsDEyJzE2LjIiVw!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="1st Law Office Location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs text-brand-muted tracking-wide uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Mensah"
                    className="bg-brand-charcoal border border-brand-gold/10 focus:border-brand-gold/40 text-brand-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-brand-muted/40"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs text-brand-muted tracking-wide uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+233 00 000 0000"
                    className="bg-brand-charcoal border border-brand-gold/10 focus:border-brand-gold/40 text-brand-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-brand-muted/40"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs text-brand-muted tracking-wide uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-brand-charcoal border border-brand-gold/10 focus:border-brand-gold/40 text-brand-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-brand-muted/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs text-brand-muted tracking-wide uppercase">
                  Legal Matter
                </label>
                <select className="bg-brand-charcoal border border-brand-gold/10 focus:border-brand-gold/40 text-brand-white font-body text-sm px-4 py-3 outline-none transition-colors appearance-none">
                  <option value="" className="text-brand-muted">
                    Select area of law
                  </option>
                  {matters.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs text-brand-muted tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Briefly describe your legal matter..."
                  className="bg-brand-charcoal border border-brand-gold/10 focus:border-brand-gold/40 text-brand-white font-body text-sm px-4 py-3 outline-none transition-colors resize-none placeholder:text-brand-muted/40"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-brand-gold text-brand-black font-body font-medium text-sm px-8 py-4 hover:bg-brand-gold-light transition-colors duration-300 tracking-wide self-start"
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
