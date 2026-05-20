import { motion } from "framer-motion";
import { TrendingUp, MousePointerClick, DollarSign, Target, ArrowUpRight } from "lucide-react";
import googleAdsIcon from "@/assets/service-google-ads.png";

const metrics = [
  { icon: TrendingUp, label: "ROAS", value: "8.4×", delta: "+62%", positive: true },
  { icon: MousePointerClick, label: "CTR", value: "12.7%", delta: "+38%", positive: true },
  { icon: DollarSign, label: "CPC", value: "₹14.20", delta: "-45%", positive: true },
  { icon: Target, label: "Conversions", value: "3,284", delta: "+210%", positive: true },
];

const adTypes = [
  { label: "Search Ads", align: "left" },
  { label: "Display Ads", align: "right" },
  { label: "Shopping Ads", align: "left" },
  { label: "Video Ads", align: "right" },
  { label: "App Promotion Ads", align: "left" },
  { label: "Discover Ads", align: "right" },
];

const GoogleAdsSection = () => {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Title with Icon */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <img
            src={googleAdsIcon}
            alt="Google Ads"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
            Google Ads
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-widest text-primary-foreground/70 max-w-3xl leading-relaxed mb-14"
        >
          Google Ads has more potential customers. With our customized audience
          option suitable for the product, targets are chosen to hit the right
          spot of the audience.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Ad types ladder */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-display text-lg md:text-xl font-bold text-primary uppercase tracking-wide mb-10"
            >
              Different Types of Ads on Google &amp; YouTube
            </motion.h3>

            {/* Ladder visual */}
            <div className="relative pl-4">
              {/* Vertical line */}
              <motion.div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary-foreground/30"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ transformOrigin: "top" }}
              />

              <div className="space-y-6">
                {adTypes.map((ad, index) => (
                  <motion.div
                    key={ad.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.12 }}
                    className={`relative flex items-center pl-8 md:pl-0 ${
                      ad.align === "left" ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Dot on mobile */}
                    <span className="absolute left-4 md:hidden w-2 h-2 rounded-full bg-primary" />
                    {/* Horizontal tick on desktop */}
                    <div
                      className="absolute left-1/2 w-8 h-px bg-primary-foreground/40 hidden md:block"
                      style={{
                        transform:
                          ad.align === "left"
                            ? "translateX(-100%)"
                            : "translateX(0)",
                      }}
                    />
                    <span
                      className={`text-sm md:text-base uppercase tracking-wider font-semibold text-primary ${
                        ad.align === "left"
                          ? "md:mr-auto md:pr-[55%]"
                          : "md:ml-auto md:pl-[55%]"
                      }`}
                    >
                      {ad.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Campaign performance dashboard */}
          <motion.div
            className="relative w-full max-w-md md:max-w-lg justify-self-center md:justify-self-end"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Glow accents */}
            <div aria-hidden className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

            <div className="relative bg-background/95 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-border">
                <div>
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Campaign Performance
                  </p>
                  <p className="font-heading text-lg font-600 text-foreground">Search · Last 30 days</p>
                </div>
                <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Live
                </span>
              </div>

              {/* Metric grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                {metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.4 + i * 0.08 }}
                    className="group relative bg-muted/50 border border-border rounded-xl p-4 hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <m.icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-700 text-primary">
                        <ArrowUpRight className="h-3 w-3" />
                        {m.delta}
                      </span>
                    </div>
                    <p className="font-heading text-2xl md:text-3xl font-700 text-foreground leading-none mb-1">
                      {m.value}
                    </p>
                    <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground">
                      {m.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Weekly Conversions
                  </p>
                  <p className="font-body text-[10px] font-700 text-primary">+210%</p>
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[
                    { h: 35, v: 142, day: "Mon" },
                    { h: 48, v: 196, day: "Tue" },
                    { h: 42, v: 171, day: "Wed" },
                    { h: 60, v: 244, day: "Thu" },
                    { h: 55, v: 224, day: "Fri" },
                    { h: 78, v: 318, day: "Sat" },
                    { h: 92, v: 374, day: "Sun" },
                  ].map((b, i) => (
                    <div key={i} className="group relative flex-1 h-full flex items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${b.h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 + i * 0.05, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-primary/60 to-primary rounded-sm cursor-pointer group-hover:from-primary group-hover:to-primary group-hover:brightness-110 transition-all"
                      />
                      {/* Tooltip */}
                      <div
                        role="tooltip"
                        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-20"
                      >
                        <div className="bg-foreground text-background text-[10px] font-600 px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
                          <span className="text-primary mr-1">{b.day}</span>
                          {b.v} conv.
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsSection;
