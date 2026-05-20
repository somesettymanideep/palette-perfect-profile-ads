import { motion } from "framer-motion";
import webDesignIcon from "@/assets/service-web-design.png";
import seoIcon from "@/assets/service-seo.png";
import googleAdsIcon from "@/assets/service-google-ads.png";
import socialHandlingIcon from "@/assets/service-social-handling.png";
import socialAdvertisingIcon from "@/assets/service-social-advertising.png";
import contentCreationIcon from "@/assets/service-content-creation.png";

const services = [
  {
    title: "Web Designing & Developing",
    description: "Creative designing, high quality building, mobile-friendly, SEO-friendly with supportive maintenance.",
    icon: "image",
    image: webDesignIcon,
  },
  {
    title: "Social Media Handling",
    description: "From account creation to reputation management. Regular analytics, pages optimization and hashtag research.",
    icon: "image",
    image: socialHandlingIcon,
  },
  {
    title: "Social Media Advertising",
    description: "Customized audience targeting for more brand value and reach. Behavioral, psychographic, and geo targeting.",
    icon: "image",
    image: socialAdvertisingIcon,
  },
  {
    title: "Google Ads",
    description: "Search, Display, Shopping, Video, App Promotion & Discover Ads — with customized audience options.",
    icon: "image",
    image: googleAdsIcon,
  },
  {
    title: "Search Engine Optimization",
    description: "Organic and white hat SEO techniques. Increase traffic, grow conversions, improve ranking and generate leads.",
    icon: "image",
    image: seoIcon,
  },
  {
    title: "Content Creation",
    description: "Our writers always deliver amazing creative and apt content. From social media posts to brand storytelling.",
    icon: "image",
    image: contentCreationIcon,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-background overflow-hidden">
      <div className="container-wide">
        <motion.div
          className="section-rule mb-16"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Our Expertise
            </p>
          </motion.div>
          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-600 text-foreground leading-tight">
              What <span className="text-primary">ADS</span> Do
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Hover overlay with related image */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-3/4 h-3/4 object-contain scale-90 group-hover:scale-100 transition-transform duration-500 drop-shadow-2xl"
                  />
                )}
              </div>

              <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-14 h-14 object-contain"
                    />
                  ) : (
                    <span className="text-4xl">{service.icon}</span>
                  )}
                </div>
                <span className="absolute top-0 right-0 font-body text-xs text-muted-foreground/40 font-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl font-600 text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm font-300 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
