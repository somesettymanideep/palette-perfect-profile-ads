import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroChess from "@/assets/hero-chess-social.png";


const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-foreground pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <motion.div className="absolute inset-0" style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}>
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-primary/5 to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-primary/3 blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>
      <motion.div className="container-wide relative z-10" style={{ y, opacity, scale }}>
        <div className="max-w-3xl">
          <motion.p
            className="font-body text-sm uppercase tracking-[0.2em] text-off-white/60 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Digital Marketing Agency — Vijayawada, India
          </motion.p>

          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-600 text-off-white leading-[0.95] mb-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            We are{" "}
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Creators
            </motion.span>
            ,{" "}
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              Strategists
            </motion.span>{" "}
            &{" "}
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              Goal Oriented
            </motion.span>
          </motion.h1>

          <motion.div
            className="section-rule max-w-xs mb-8"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          />

          <motion.p
            className="font-body text-lg md:text-xl font-300 text-off-white/70 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            We focus on satisfying clients with prolific results. We know what future technology holds for any business, and we utilize resources to increase efficacy in every step.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-off-white/30">Scroll</span>
            <motion.div
              className="w-[1px] h-8 bg-primary/50"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
        </div>

      </motion.div>

      {/* Right-side floating chess image */}
      <motion.div
        className="hidden lg:flex absolute right-4 xl:right-16 top-0 bottom-0 w-[38%] max-w-[520px] items-center justify-center pointer-events-none z-20"
        initial={{ opacity: 0, x: 80, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-full">
          <motion.img
            src={heroChess}
            alt="Social media king — ADS dominates digital marketing"
            className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative z-10"
            animate={{ y: [0, -18, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>

  );
};

export default HeroSection;
