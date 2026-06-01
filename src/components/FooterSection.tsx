import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 bg-charcoal overflow-hidden">
      <div className="container-wide">
        <motion.div
          className="section-rule mb-16 opacity-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-600 text-off-white mb-4">
              <span className="text-primary">A</span>yron{" "}
              <span className="text-primary">D</span>igital{" "}
              <span className="text-primary">S</span>olutions
            </h2>
            <p className="font-body text-base font-300 text-off-white/50 max-w-md leading-relaxed">
              A digital marketing company based in Vijayawada, India. Creating brand power and grabbing opportunities since 2019.
            </p>
          </motion.div>
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-off-white/40 mb-4">
              Services
            </p>
            <ul className="space-y-2">
              {["Web Design", "Social Media", "Google Ads", "SEO", "Content Creation"].map((s) => (
                <li key={s} className="font-body text-sm font-300 text-off-white/60">
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-off-white/40 mb-4">
              Contact
            </p>
            <p className="font-body text-sm font-300 text-off-white/60 mb-2">
              Vijayawada, Andhra Pradesh, India
            </p>
            <p className="font-body text-sm font-300 text-primary mb-2">
              info@ayrondigital.com
            </p>
            <a href="tel:+917386909994" className="font-body text-sm font-300 text-primary hover:text-off-white transition-colors">
              +91 73869 09994
            </a>
          </motion.div>
        </div>
        <motion.div
          className="section-rule mt-16 mb-8 opacity-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.p
          className="font-body text-xs text-off-white/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          © {new Date().getFullYear()} Ayron Digital Solutions. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterSection;
