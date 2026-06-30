import { motion } from "framer-motion";
import portfolioBlossoms from "@/assets/portfolio-blossoms.jpg";
import portfolioPrimeSolutions from "@/assets/portfolio-prime-solutions.png.asset.json";
import portfolioDurgaHardware from "@/assets/portfolio-durga-hardware.png.asset.json";
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
    name: "Durga Hardware and Plywood",
    industry: "Hardware & Plywood",
    image: portfolioDurgaHardware.url,
    services: ["Web Design", "Social Media Advertising", "SEO"],
    result: "Launched a premium showroom website showcasing plywood, laminates, veneers, and hardware accessories.",
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
    <div className="relative mx-auto" style={{ width: "90%", maxWidth: "420px" }}>
      {/* Screen bezel */}
      <div className="bg-[#1a1a1a] rounded-t-xl p-[6px] md:p-2 shadow-2xl">
        <div className="flex justify-center mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
        </div>
        <div className="rounded-sm overflow-hidden bg-black">
          <img
            src={image}
            alt={`${name} website design`}
            className="w-full h-auto object-contain aspect-[16/10] bg-black"
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
        <div
          className="mx-auto h-1 bg-[#888] rounded-b-sm"
          style={{ width: "30%" }}
        />
      </div>
    </div>
  </div>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 relative overflow-hidden" style={{ backgroundColor: "#f36e2b" }}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/10 to-transparent" />
      </div>

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
            <span aria-hidden className="h-px w-10 bg-white/90" />
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-white font-600">
              Our Portfolio
            </p>
          </motion.div>
          <motion.h2
            className="font-heading text-4xl md:text-6xl font-600 text-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Web Designs That{" "}
            <span className="text-[#1a1a1a]">Deliver</span>
          </motion.h2>
        </div>

        {/* Portfolio items */}
        <div className="space-y-24 md:space-y-32">
          {clients.map((client, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={client.name}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
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
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <span className="inline-flex items-center font-body text-[11px] md:text-xs font-700 uppercase tracking-[0.2em] text-[#1a1a1a] bg-white px-4 py-1.5 rounded-full shadow-sm mb-4">
                      {client.industry}
                    </span>
                    <h3 className="font-heading text-3xl md:text-4xl font-600 text-white mb-3 leading-tight">
                      {client.name}
                    </h3>
                    <p className="font-body text-sm md:text-base font-400 text-white/95 leading-relaxed mb-6">
                      {client.result}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service) => (
                        <span
                          key={service}
                          className="font-body text-[11px] font-600 uppercase tracking-wider text-white border border-white/70 px-3 py-1 rounded-full"
                        >
                          {service}
                        </span>
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
          className="mt-24 pt-16 border-t border-white/30"
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
                <span className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] shrink-0" />
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
