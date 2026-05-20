import { motion } from "framer-motion";
import { Search, TrendingUp, Globe, Shield, Users } from "lucide-react";
import seoCharacter from "@/assets/seo-character.png";
import seoLaptop from "@/assets/seo-laptop.png";

const benefits = [
  { icon: TrendingUp, text: "Increase Traffic" },
  { icon: Globe, text: "Grow Site Conversion" },
  { icon: Search, text: "Improve Website Ranking" },
  { icon: Shield, text: "Increase Credibility" },
  { icon: Users, text: "Generate Leads" },
];

const SeoSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Orange diagonal background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-background" />
        <div
          className="absolute bottom-0 right-0 w-[60%] h-full bg-primary hidden md:block"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-8"
        >
          SEO
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-widest text-foreground/80 max-w-full whitespace-nowrap overflow-hidden text-ellipsis leading-relaxed mb-12"
        >
          Organic, white-hat SEO that ranks your site in the top ten.
        </motion.p>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left: Benefits */}
          <div className="md:col-span-4">
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-display text-xl md:text-2xl font-bold text-primary uppercase tracking-wide mb-6"
            >
              Benefits You Get From The SEO
            </motion.h3>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <benefit.icon className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base uppercase tracking-wider font-semibold text-foreground">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center: Character */}
          <motion.div
            className="md:col-span-4 flex justify-center"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src={seoCharacter}
              alt="SEO specialist illustration"
              className="w-64 md:w-80 h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Right: Laptop */}
          <motion.div
            className="md:col-span-4 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <img
              src={seoLaptop}
              alt="SEO analytics on laptop"
              className="w-72 md:w-96 h-auto drop-shadow-2xl scale-x-[-1]"
            />
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "Top 10", label: "Google Rankings" },
            { value: "200%", label: "Traffic Growth" },
            { value: "5x", label: "Lead Generation" },
            { value: "100%", label: "White Hat SEO" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              className="text-center p-4 bg-card/80 backdrop-blur-sm border border-border rounded-sm"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SeoSection;
