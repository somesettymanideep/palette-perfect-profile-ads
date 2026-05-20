import { motion } from "framer-motion";
import integrityIcon from "@/assets/value-integrity.png";
import digitalMarketingIcon from "@/assets/value-digital-marketing.png";
import clientsIcon from "@/assets/value-clients.png";
import resultsIcon from "@/assets/value-results.png";

const values = [
  {
    icon: null,
    image: integrityIcon,
    title: "Integrity",
    text: "Work with utmost integrity and accountable",
  },
  {
    icon: null,
    image: digitalMarketingIcon,
    title: "Embrace Digital Marketing",
    text: "We always embrace the changes in digital marketing with open arms and work to give the best",
  },
  {
    icon: null,
    image: clientsIcon,
    title: "Embrace Clients",
    text: "We never keep aside our clients. We are loyal and consider the clients' goals as ours",
  },
  {
    icon: null,
    image: resultsIcon,
    title: "Deliver the Results",
    text: "With utmost dedication we deliver the results which are desired with our sincerity",
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="relative py-32 md:py-40 bg-primary overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="font-body text-xs tracking-[0.4em] text-primary-foreground/70 uppercase mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Stand For
          </motion.span>
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our Core Values
          </motion.h2>
        </div>

        {/* Values grid — 2x2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                className="group relative p-8 md:p-10 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 transition-all duration-500 hover:bg-primary-foreground/20 hover:border-primary-foreground/30"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-400">
                  {v.image ? (
                    <img src={v.image} alt={v.title} className="w-16 h-16 object-contain" />
                  ) : (
                    Icon && <Icon className="w-10 h-10 text-primary-foreground" />
                  )}
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary-foreground mb-3">
                  {v.title}
                </h3>
                <p className="font-body text-sm md:text-base font-light text-primary-foreground/70 leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
