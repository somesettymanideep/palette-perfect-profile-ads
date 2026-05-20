import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.png";

const stats = [
  { value: "200+", label: "Brands Served" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client-First" },
];

const FounderSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-32 bg-foreground overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div className="relative" style={{ y: imageY }}>
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl -rotate-3" />
              <img
                src={founderImg}
                alt="Aziz Rehman - Founder & CEO"
                className="relative w-full max-w-sm rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Bio Side */}
          <motion.div style={{ y: textY }}>
            <motion.p
              className="font-body text-xs font-500 tracking-[0.3em] uppercase text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Meet The Founder
            </motion.p>
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-700 text-background leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Aziz Rehman
            </motion.h2>
            <motion.p
              className="font-body text-sm font-500 tracking-wider uppercase text-primary mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Founder & CEO — Ayron Digital Solutions
            </motion.p>

            <motion.blockquote
              className="relative mb-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="absolute -top-6 -left-2 font-heading text-7xl text-primary/20 leading-none select-none">
                "
              </span>
              <p className="font-heading text-xl md:text-2xl font-400 text-background/80 leading-relaxed italic pl-6">
                Great marketing should be accessible to every brand, not just the ones with massive budgets.
              </p>
            </motion.blockquote>

            <div className="space-y-4 mb-10">
              <motion.p
                className="font-body text-base font-300 text-background/60 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                Over the years, we've grown from a small team into a full-service agency
                serving 200+ brands. But what hasn't changed is our commitment to
                transparency, creativity, and real results.
              </motion.p>
              <motion.p
                className="font-body text-base font-300 text-background/60 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                Every campaign we run, every design we create, and every strategy we build is
                rooted in data and driven by the desire to see our clients succeed.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 pt-8 border-t border-background/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <p className="font-heading text-3xl font-700 text-primary">{stat.value}</p>
                  <p className="font-body text-xs font-400 text-background/50 tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
