import { motion } from "framer-motion";

const milestones = [
  { year: "2019", label: "Founded Ayron IT Solutions" },
  { year: "2021", label: "Rebranded as Ayron Digital Solutions" },
  { year: "2024", label: "50+ Clients & Growing" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-foreground text-primary-foreground overflow-hidden">
      <div className="container-wide">
        {/* Top label */}
        <motion.p
          className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.p>

        {/* Accent line */}
        <motion.div
          className="w-16 h-1 bg-primary mb-12"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Main heading */}
        <motion.h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Shaping digital presence
          <br />
          since <span className="text-primary italic">2019</span>.
        </motion.h2>

        {/* Two-column content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
          <motion.p
            className="font-body text-lg font-light leading-relaxed text-primary-foreground/70"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            In the year 2019, Ayron IT Solutions was started by Mr. Patan Aziz Rehman. In the same year the company started Digital Marketing services, and in 2021 it was named as Ayron Digital Solutions (ADS) under Ayron IT Solutions.
          </motion.p>
          <motion.p
            className="font-body text-lg font-light leading-relaxed text-primary-foreground/70"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            A.D.S works the smart way to be efficient, by adding values and purpose to every project — whether they are Social Media Management, Web Designing, SEO, Advertising or Content Creation.
          </motion.p>
        </div>

        {/* Timeline milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              className="relative border-t border-primary/30 pt-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
            >
              <span className="font-heading text-5xl md:text-6xl font-bold text-primary/20">
                {item.year}
              </span>
              <p className="font-body text-base mt-3 text-primary-foreground/80 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
