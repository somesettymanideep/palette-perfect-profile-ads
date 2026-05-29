import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Megaphone, Eye, Users, BarChart3, ArrowUpRight, Sparkles } from "lucide-react";

type Stat = {
  number: number;
  suffix: string;
  prefix?: string;
  label: string;
  caption: string;
  icon: typeof TrendingUp;
  delta: string;
  bars: number[];
  featured?: boolean;
};

const stats: Stat[] = [
  {
    number: 18,
    suffix: "M+",
    label: "Impressions Generated",
    caption: "Across paid & organic channels",
    icon: BarChart3,
    delta: "+312%",
    bars: [30, 45, 38, 55, 62, 78, 88, 95],
    featured: true,
  },
  { number: 1500, suffix: "+", label: "Avg. Leads / Month", caption: "Qualified pipeline", icon: TrendingUp, delta: "+184%", bars: [40, 55, 50, 68, 75, 82, 90] },
  { number: 500, suffix: "+", label: "Campaigns / Month", caption: "Always-on execution", icon: Megaphone, delta: "+96%", bars: [35, 42, 50, 48, 62, 70, 78] },
  { number: 6, suffix: "M+", label: "Total Reach", caption: "Global audience touched", icon: Eye, delta: "+220%", bars: [25, 35, 48, 55, 60, 72, 85] },
  { number: 100, suffix: "+", label: "Brands", caption: "Long-term collaborations", icon: Users, delta: "+40%", bars: [50, 55, 58, 62, 68, 72, 78] },
];

const Counter = ({ target, prefix, suffix }: { target: number; prefix?: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const featuredBars = [20, 35, 50, 65, 80, 100];

const GrowthSection = () => {
  const featured = stats[0];
  const rest = stats.slice(1);
  const FeaturedIcon = featured.icon;

  return (
    <section className="relative py-28 md:py-36 bg-foreground overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-wide relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3 h-3" />
            Our Impact
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-700 text-background uppercase tracking-tight mt-4">
            Growth In <span className="text-primary">Numbers</span>
          </h2>
          <p className="font-body text-sm text-background/50 mt-4 max-w-md mx-auto">
            Real results that speak louder than words — here's what we've achieved for our clients.
          </p>
        </motion.div>

        {/* Refined bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[200px] gap-4">
          {/* Featured */}
          <motion.div
            className="md:col-span-6 md:row-span-2 group relative overflow-hidden rounded-3xl border border-background/5 bg-background/[0.04] p-8 md:p-10 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at top left, hsl(var(--primary) / 0.18), transparent 60%)",
              }}
            />
            <div className="relative z-10 flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-background/5 border border-background/10 flex items-center justify-center">
                <FeaturedIcon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <span className="inline-flex items-center gap-1 font-body text-xs font-700 uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3" />
                {featured.delta}
              </span>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="font-heading font-600 leading-none text-7xl md:text-8xl lg:text-9xl text-background mb-3">
                <Counter target={featured.number} prefix={featured.prefix} suffix="" />
                <span className="text-primary">{featured.suffix}</span>
              </div>
              <p className="font-heading text-2xl md:text-3xl text-background/90 font-400">
                {featured.label}
              </p>
              <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] font-600 text-background/40 mt-2">
                {featured.caption}
              </p>
            </div>

            <div className="relative z-10 flex items-end gap-1.5 mt-8 h-12">
              {featuredBars.map((h, idx) => (
                <motion.div
                  key={idx}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + idx * 0.07, ease: "easeOut" }}
                  className="flex-1 rounded-t-sm"
                  style={{ background: `hsl(var(--primary) / ${0.2 + idx * 0.15})` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Secondary cards */}
          {rest.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-background/5 bg-background/[0.04] hover:border-primary/40 hover:bg-background/[0.06] transition-colors duration-500 p-6 flex flex-col justify-between"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-background/5 border border-background/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-primary text-[10px] font-700">{stat.delta}</span>
                </div>
                <div>
                  <h3 className="font-heading text-4xl text-background mb-1 font-600">
                    <Counter target={stat.number} prefix={stat.prefix} suffix="" />
                    <span className="text-primary">{stat.suffix}</span>
                  </h3>
                  <p className="font-body text-sm text-background/80">{stat.label}</p>
                  <p className="font-body text-[9px] text-background/30 uppercase tracking-widest mt-1">
                    {stat.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
