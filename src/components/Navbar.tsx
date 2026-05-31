"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#practice-areas", label: "Practice Areas" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-brand-muted hover:text-brand-cream transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-base text-brand-cream hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
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
