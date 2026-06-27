import { motion } from "framer-motion";
import { MapPin, Star, Search, TrendingUp, CheckCircle2, Globe, ArrowUpRight, Phone, Navigation as NavIcon, Mic, Lock, BarChart3 } from "lucide-react";
import gmbPediatricImg from "@/assets/gmb-pediatric-vijayawada.webp.asset.json";

const gmbResults = [
  { name: "Anjana Hospital", category: "Multispeciality Hospital · Nandigama", rating: "4.9", reviews: "412", years: "18+ years in business", status: "Open 24 hours" },
  { name: "Nandigama Care Hospital", category: "General Hospital", rating: "4.6", reviews: "186", years: "10+ years in business", status: "Open · Closes 10 pm" },
  { name: "Sri Sai Multispeciality", category: "Multispeciality Hospital", rating: "4.5", reviews: "142", years: "8+ years in business", status: "Open · Closes 9 pm" },
];

const serpResults = [
  { url: "nestsyncinteriors.com", title: "NestSync Interiors — Modular Designers in Bengaluru", desc: "Premium modular kitchens, wardrobes & turnkey home interiors with 8+ years…", position: 1 },
  { url: "jvengineers.in", title: "JV Engineers — Civil Contractors & Builders", desc: "Trusted civil construction company delivering residential and commercial projects…", position: 1 },
  { url: "luxeauto.in", title: "Luxe Auto Accessories — Premium Car Care Products", desc: "Shop premium car interiors, detailing kits and accessories online with fast…", position: 2 },
];

const SeoPortfolioSection = () => {
  return (
    <section className="py-24 md:py-32 !bg-[#141414] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 space-y-24">
        {/* ============ ROW 1: GMB ============ */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-off-white/40 mb-4">
              SEO Portfolio · GMB
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-600 text-off-white leading-tight mb-6">
              GMB optimised to rank on the <span className="text-primary">local 3-pack</span>
            </h2>
            <p className="font-body text-base text-off-white/60 leading-relaxed mb-8 max-w-md">
              We optimise Google My Business profiles so our clients dominate "near me" searches
              and show up in the top 3 map listings.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 border-y border-off-white/10 py-5 max-w-md">
              <div>
                <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">#1</div>
                <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">Local Rank</div>
              </div>
              <div>
                <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">3×</div>
                <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">Calls / Direction</div>
              </div>
              <div>
                <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">4.9★</div>
                <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">Avg. Rating</div>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "GMB profile setup & verification",
                "Local keywords & service tagging",
                "Review generation & response strategy",
                "Geo-targeted posts & photos",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-off-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative mx-auto" style={{ maxWidth: "440px" }}>
              <div
                className="absolute inset-0 rounded-3xl opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--off-white)/0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--off-white)/0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <MapPin className="absolute -left-2 top-1/2 w-8 h-8 text-primary drop-shadow-lg hidden md:block" fill="currentColor" />
              <MapPin className="absolute -right-2 bottom-12 w-7 h-7 text-primary/80 drop-shadow-lg hidden md:block" fill="currentColor" />

              {/* Phone */}
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto"
                style={{ maxWidth: "340px" }}
              >
                <img
                  src={gmbPediatricImg.url}
                  alt="Google Search GMB result for best pediatric hospital in Vijayawada — Blossoms Mother & Child Hospital ranking #1"
                  className="w-full h-auto drop-shadow-2xl"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                className="absolute -top-4 -right-2 md:-right-6 bg-primary text-charcoal rounded-2xl px-4 py-3 shadow-2xl"
              >
                <div className="font-heading text-2xl font-700 leading-none">#1</div>
                <div className="font-body text-[9px] uppercase tracking-wider mt-1">Local Pack</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ============ ROW 2: Website Rankings ============ */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative order-2 lg:order-1"
          >
            <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative mx-auto" style={{ maxWidth: "560px" }}>
              {/* Browser frame */}
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-off-white/10"
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 mx-3 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-gray-200">
                    <Lock className="w-3 h-3 text-gray-400" />
                    <span className="font-body text-[11px] text-gray-600 truncate">
                      google.com/search?q=modular+interior+designers+bangalore
                    </span>
                  </div>
                </div>

                {/* Google SERP page */}
                <div className="p-5 bg-white">
                  {/* Google logo + search bar */}
                  <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                    <span className="font-heading text-xl font-700 tracking-tight">
                      <span style={{ color: "#4285F4" }}>G</span>
                      <span style={{ color: "#EA4335" }}>o</span>
                      <span style={{ color: "#FBBC05" }}>o</span>
                      <span style={{ color: "#4285F4" }}>g</span>
                      <span style={{ color: "#34A853" }}>l</span>
                      <span style={{ color: "#EA4335" }}>e</span>
                    </span>
                    <div className="flex-1 flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                      <span className="text-[11px] text-gray-700 flex-1 truncate">modular interior designers</span>
                      <Search className="w-3.5 h-3.5" style={{ color: "#4285F4" }} />
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-5 py-2 text-[11px] text-gray-600 border-b border-gray-200">
                    <span className="pb-1 border-b-2" style={{ borderColor: "#4285F4", color: "#4285F4" }}>All</span>
                    <span>Maps</span>
                    <span>Images</span>
                    <span>News</span>
                    <span>Videos</span>
                  </div>

                  <div className="text-[10px] text-gray-500 py-2">About 24,80,000 results (0.42 seconds)</div>

                  {/* Results */}
                  <div className="space-y-4">
                    {serpResults.map((r, i) => (
                      <motion.div
                        key={r.url}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                        className={`relative rounded-md p-2 -mx-2 ${
                          i === 0 ? "bg-primary/5 ring-1 ring-primary/30" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                            <Globe className="w-3 h-3 text-gray-500" />
                          </div>
                          <div className="text-[11px] text-gray-700 leading-tight">
                            <div className="font-semibold">{r.url.split(".")[0]}</div>
                            <div className="text-gray-500 text-[10px]">https://{r.url}</div>
                          </div>
                          <span className="ml-auto font-heading text-xs font-700 text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            #{r.position}
                          </span>
                        </div>
                        <div className="font-heading text-[15px] font-500 leading-tight mb-1" style={{ color: "#1a0dab" }}>
                          {r.title}
                        </div>
                        <p className="text-[11px] text-gray-600 leading-snug line-clamp-2">{r.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating traffic badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                className="absolute -bottom-5 -right-3 md:-right-6 bg-primary text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                <div>
                  <div className="font-heading text-lg font-700 leading-none">+420%</div>
                  <div className="font-body text-[9px] uppercase tracking-wider">Organic Traffic</div>
                </div>
              </motion.div>

              {/* Floating rank badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                className="absolute -top-5 -left-3 md:-left-6 bg-off-white text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
              >
                <BarChart3 className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-heading text-lg font-700 leading-none">Page 1</div>
                  <div className="font-body text-[9px] uppercase tracking-wider">Google Rank</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-off-white/40 mb-4">
              SEO Portfolio · Websites
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-600 text-off-white leading-tight mb-6">
              Client websites on <span className="text-primary">Google page 1</span>
            </h2>
            <p className="font-body text-base text-off-white/60 leading-relaxed mb-8 max-w-md">
              Organic, white-hat SEO that pushes our client websites to the top of Google for
              the keywords that drive real business.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 border-y border-off-white/10 py-5 max-w-md">
              <div>
                <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">50+</div>
                <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">Page 1 Keywords</div>
              </div>
              <div>
                <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">420%</div>
                <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">Avg. Traffic Lift</div>
              </div>
              <div>
                <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">100%</div>
                <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">White-hat SEO</div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "On-page SEO, schema & technical fixes",
                "High-authority backlink building",
                "Content & keyword strategy",
                "Monthly rank tracking & reports",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-off-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-widest">
              <ArrowUpRight className="w-4 h-4" />
              Proven on real client data
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeoPortfolioSection;
