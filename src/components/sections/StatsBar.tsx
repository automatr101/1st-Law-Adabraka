"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 85, suffix: "%", label: "Client Success Rate" },
  { value: 650, suffix: "K+", label: "Cases Handled" },
  { value: 978, suffix: "+", label: "Awards Won" },
  { value: 24, suffix: "h", label: "Response Time" },
];

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-brand-charcoal border-y border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-brand-gold/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center lg:px-10"
            >
              <span className="font-display text-5xl lg:text-6xl font-semibold text-brand-gold">
                <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
              </span>
              <span className="font-body text-sm text-brand-muted mt-2 tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
