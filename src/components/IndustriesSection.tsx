import { motion } from "framer-motion";
import {
  Building2,
  Hospital,
  Gem,
  Sofa,
  Dumbbell,
  Plane,
  Shirt,
  Armchair,
  Car,
  PartyPopper,
  Sparkles,
  Wallet,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

type Industry = { name: string; icon: LucideIcon };

const industries: Industry[] = [
  { name: "Construction", icon: Building2 },
  { name: "Hospital", icon: Hospital },
  { name: "Jewellery", icon: Gem },
  { name: "Interior Design", icon: Sofa },
  { name: "Fitness & Gym", icon: Dumbbell },
  { name: "Tourism", icon: Plane },
  { name: "Apparel", icon: Shirt },
  { name: "Furniture", icon: Armchair },
  { name: "Car Accessories", icon: Car },
  { name: "Events", icon: PartyPopper },
  { name: "Beauty & Salon", icon: Sparkles },
  { name: "Finance Management", icon: Wallet },
  { name: "Restaurant", icon: UtensilsCrossed },
];

const IndustriesSection = () => {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container-wide">
        <motion.div
          className="section-rule mb-16"
          initial={{ scaleX: 0, originX: 0.5 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Industries
            </p>
          </motion.div>
          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-600 text-foreground leading-tight">
              Industries We Have Our <span className="text-primary">Mark</span> In
            </h2>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {industries.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              className="group relative flex flex-col items-center justify-center gap-3 border border-border bg-card px-4 py-6 md:py-8 hover:border-primary hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: "easeOut" }}
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <span className="relative font-body text-xs md:text-sm font-500 uppercase tracking-wider text-foreground text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
