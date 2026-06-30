import { motion } from "framer-motion";
import {
  Search,
  Mic,
  Lock,
  Phone,
  Globe,
  Star,
  TrendingUp,
  MousePointerClick,
  Target,
  ArrowUpRight,
  Play,
  ShoppingBag,
  CheckCircle2,
  Eye,
  Bell,
  ShoppingCart,
  MapPin,
  Zap,
  BarChart3,

} from "lucide-react";
import rasrinShoppingAds from "@/assets/rasrin-shopping-ads.png";
import qcommerceRasrinAsset from "@/assets/qcommerce-rasrin.png.asset.json";

const qcommerceRasrin = qcommerceRasrinAsset.url;

const searchAds = [
  {
    url: "www.blossomscare.in",
    title: "Blossoms Hospital — 24×7 Multispeciality Care in Vijayawada",
    desc: "Top-rated doctors, advanced diagnostics & cashless insurance. Book an appointment in 2 minutes.",
    cta: "Book Appointment",
  },
  {
    url: "www.blossomscare.in",
    title: "Emergency & ICU — Call Now · No Waiting",
    desc: "24/7 emergency response, ambulance pickup and dedicated ICU specialists across all units.",
    cta: "Call Hospital",
  },
];

const shoppingAds = [
  { name: "Diamond Solitaire Ring", price: "₹84,500", rating: 4.9 },
  { name: "22K Gold Pendant Set", price: "₹62,300", rating: 4.8 },
  { name: "Bridal Necklace Set", price: "₹1,28,000", rating: 5.0 },
  { name: "Diamond Stud Earrings", price: "₹38,900", rating: 4.7 },
];

const GoogleAdsPortfolioSection = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span aria-hidden className="h-px w-10 bg-primary" />
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-700">
              Google Ads Portfolio
            </p>
          </motion.div>
          <motion.h2
            className="font-heading text-4xl md:text-6xl font-600 text-off-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Campaigns That <span className="text-primary">Convert</span>
          </motion.h2>
          <motion.p
            className="font-body text-base md:text-lg text-off-white/60 leading-relaxed mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From Search to Shopping to YouTube — we run paid campaigns engineered for ROAS,
            not just clicks.
          </motion.p>
        </div>

        <div className="space-y-28">
          {/* ============ ROW 1: SEARCH ADS ============ */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary/80 mb-4 font-700">
                Search Campaign · Blossoms Hospital
              </p>
              <h3 className="font-heading text-3xl md:text-4xl font-600 text-off-white leading-tight mb-6">
                Top of page for every <span className="text-primary">"near me"</span> search
              </h3>
              <p className="font-body text-base text-off-white/60 leading-relaxed mb-8 max-w-md">
                Hyper-targeted search ads with locked-in #1 ad position for the highest-intent
                healthcare keywords across Vijayawada.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 border-y border-off-white/10 py-5 max-w-md">
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    8.4×
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    ROAS
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    12.7%
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    CTR
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    −45%
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    CPC
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Keyword research & negative lists",
                  "Smart bidding & quality score tuning",
                  "A/B tested ad copy & extensions",
                  "Landing page conversion tracking",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-off-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />

              <div className="relative mx-auto" style={{ maxWidth: "560px" }}>
                {/* Browser */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-off-white/10">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                      <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 mx-3 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-gray-200">
                      <Lock className="w-3 h-3 text-gray-400" />
                      <span className="font-body text-[11px] text-gray-600 truncate">
                        google.com/search?q=multispeciality+hospital+near+me
                      </span>
                    </div>
                  </div>

                  <div className="p-5 bg-white">
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
                        <span className="text-[11px] text-gray-700 flex-1 truncate">
                          multispeciality hospital near me
                        </span>
                        <Mic className="w-3.5 h-3.5" style={{ color: "#4285F4" }} />
                        <Search className="w-3.5 h-3.5" style={{ color: "#4285F4" }} />
                      </div>
                    </div>

                    <div className="flex gap-5 py-2 text-[11px] text-gray-600 border-b border-gray-200">
                      <span className="pb-1 border-b-2" style={{ borderColor: "#4285F4", color: "#4285F4" }}>
                        All
                      </span>
                      <span>Maps</span>
                      <span>News</span>
                      <span>Images</span>
                      <span>Videos</span>
                    </div>

                    <div className="text-[10px] text-gray-500 py-2">
                      Sponsored results · 4 ads
                    </div>

                    {/* Ad results */}
                    <div className="space-y-4">
                      {searchAds.map((ad, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                          className={`relative rounded-md p-2 -mx-2 ${
                            i === 0 ? "bg-primary/5 ring-1 ring-primary/30" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-body text-[10px] font-700 text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">
                              Sponsored
                            </span>
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                              <Globe className="w-3 h-3 text-gray-500" />
                            </div>
                            <div className="text-[11px] text-gray-700 leading-tight">
                              <div className="font-semibold">Blossoms Hospital</div>
                              <div className="text-gray-500 text-[10px]">https://{ad.url}</div>
                            </div>
                            {i === 0 && (
                              <span className="ml-auto font-heading text-xs font-700 text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                                Ad #1
                              </span>
                            )}
                          </div>
                          <div
                            className="font-heading text-[15px] font-500 leading-tight mb-1"
                            style={{ color: "#1a0dab" }}
                          >
                            {ad.title}
                          </div>
                          <p className="text-[11px] text-gray-600 leading-snug line-clamp-2 mb-2">
                            {ad.desc}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 text-[10px] font-600 text-white bg-[#1a73e8] px-2 py-1 rounded">
                              <Phone className="w-2.5 h-2.5" />
                              {ad.cta}
                            </span>
                            <span className="text-[10px] text-gray-500">· 4.9 ★ (320 reviews)</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating ROAS badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                  className="absolute -top-5 -left-3 md:-left-6 bg-primary text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  <div>
                    <div className="font-heading text-lg font-700 leading-none">8.4× ROAS</div>
                    <div className="font-body text-[9px] uppercase tracking-wider">Search Campaign</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                  className="absolute -bottom-5 -right-3 md:-right-6 bg-off-white text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
                >
                  <MousePointerClick className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-heading text-lg font-700 leading-none">+3,284</div>
                    <div className="font-body text-[9px] uppercase tracking-wider">Conversions</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ============ ROW 2: SHOPPING ADS ============ */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative order-2 lg:order-1"
            >
              <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />

              <div className="relative mx-auto" style={{ maxWidth: "640px" }}>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-off-white/10">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                      <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 mx-3 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-gray-200">
                      <Lock className="w-3 h-3 text-gray-400" />
                      <span className="font-body text-[11px] text-gray-600 truncate">
                        google.com/search?q=rasrin+cleaning+products
                      </span>
                    </div>
                  </div>

                  <img
                    src={rasrinShoppingAds}
                    alt="Rasrin product feed shopping ads"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                  className="absolute -top-5 -right-3 md:-right-6 bg-primary text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <div>
                    <div className="font-heading text-lg font-700 leading-none">₹48 Lakhs</div>
                    <div className="font-body text-[9px] uppercase tracking-wider">Ad-driven Sales</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary/80 mb-4 font-700">
                Shopping Campaign · Rasrin
              </p>
              <h3 className="font-heading text-3xl md:text-4xl font-600 text-off-white leading-tight mb-6">
                Cleaning products that <span className="text-primary">dominate</span> search shelves
              </h3>
              <p className="font-body text-base text-off-white/60 leading-relaxed mb-8 max-w-md">
                We built a high-converting Google Shopping feed for Rasrin's household cleaning range and ran Performance Max campaigns that scaled revenue to ₹48 Lakhs in ad-driven sales.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 border-y border-off-white/10 py-5 max-w-md">
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    ₹48L
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    Ad Sales
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    6.8×
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    ROAS
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    320+
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    SKUs Live
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Merchant Center feed optimisation",
                  "Performance Max + Shopping campaigns",
                  "Audience signals & remarketing lists",
                  "Category-level bid strategies",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-off-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ============ ROW 3: YOUTUBE / VIDEO ADS ============ */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary/80 mb-4 font-700">
                YouTube Campaign · Rasrin
              </p>
              <h3 className="font-heading text-3xl md:text-4xl font-600 text-off-white leading-tight mb-6">
                Product-demo video ads that <span className="text-primary">sell while they educate</span>
              </h3>
              <p className="font-body text-base text-off-white/60 leading-relaxed mb-8 max-w-md">
                A 47-second demo of Rasrin D-Scaler — the washing machine drum cleaner — served as
                skippable in-stream and bumper ads to households actively searching for laundry
                and cleaning solutions.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 border-y border-off-white/10 py-5 max-w-md">
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    3.1M
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    Impressions
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    91%
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    View Rate
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    ₹0.32
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    Avg. CPV
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Problem-solution demo storyboard",
                  "In-market: laundry & home cleaning audiences",
                  "Skippable in-stream + 6s bumper cuts",
                  "Remarketing to drum-cleaner search intent",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-off-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />

              <div className="relative mx-auto" style={{ maxWidth: "560px" }}>
                <div className="relative bg-[#0f0f0f] rounded-2xl shadow-2xl overflow-hidden border border-off-white/10">
                  {/* YouTube top bar */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-[#FF0000]">
                        <Play className="w-3 h-3 text-white" fill="white" />
                      </span>
                      <span className="font-heading text-sm font-700 text-white">YouTube</span>
                    </div>
                    <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-white/10">
                      <Search className="w-3 h-3 text-white/50" />
                      <span className="font-body text-[11px] text-white/60">washing machine drum cleaner</span>
                    </div>
                  </div>

                  {/* Video player */}
                  <div className="relative aspect-video bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/gE4N2DFAX7s?rel=0&modestbranding=1"
                      title="Rasrin D-Scaler — Washing Machine Drum Cleaner"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Ad CTA strip */}
                  <div className="flex items-center gap-3 p-3 bg-[#1a1a1a] border-t border-white/5">
                    <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4 text-charcoal" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading text-[12px] font-600 text-white truncate">
                        Rasrin D-Scaler · Removes Drum Scale Instantly
                      </div>
                      <div className="font-body text-[10px] text-white/50 truncate">
                        rasrin.com · Shop now
                      </div>
                    </div>
                    <span className="font-body text-[10px] font-700 text-white bg-[#3ea6ff]/90 px-3 py-1.5 rounded">
                      Shop Now
                    </span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                  className="absolute -bottom-5 -left-3 md:-left-6 bg-off-white text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
                >
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-heading text-lg font-700 leading-none">+220%</div>
                    <div className="font-body text-[9px] uppercase tracking-wider">Product Orders</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ============ ROW 4: Q-COMMERCE (animated scene) ============ */}
          <QCommerceScene />

        </div>




        {/* Bottom stats strip */}
        <motion.div
          className="mt-28 pt-12 border-t border-off-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { value: "₹2.4Cr+", label: "Ad Spend Managed" },
            { value: "60+", label: "Campaigns Live" },
            { value: "8.4×", label: "Avg. ROAS" },
            { value: "−45%", label: "Avg. CPC Cut" },
          ].map((m) => (
            <div key={m.label}>
              <div className="font-heading text-3xl md:text-4xl font-600 text-primary leading-none">
                {m.value}
              </div>
              <div className="font-body text-[11px] md:text-xs uppercase tracking-[0.2em] text-off-white/50 mt-3">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================================
   Q-COMMERCE animated scene
   6-second looping animations — pure framer-motion, no video
============================================================ */
const platforms = [
  { name: "blinkit", tagline: "India's Last Minute App", filled: true },
  { name: "zepto", tagline: "10 Minute Grocery Delivery", filled: false },
  { name: "instamart", tagline: "Groceries in Minutes", filled: true },
  { name: "swiggy", tagline: "Food you ♥ on time.", filled: false },
];

const services = [
  { icon: ShoppingCart, title: "LISTINGS", desc: "Optimize product listings for higher discoverability" },
  { icon: Eye, title: "VISIBILITY ADS", desc: "Boost product visibility with smart ad campaigns" },
  { icon: Target, title: "RAPID-DELIVERY SKU STRATEGY", desc: "Focus on high-demand SKUs for fast delivery & repeat orders" },
  { icon: BarChart3, title: "GROWTH", desc: "Data-driven strategies for scalable & sustainable growth" },
];

const bestSellers = [
  { name: "Milk", price: "₹56", emoji: "🥛" },
  { name: "Banana", price: "₹28", emoji: "🍌" },
  { name: "Eggs (6)", price: "₹42", emoji: "🥚" },
  { name: "Maggi", price: "₹14", emoji: "🍜" },
];

const categories = ["🍎", "🥛", "🍪", "🥤", "🧴", "🧺"];

const QCommerceScene = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#fff7f1] to-[#ffe8d8] rounded-3xl p-6 md:p-12 overflow-hidden border border-primary/20 shadow-2xl">
      {/* soft city silhouette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating 3D-style title */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative text-center mb-8"
      >
        <h3
          className="font-heading font-700 tracking-tight inline-block leading-none"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            color: "#F36E2B",
            textShadow:
              "0 1px 0 #fff, 0 2px 0 #fff, 0 4px 0 #d85812, 0 6px 0 #b54810, 0 14px 30px rgba(243,110,43,0.45)",
            WebkitTextStroke: "1px #fff",
          }}
        >
          Q-COMMERCE
        </h3>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
        {/* ===== LEFT — platform cards ===== */}
        <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6, scale: 1.03 }}
              className={`rounded-2xl px-4 py-3 shadow-lg border ${
                p.filled
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-charcoal border-black/5"
              }`}
            >
              <div className="font-heading text-lg font-700 lowercase leading-none">
                {p.name}
              </div>
              <div className={`text-[10px] mt-1 font-500 ${p.filled ? "text-white/85" : "text-charcoal/60"}`}>
                {p.tagline}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== CENTER — phone mockup + scooter ===== */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative flex justify-center">
          {/* location pin floating */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 left-4 md:left-12"
          >
            <div className="bg-primary text-white p-2 rounded-full shadow-xl">
              <MapPin className="w-5 h-5" fill="white" />
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
            className="relative w-[260px] md:w-[300px] aspect-[9/19] bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-[0_30px_60px_-15px_rgba(243,110,43,0.5)] z-10"
          >
            {/* notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20" />

            <div className="relative w-full h-full bg-white rounded-[2.1rem] overflow-hidden flex flex-col">
              {/* status row */}
              <div className="flex items-center justify-between px-4 pt-5 pb-2">
                <div>
                  <div className="text-[8px] text-charcoal/50 leading-none">Delivering to</div>
                  <div className="text-[11px] font-700 text-charcoal flex items-center gap-1">
                    Home <span className="text-[8px]">▾</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="w-3.5 h-3.5 text-charcoal/70" />
                  <div className="relative">
                    <ShoppingCart className="w-3.5 h-3.5 text-charcoal/70" />
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[7px] rounded-full w-3 h-3 flex items-center justify-center font-700">
                      2
                    </span>
                  </div>
                </div>
              </div>

              {/* search */}
              <div className="mx-3 mb-2 bg-charcoal/5 rounded-lg flex items-center gap-2 px-2 py-1.5">
                <Search className="w-3 h-3 text-charcoal/50" />
                <span className="text-[9px] text-charcoal/50">Search for 'milk'</span>
              </div>

              {/* Hero banner — animated scooter */}
              <div className="mx-3 rounded-xl bg-gradient-to-r from-primary to-[#ff8a4c] p-3 relative overflow-hidden h-20">
                <div className="text-white font-heading font-700 text-[11px] leading-tight max-w-[55%]">
                  DELIVERING IN
                  <br />
                  10-20 MINUTES
                </div>
                <motion.div
                  animate={{ x: [-30, 80, -30] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-1 bottom-1 text-2xl"
                  aria-hidden
                >
                  🛵
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.2, 0.7, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="absolute right-12 bottom-3 text-yellow-200 text-xs"
                >
                  ⚡
                </motion.div>
              </div>

              {/* category row */}
              <div className="px-3 mt-3 grid grid-cols-6 gap-1">
                {categories.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
                    className="aspect-square bg-charcoal/5 rounded-lg flex items-center justify-center text-base"
                  >
                    {c}
                  </motion.div>
                ))}
              </div>

              {/* best sellers */}
              <div className="px-3 mt-3">
                <div className="text-[9px] font-700 text-charcoal mb-1">Best Sellers</div>
                <div className="grid grid-cols-4 gap-1.5">
                  {bestSellers.map((b, i) => (
                    <motion.div
                      key={b.name}
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1 + i * 0.1, type: "spring" }}
                      className="bg-charcoal/5 rounded-lg p-1.5 text-center"
                    >
                      <div className="text-lg leading-none">{b.emoji}</div>
                      <div className="text-[7px] text-charcoal/70 mt-0.5">{b.name}</div>
                      <div className="text-[8px] font-700 text-charcoal">{b.price}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mx-3 mt-auto mb-4 bg-primary text-white text-[10px] font-700 rounded-full py-2 text-center"
              >
                ▸ View All
              </motion.div>
            </div>
          </motion.div>

          {/* Floating delivery boy emoji */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
            className="hidden md:block absolute bottom-0 left-2 text-6xl"
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="inline-block"
            >
              🛵
            </motion.span>
          </motion.div>

          {/* Floating shopping basket */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
            className="hidden md:block absolute bottom-0 right-2 text-6xl"
          >
            <motion.span
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              🧺
            </motion.span>
          </motion.div>
        </div>

        {/* ===== RIGHT — service cards ===== */}
        <div className="lg:col-span-3 space-y-3 order-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: -6, scale: 1.03 }}
                className="bg-white rounded-2xl p-3 shadow-lg border border-black/5 flex items-start gap-3"
              >
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                  className="shrink-0 w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md"
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={2.4} />
                </motion.div>
                <div>
                  <div className="font-heading text-[11px] font-700 text-charcoal uppercase leading-tight">
                    {s.title}
                  </div>
                  <div className="text-[10px] text-charcoal/65 mt-0.5 leading-snug">{s.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom tagline plate */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 mt-8 mx-auto w-fit bg-primary text-white rounded-xl px-6 py-3 shadow-xl flex items-center gap-4 font-heading font-700 tracking-wide"
      >
        <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> FAST.</span>
        <span className="opacity-50">·</span>
        <span>CONVENIENCE.</span>
        <span className="opacity-50">·</span>
        <span>GROWTH.</span>
      </motion.div>
    </div>
  );
};

export default GoogleAdsPortfolioSection;
