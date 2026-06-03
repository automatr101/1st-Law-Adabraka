"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const matters = ["Corporate & Commercial Law", "Civil Litigation", "Real Estate & Property", "Employment Law", "Family Law", "Criminal Defense", "Other"];

// Web3Forms access key is public & safe for client-side use (per their docs).
// Client-side call avoids Cloudflare's server-side bot challenge.
const WEB3FORMS_KEY = "9fad7e64-3a8c-4dd4-b2d6-6463e750d283";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", matter: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      // 1. Email via Web3Forms (client-side — sails past Cloudflare)
      const emailRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Consultation Request — ${form.name}`,
          from_name: "1st Law Website",
          Name: form.name,
          Phone: form.phone || "Not provided",
          Email: form.email || "Not provided",
          "Legal Matter": form.matter || "Not specified",
          Message: form.message,
        }),
      });
      const emailData = await emailRes.json();

      // 2. WhatsApp ping (server-side, best-effort — don't block on it)
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => {});

      if (emailData.success) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", matter: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please call 0244 124 472 or email firstlawgh@yahoo.com.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please call 0244 124 472 or email firstlawgh@yahoo.com.");
    }
  };

  const inputCls =
    "bg-brand-charcoal border border-brand-gold/10 focus:border-brand-gold/40 text-brand-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-brand-muted/40";

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-36 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-16"
        >
          <p className="font-body text-brand-gold text-xs tracking-[0.25em] uppercase mb-3 sm:mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-white">Book a Consultation</h2>
          <div className="w-full h-px bg-brand-gold/10 mt-8 sm:mt-10" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col gap-7 sm:gap-8"
          >
            {[
              { icon: MapPin, label: "Address", content: <p className="font-body text-brand-muted text-sm leading-relaxed">No. 28, Castle Road<br />Adabraka, Accra, Ghana</p> },
              { icon: Phone, label: "Phone", content: <a href="tel:+233244124472" className="font-body text-brand-muted text-sm hover:text-brand-gold transition-colors">0244 124 472</a> },
              { icon: Mail, label: "Email", content: <a href="mailto:firstlawgh@yahoo.com" className="font-body text-brand-muted text-sm hover:text-brand-gold transition-colors">firstlawgh@yahoo.com</a> },
              { icon: Clock, label: "Office Hours", content: <p className="font-body text-brand-muted text-sm leading-relaxed">Mon – Fri: 8:00 AM – 6:00 PM<br />Saturday: 9:00 AM – 1:00 PM<br />Sunday: Closed</p> },
            ].map(({ icon: Icon, label, content }) => (
              <div key={label} className="flex gap-4">
                <Icon className="text-brand-gold mt-0.5 shrink-0" size={18} strokeWidth={1.5} />
                <div>
                  <p className="font-body text-brand-white text-sm font-medium mb-1">{label}</p>
                  {content}
                </div>
              </div>
            ))}

            <div className="overflow-hidden h-48 sm:h-52 bg-brand-charcoal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.987!2d-0.2045!3d5.5601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMzYuNCJOIDDCsDEyJzE2LjIiVw!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                width="100%" height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="1st Law Office Location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] bg-brand-charcoal/50 px-6 py-12">
                <CheckCircle2 className="text-brand-gold mb-5" size={48} strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-light text-brand-white mb-3">Message received</h3>
                <p className="font-body text-brand-muted text-sm leading-relaxed max-w-sm mb-6">
                  Thank you for reaching out to 1st Law. Our team will respond within 24 hours. For urgent matters, call <a href="tel:+233244124472" className="text-brand-gold">0244 124 472</a>.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-body text-sm text-brand-gold border border-brand-gold/40 px-6 py-2.5 hover:bg-brand-gold hover:text-brand-black transition-all tracking-wide"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs text-brand-muted tracking-wide uppercase">Full Name *</label>
                    <input required value={form.name} onChange={update("name")} type="text" placeholder="John Mensah" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs text-brand-muted tracking-wide uppercase">Phone</label>
                    <input value={form.phone} onChange={update("phone")} type="tel" placeholder="+233 00 000 0000" className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs text-brand-muted tracking-wide uppercase">Email Address</label>
                  <input value={form.email} onChange={update("email")} type="email" placeholder="you@example.com" className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs text-brand-muted tracking-wide uppercase">Legal Matter</label>
                  <select value={form.matter} onChange={update("matter")} className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="">Select area of law</option>
                    {matters.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs text-brand-muted tracking-wide uppercase">Message *</label>
                  <textarea required value={form.message} onChange={update("message")} rows={5} placeholder="Briefly describe your legal matter..." className={`${inputCls} resize-none`} />
                </div>

                {status === "error" && (
                  <p className="font-body text-sm text-red-400/90 bg-red-950/30 px-4 py-3">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-black font-body font-medium text-sm px-8 py-4 hover:bg-brand-gold-light transition-colors duration-300 tracking-wide w-full sm:w-auto sm:self-start disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
