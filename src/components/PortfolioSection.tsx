import { motion } from "framer-motion";
import portfolioBlossoms from "@/assets/portfolio-blossoms.jpg";
import portfolioPrimeSolutions from "@/assets/portfolio-prime-solutions.png.asset.json";
import portfolioGym from "@/assets/portfolio-nutriomfit-new.jpg";
import portfolioInteriorsNew from "@/assets/portfolio-interiors-new.png";
import portfolioJVEngineers from "@/assets/portfolio-jvengineers.png";
import portfolioPixelStories from "@/assets/portfolio-pixel-stories.jpg";


const clients = [
  {
    name: "Blossoms Hospital",
    industry: "Healthcare",
    image: portfolioBlossoms,
    services: ["Social Media Management", "Google Ads", "Content Creation"],
    result: "3× increase in patient inquiries through targeted digital campaigns.",
  },
  {
    name: "Prime Solutions",
    industry: "Supply & Services",
    image: portfolioPrimeSolutions.url,
    services: ["Web Design", "Branding", "SEO"],
    result: "Delivered a premium corporate website showcasing complete supply and service solutions under one roof.",
  },
  {
    name: "NutriomFit",
    industry: "Holistic Wellness",
    image: portfolioGym,
    services: ["Web Design", "Social Media Advertising", "SEO"],
    result: "Boosted online consultations by 180% with a wellness-focused digital strategy.",
  },
  {
    name: "NestSync Interiors",
    industry: "Interior Design",
    image: portfolioInteriorsNew,
    services: ["Social Media Handling", "Content Creation", "Google Ads"],
    result: "Grew Instagram following by 400% with curated visual storytelling.",
  },
  {
    name: "JV Engineers",
    industry: "Construction",
    image: portfolioJVEngineers,
    services: ["Web Design", "SEO", "Content Creation"],
    result: "Built a professional online presence showcasing construction expertise and driving client inquiries.",
  },
  {
    name: "Pixel Stories",
    industry: "Wedding Photography",
    image: portfolioPixelStories,
    services: ["Web Design", "Social Media Management", "Branding"],
    result: "Crafted an elegant online portfolio that captures timeless moments and drives booking inquiries.",
  },
];

const LaptopMockup = ({ image, name }: { image: string; name: string }) => (
  <div className="relative w-full">
    {/* Orange radial glow behind laptop */}
    <div
      aria-hidden
      className="absolute inset-0 -z-10 mx-auto"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255,154,97,0.55) 0%, rgba(244,123,66,0.25) 40%, transparent 70%)",
        filter: "blur(40px)",
        transform: "scale(1.1)",
      }}
    />
    <motion.div
      className="relative mx-auto"
      style={{ width: "90%", maxWidth: "620px" }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Screen bezel */}
      <div
        className="bg-[#1a1a1a] rounded-t-xl p-[6px] md:p-2"
        style={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.45), 0 20px 40px -15px rgba(0,0,0,0.3)" }}
      >
        <div className="flex justify-center mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
        </div>
        <div className="rounded-sm overflow-hidden bg-black">
          <img
            src={image}
            alt={`${name} website design`}
            className="w-full h-auto object-cover aspect-[16/10]"
            loading="lazy"
          />
        </div>
      </div>
      {/* Laptop base */}
      <div className="relative">
        <div
          className="mx-auto h-3 md:h-4 bg-gradient-to-b from-[#c0c0c0] to-[#a0a0a0] rounded-b-lg"
          style={{ width: "105%", marginLeft: "-2.5%" }}
        />
        <div className="mx-auto h-1 bg-[#888] rounded-b-sm" style={{ width: "30%" }} />
      </div>
      {/* Reflection */}
      <div
        aria-hidden
        className="mx-auto mt-2 opacity-40"
        style={{
          width: "70%",
          height: "30px",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </motion.div>
  </div>
);

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F47B42 0%, #F68A4E 55%, #FF9A61 100%)",
      }}
    >
      {/* Decorative blurred blobs */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-120px",
          right: "-120px",
          width: "520px",
          height: "520px",
          background: "#FFB17A",
          opacity: 0.16,
          filter: "blur(160px)",
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "-160px",
          left: "-140px",
          width: "560px",
          height: "560px",
          background: "#F1642B",
          opacity: 0.18,
          filter: "blur(180px)",
        }}
        animate={{ x: [0, -25, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute pointer-events-none rounded-full hidden md:block"
        style={{
          top: "40%",
          left: "45%",
          width: "380px",
          height: "380px",
          background: "#FFB17A",
          opacity: 0.12,
          filter: "blur(140px)",
        }}
        animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span aria-hidden className="h-px w-10 bg-white/70" />
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-white font-600">
              Our Portfolio
            </p>
          </motion.div>
          <motion.h2
            className="font-heading font-600 leading-[1.05] md:leading-[92px] text-white"
            style={{ letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-5xl md:text-7xl lg:text-[84px]">
              Web Designs That{" "}
              <span style={{ color: "#1F1F1F" }}>Deliver</span>
            </span>
          </motion.h2>
        </div>

        {/* Portfolio items */}
        <div className="space-y-24 md:space-y-32">
          {clients.map((client, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={client.name}
                className={`grid grid-cols-1 md:grid-cols-12 md:gap-x-[120px] gap-8 items-center ${
                  isEven ? "" : "md:[direction:rtl]"
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Laptop */}
                <div className={`md:col-span-7 ${isEven ? "" : "md:[direction:ltr]"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <LaptopMockup image={client.image} name={client.name} />
                  </motion.div>
                </div>

                {/* Info */}
                <div className={`md:col-span-5 ${isEven ? "" : "md:[direction:ltr]"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span
                      className="inline-flex items-center font-body text-[11px] md:text-xs font-700 uppercase tracking-[0.2em] text-primary bg-white px-4 py-1.5 rounded-full shadow-sm mb-4"
                    >
                      {client.industry}
                    </span>
                    <h3 className="font-heading text-3xl md:text-4xl font-600 text-white mb-3 leading-tight">
                      {client.name}
                    </h3>
                    <p
                      className="font-body text-sm md:text-base font-400 leading-relaxed mb-6"
                      style={{ color: "rgba(255,255,255,0.92)" }}
                    >
                      {client.result}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service, idx) => (
                        <motion.span
                          key={service}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + idx * 0.08 }}
                          className="font-body text-[11px] font-600 uppercase tracking-wider text-white px-3 py-1.5 rounded-full transition-colors duration-200 cursor-default hover:bg-white hover:text-[#F47B42]"
                          style={{
                            background: "rgba(255,255,255,0.12)",
                            border: "1px solid rgba(255,255,255,0.28)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                          }}
                        >
                          {service}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlights */}
        <motion.div
          className="mt-24 pt-16 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Creative Designing",
              "High Quality Building",
              "Mobile User Friendly",
              "SEO Friendly",
              "Supportive Maintenance",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-charcoal shrink-0" />
                <span className="font-body text-sm font-500 uppercase tracking-wider text-white">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
