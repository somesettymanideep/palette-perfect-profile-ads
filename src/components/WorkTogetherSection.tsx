import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const WorkTogetherSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      {/* Decorative arc lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.06]"
          viewBox="0 0 1000 1000"
          fill="none"
          style={{ rotate }}
        >
          <circle cx="500" cy="500" r="300" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="400" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="500" stroke="hsl(var(--off-white))" strokeWidth="0.3" />
          <ellipse cx="500" cy="500" rx="350" ry="250" stroke="hsl(var(--primary))" strokeWidth="0.5" transform="rotate(25 500 500)" />
          <ellipse cx="500" cy="500" rx="450" ry="300" stroke="hsl(var(--off-white))" strokeWidth="0.3" transform="rotate(-15 500 500)" />
        </motion.svg>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left: Big heading */}
          <div className="lg:col-span-7">
            <motion.h2
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-700 text-off-white leading-[0.95]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Let's
              <br />
              <span className="italic text-primary font-500">work </span>
              <span>Together</span>
            </motion.h2>
            <motion.div
              className="w-24 h-[2px] bg-primary mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Right: CTA button + email */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-8">
            <motion.a
              href="tel:+919550860545"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-700 text-sm md:text-base uppercase tracking-wider hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, scale: 0.7, rotate: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="text-center leading-tight">
                START <ArrowUpRight className="inline w-4 h-4 -mt-0.5" />
                <br />
                PROJECT
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-right"
            >
              <p className="font-body text-sm text-off-white/50 mb-1">Say hello!</p>
              <a
                href="mailto:info@ayrondigitalsolutions.com"
                className="font-heading text-xl md:text-2xl font-600 text-off-white hover:text-primary transition-colors"
              >
                info@ayrondigitalsolutions.com
              </a>
              <p className="font-body text-sm text-off-white/50 mt-3 mb-1">Or call us:</p>
              <a
                href="tel:+919550860545"
                className="font-heading text-xl md:text-2xl font-600 text-off-white hover:text-primary transition-colors"
              >
                +91 95508 60545
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogetherSection;
