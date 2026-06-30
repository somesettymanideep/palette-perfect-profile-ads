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
  Bike,
  Package,
  MapPin,
  Smartphone,
  Zap,
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

          {/* ============ ROW 4: Q-COMMERCE ============ */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative order-2 lg:order-1"
            >
              <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
              <div className="relative mx-auto" style={{ maxWidth: "560px" }}>
                <div className="relative bg-[#0f0f0f] rounded-2xl shadow-2xl overflow-hidden border border-off-white/10 p-4 md:p-6">
                  <img
                    src={qcommerceRasrin}
                    alt="Q-Commerce solutions for Blinkit, Zepto and BigBasket"
                    className="w-full h-auto block rounded-lg"
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
                    <div className="font-heading text-lg font-700 leading-none">10-min</div>
                    <div className="font-body text-[9px] uppercase tracking-wider">Delivery Ready</div>
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
                Q-Commerce · Blinkit · Zepto · BigBasket
              </p>
              <h3 className="font-heading text-3xl md:text-4xl font-600 text-off-white leading-tight mb-6">
                Quick-commerce growth, <span className="text-primary">delivered in minutes</span>
              </h3>
              <p className="font-body text-base text-off-white/60 leading-relaxed mb-8 max-w-md">
                End-to-end Q-Commerce enablement across Blinkit, Zepto, BigBasket and more —
                from store onboarding and catalog sync to visibility ads that boost sales fast.
              </p>

              <ul className="space-y-3">
                {[
                  "Store Onboarding & Setup",
                  "Product & Inventory Sync",
                  "Faster Delivery Integration",
                  "Boost Sales in Minutes",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-off-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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

export default GoogleAdsPortfolioSection;