"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "#home", label: "Home", section: "home" },
  { href: "#about", label: "About", section: "about" },
  { href: "#practice-areas", label: "Practice Areas", section: "practice-areas" },
  { href: "#team", label: "Our Team", section: "team" },
  { href: "#contact", label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "backdrop-blur-md bg-black/60 border-b border-brand-gold/10"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <Scale
              className="text-brand-gold group-hover:rotate-12 transition-transform duration-300"
              size={22}
              strokeWidth={1.5}
            />
            <span className="font-display text-2xl font-semibold text-brand-gold tracking-wide">
              1<sup className="text-sm">st</sup> Law
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              const isHovered = hoveredLink === link.section;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.section)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={clsx(
                      "relative flex flex-col items-center gap-1 font-body text-sm tracking-wide transition-colors duration-200",
                      isActive || isHovered
                        ? "text-brand-cream"
                        : "text-brand-muted"
                    )}
                  >
                    {link.label}

                    {/* Gold underline — active (always visible) */}
                    <AnimatePresence>
                      {isActive && !isHovered && (
                        <motion.span
                          key="active"
                          layoutId="nav-active"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute -bottom-1 left-0 right-0 h-px bg-brand-gold origin-left"
                        />
                      )}
                    </AnimatePresence>

                    {/* Gold underline — hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          key="hover"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute -bottom-1 left-0 right-0 h-px bg-brand-gold/60 origin-left"
                        />
                      )}
                    </AnimatePresence>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="font-body text-sm px-5 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 tracking-wider"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-cream p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 z-40 bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/10 md:hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.section;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "font-body text-base transition-colors flex items-center gap-2",
                        isActive ? "text-brand-gold" : "text-brand-cream hover:text-brand-gold"
                      )}
                    >
                      {isActive && (
                        <span className="w-4 h-px bg-brand-gold inline-block" />
                      )}
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block font-body text-sm px-5 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 tracking-wider mt-2"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
