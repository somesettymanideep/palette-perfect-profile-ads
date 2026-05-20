import { motion } from "framer-motion";
import caseStudyBlossoms from "@/assets/case-study-blossoms.png";
import caseStudyPrashanth from "@/assets/case-study-prashanth.png";
import caseStudyCrest from "@/assets/case-study-crest.png";
import caseStudyVignesh from "@/assets/case-study-vignesh.png";
import caseStudyVidhata from "@/assets/case-study-vidhata.png";
import caseStudyBombay from "@/assets/case-study-bombay-jewellers.png";
import caseStudySanghvi from "@/assets/case-study-sanghvi-car.png";
import caseStudyAther from "@/assets/case-study-ather.png";

const caseStudies = [
  {
    image: caseStudyBlossoms,
    client: "Blossoms Mother & Child Hospital",
    tagline: "Tender care for tiny lives",
    quote:
      '"We don\'t just post — we tell your story, one scroll-stopper at a time."',
    services: ["Social Media", "Website", "Branding"],
    number: "01",
  },
  {
    image: caseStudyPrashanth,
    client: "Prashanth Hospital",
    tagline: "Institute for Advanced Urology, Gynecology & Robotic Surgery",
    quote:
      '"Be the first to be found — SEO that dominates search results."',
    services: ["SEO", "Website", "Social Media"],
    number: "02",
  },
  {
    image: caseStudyCrest,
    client: "Crest Hospital",
    tagline: "Expertise with empathy",
    quote:
      '"Designed to impress, developed to convert."',
    services: ["Social Media", "Branding", "Content"],
    number: "03",
  },
  {
    image: caseStudyVignesh,
    client: "Vignesh Fertility & Children's Hospital",
    tagline: "Turning dreams into families",
    quote:
      '"We don\'t boost posts — we build results with every click."',
    services: ["Social Media", "Branding", "Ads"],
    number: "04",
  },
  {
    image: caseStudyVidhata,
    client: "Vidhata Hospital",
    tagline: "Excellence Healthcare",
    quote:
      '"Designed to impress, developed to convert."',
    services: ["Website", "UI/UX", "Development"],
    number: "05",
  },
  {
    image: caseStudyBombay,
    client: "Bombay Jewellers",
    tagline: "Gold • Diamond • Platinum — Since 1936",
    quote:
      '"Grow with every post — social media that builds community and customers."',
    services: ["Social Media", "Content", "Branding"],
    number: "06",
  },
  {
    image: caseStudySanghvi,
    client: "Sanghvi Car Shoppe",
    tagline: "Car Accessories & Customization Experts",
    quote:
      '"Scroll-stopping strategies — social campaigns that drive real engagement."',
    services: ["Social Media", "Google Ads", "SEO"],
    number: "07",
  },
  {
    image: caseStudyAther,
    client: "Ather Energy",
    tagline: "Electric Scooters — Ride the Future",
    quote:
      '"Creating detailed strategical promotions that drive real impact."',
    services: ["Social Media", "Content", "Promotions"],
    number: "08",
  },
];

const CaseStudySection = () => {
  return (
    <section id="case-studies" className="relative py-28 md:py-36 overflow-hidden bg-foreground">
      {/* Orange diagonal accent */}
      <div
        className="absolute inset-0 bg-primary hidden md:block"
        style={{ clipPath: "polygon(55% 0%, 100% 0%, 100% 100%, 40% 100%)" }}
      />

      {/* Subtle pattern dots */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="container-wide relative z-10 space-y-32">
        {caseStudies.map((study, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
              {/* Content */}
              <div className={`lg:col-span-5 relative z-20 ${isEven ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}`}>
                <motion.span
                  className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-4 block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Case Study — {study.number}
                </motion.span>

                <motion.h2
                  className="font-heading text-4xl md:text-5xl font-700 text-primary-foreground leading-[0.95] mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {study.client}
                </motion.h2>

                <motion.p
                  className="font-body text-sm text-primary-foreground/40 italic mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {study.tagline}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  {study.services.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-1.5 rounded-full text-[10px] font-body tracking-[0.2em] uppercase border border-primary-foreground/20 text-primary-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </motion.div>

                <motion.blockquote
                  className="font-heading text-xl md:text-2xl font-500 text-primary-foreground/80 leading-snug border-l-2 border-primary pl-6"
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  {study.quote}
                </motion.blockquote>
              </div>

              {/* Image */}
              <motion.div
                className={`lg:col-span-7 relative z-10 ${isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}`}
                initial={{ opacity: 0, x: isEven ? 60 : -60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={study.image}
                      alt={`${study.client} case study`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <motion.span
                  className={`absolute -top-8 md:-top-12 font-heading text-[8rem] md:text-[12rem] font-900 text-primary-foreground/[0.06] select-none leading-none pointer-events-none ${isEven ? "-right-4 md:-right-8" : "-left-4 md:-left-8"}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {study.number}
                </motion.span>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudySection;
