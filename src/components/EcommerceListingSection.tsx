import { motion } from "framer-motion";
import {
  CheckCircle2,
  Search,
  TrendingUp,
  ShoppingBag,
  Star,
  Package,
  Sparkles,
} from "lucide-react";

const bullets = [
  "SEO Product Titles",
  "A+ Content Creation",
  "Product Image Optimization",
  "Catalog Management",
];

const marketplaces = [
  { name: "Amazon", color: "#FF9900" },
  { name: "Flipkart", color: "#2874F0" },
  { name: "Myntra", color: "#FF3F6C" },
  { name: "D2C", color: "#F36E2B" },
];

const EcommerceListingSection = () => {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[24px] shadow-[0_20px_60px_-25px_rgba(15,15,15,0.18)] border border-black/5 p-8 md:p-14 lg:p-16"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center justify-center font-heading text-sm font-700 text-white rounded-full w-10 h-10"
                  style={{ backgroundColor: "#F36E2B" }}
                  aria-label="Service 05"
                >
                  05
                </span>
                <span
                  aria-hidden
                  className="h-px w-12"
                  style={{ backgroundColor: "#F36E2B" }}
                />
                <p className="font-body text-xs uppercase tracking-[0.25em] font-700" style={{ color: "#F36E2B" }}>
                  Marketplace Growth
                </p>
              </div>

              <h2 className="font-heading text-3xl md:text-5xl font-600 leading-[1.05] text-charcoal mb-4 uppercase tracking-tight">
                E-Commerce <span style={{ color: "#F36E2B" }}>Listing</span>
              </h2>
              <p className="font-body text-base md:text-lg text-charcoal/70 leading-relaxed mb-8 max-w-lg">
                Amazon, Flipkart, Myntra &amp; D2C Stores — high-converting
                listings, A+ content and catalog hygiene that compound into
                ranking, traffic and sales.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm font-500 text-charcoal/85"
                  >
                    <span
                      className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#F36E2B" }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                {marketplaces.map((m) => (
                  <span
                    key={m.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-600 bg-charcoal/5 border border-charcoal/10 text-charcoal"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: m.color }}
                    />
                    {m.name}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — 3D-ish product listing card */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto" style={{ maxWidth: "520px" }}>
                {/* soft orange glow */}
                <div
                  className="absolute -inset-10 rounded-[40px] blur-3xl pointer-events-none"
                  style={{ backgroundColor: "rgba(243,110,43,0.18)" }}
                />

                {/* tilted background card */}
                <div
                  className="absolute inset-0 rounded-[28px] rotate-3 translate-x-4 translate-y-4 shadow-xl"
                  style={{ backgroundColor: "#F36E2B" }}
                  aria-hidden
                />

                {/* main product listing card */}
                <motion.div
                  initial={{ opacity: 0, y: 24, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-white rounded-[28px] border border-black/5 shadow-2xl p-6"
                >
                  {/* fake search bar */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-charcoal/5 mb-5">
                    <Search className="w-4 h-4 text-charcoal/50" />
                    <span className="font-body text-xs text-charcoal/60 truncate">
                      organic cold-pressed almond oil
                    </span>
                    <span
                      className="ml-auto text-[10px] font-700 px-2 py-0.5 rounded text-white"
                      style={{ backgroundColor: "#F36E2B" }}
                    >
                      #1
                    </span>
                  </div>

                  {/* product row */}
                  <div className="flex gap-4">
                    <div
                      className="w-28 h-28 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                      style={{ backgroundColor: "#F36E2B" }}
                    >
                      <Package className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading text-sm font-700 text-charcoal leading-snug mb-1 line-clamp-2">
                        Premium Cold-Pressed Almond Oil 500ml — A+ Listing
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3"
                            style={{ color: "#F36E2B", fill: "#F36E2B" }}
                          />
                        ))}
                        <span className="text-[10px] text-charcoal/50 ml-1">4.8 (2,431)</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="font-heading text-lg font-700 text-charcoal">₹649</span>
                        <span className="text-xs text-charcoal/40 line-through">₹999</span>
                        <span className="text-[10px] font-700" style={{ color: "#F36E2B" }}>
                          −35%
                        </span>
                      </div>
                      <button
                        type="button"
                        className="w-full text-xs font-600 text-white py-2 rounded-lg"
                        style={{ backgroundColor: "#F36E2B" }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>

                  {/* mini growth chart */}
                  <div className="mt-5 pt-5 border-t border-charcoal/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-body text-[11px] uppercase tracking-wider text-charcoal/50 font-700">
                        Sales · Last 30 days
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-700" style={{ color: "#F36E2B" }}>
                        <TrendingUp className="w-3.5 h-3.5" />
                        +212%
                      </span>
                    </div>
                    <svg viewBox="0 0 200 50" className="w-full h-12" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="ecomChart" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#F36E2B" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#F36E2B" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 40 L20 36 L40 38 L60 30 L80 26 L100 28 L120 18 L140 14 L160 16 L180 8 L200 4 L200 50 L0 50 Z"
                        fill="url(#ecomChart)"
                      />
                      <path
                        d="M0 40 L20 36 L40 38 L60 30 L80 26 L100 28 L120 18 L140 14 L160 16 L180 8 L200 4"
                        fill="none"
                        stroke="#F36E2B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>

                {/* Floating marketplace icons */}
                {marketplaces.map((m, i) => {
                  const positions = [
                    "-top-4 -left-4",
                    "-top-6 right-6",
                    "bottom-10 -left-6",
                    "-bottom-4 right-4",
                  ];
                  return (
                    <motion.div
                      key={m.name}
                      initial={{ opacity: 0, scale: 0.5, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1, type: "spring" }}
                      className={`absolute ${positions[i]} bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 border border-black/5`}
                    >
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center font-heading text-xs font-700 text-white"
                        style={{ backgroundColor: m.color }}
                      >
                        {m.name[0]}
                      </span>
                      <span className="font-body text-[11px] font-700 text-charcoal">{m.name}</span>
                    </motion.div>
                  );
                })}

                {/* Floating SEO badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                  className="absolute top-1/2 -right-6 -translate-y-1/2 bg-charcoal text-off-white rounded-2xl px-3 py-2 shadow-2xl flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" style={{ color: "#F36E2B" }} />
                  <div>
                    <div className="font-heading text-sm font-700 leading-none">SEO Ranked</div>
                    <div className="font-body text-[9px] uppercase tracking-wider opacity-70">
                      Page 1 · #1
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceListingSection;
