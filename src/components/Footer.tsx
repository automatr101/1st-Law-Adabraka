import { Scale } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#practice-areas", label: "Practice Areas" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo + about */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-5">
              <Scale className="text-brand-gold" size={18} strokeWidth={1.5} />
              <span className="font-display text-xl font-semibold text-brand-gold">
                1<sup className="text-xs">st</sup> Law
              </span>
            </a>
            <p className="font-body text-brand-muted text-sm leading-relaxed max-w-xs">
              Legal Excellence, Every Step of the Way. A relationship-driven
              multi-practice firm serving Accra and beyond since 2005.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-body text-xs text-brand-muted tracking-[0.2em] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-brand-muted hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-body text-xs text-brand-muted tracking-[0.2em] uppercase mb-5">
              Contact
            </h4>
            <address className="not-italic flex flex-col gap-3">
              <p className="font-body text-sm text-brand-muted">
                No. 28, Castle Road
                <br />
                Adabraka, Accra, Ghana
              </p>
              <a
                href="tel:+233302000000"
                className="font-body text-sm text-brand-muted hover:text-brand-gold transition-colors"
              >
                +233 30 200 0000
              </a>
              <a
                href="mailto:info@1stlaw.org"
                className="font-body text-sm text-brand-muted hover:text-brand-gold transition-colors"
              >
                info@1stlaw.org
              </a>
            </address>

            {/* Social placeholders */}
            <div className="flex gap-4 mt-6">
              {["in", "𝕏", "f"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-brand-gold/20 flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-all text-xs font-body"
                  aria-label={["LinkedIn", "X", "Facebook"][i]}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gold separator */}
        <div className="w-full h-px bg-brand-gold/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-brand-muted">
            © 2025 1st Law. All rights reserved.
          </p>
          <p className="font-body text-xs text-brand-muted">
            www.1stlaw.org
          </p>
        </div>
      </div>
    </footer>
  );
}
