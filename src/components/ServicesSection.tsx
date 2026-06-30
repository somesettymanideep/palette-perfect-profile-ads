import { motion } from "framer-motion";
import { ShoppingBag, Zap, type LucideIcon } from "lucide-react";
import webDesignIcon from "@/assets/service-web-design.png";
import seoIcon from "@/assets/service-seo.png";
import googleAdsIcon from "@/assets/service-google-ads.png";
import socialHandlingIcon from "@/assets/service-social-handling.png";
import socialAdvertisingIcon from "@/assets/service-social-advertising.png";
import contentCreationIcon from "@/assets/service-content-creation.png";
import bgWebDesign from "@/assets/bg-web-design.jpg";
import bgSocialHandling from "@/assets/bg-social-handling.jpg";
import bgSocialAds from "@/assets/bg-social-ads.jpg";
import bgGoogleAds from "@/assets/bg-google-ads.jpg";
import bgSeo from "@/assets/bg-seo.jpg";
import bgContentCreation from "@/assets/bg-content-creation.jpg";
import bgQCommerceAsset from "@/assets/bg-q-commerce.webp.asset.json";
import bgEcommerceListingAsset from "@/assets/bg-ecommerce-listing.png.asset.json";

const bgQCommerce = bgQCommerceAsset.url;
const bgEcommerceListing = bgEcommerceListingAsset.url;

type Service = {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  bg: string;
  badge?: string;
  bgPosition?: string;
  overlayClass?: string;
};

const services: Service[] = [
  {
    title: "Web Designing & Developing",
    description: "Creative designing, high quality building, mobile-friendly, SEO-friendly with supportive maintenance.",
    image: webDesignIcon,
    bg: bgWebDesign,
  },
  {
    title: "Social Media Handling",
    description: "From account creation to reputation management. Regular analytics, pages optimization and hashtag research.",
    image: socialHandlingIcon,
    bg: bgSocialHandling,
  },
  {
    title: "Social Media Advertising",
    description: "Customized audience targeting for more brand value and reach. Behavioral, psychographic, and geo targeting.",
    image: socialAdvertisingIcon,
    bg: bgSocialAds,
  },
  {
    title: "Google Ads",
    description: "Search, Display, Shopping, Video, App Promotion & Discover Ads — with customized audience options.",
    image: googleAdsIcon,
    bg: bgGoogleAds,
  },
  {
    title: "Search Engine Optimization",
    description: "Organic and white hat SEO techniques. Increase traffic, grow conversions, improve ranking and generate leads.",
    image: seoIcon,
    bg: bgSeo,
  },
  {
    title: "Content Creation",
    description: "Our writers always deliver amazing creative and apt content. From social media posts to brand storytelling.",
    image: contentCreationIcon,
    bg: bgContentCreation,
  },
  {
    title: "E-Commerce Listing",
    description: "High-converting product listings across Amazon, Flipkart, Myntra & D2C stores. SEO-rich titles, A+ content, images and catalog optimization.",
    icon: ShoppingBag,
    bg: bgEcommerceListing,
    badge: "New",
    bgPosition: "center",
    overlayClass: "bg-primary/55",
  },
  {
    title: "Q-Commerce",
    description: "Quick-commerce growth on Blinkit, Zepto, Instamart & Swiggy. Listings, visibility ads, and rapid-delivery SKU strategy.",
    icon: Zap,
    bg: bgQCommerce,
    badge: "New",
    bgPosition: "center",
    overlayClass: "bg-primary/55",
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
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Hover background image */}
              <div
                className="absolute inset-0 bg-cover bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url(${service.bg})`, backgroundPosition: service.bgPosition ?? "center" }}
              />
              {/* Overlay */}
              <div className={`absolute inset-0 ${service.overlayClass ?? "bg-primary/85"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-6 transition-all duration-500">
                  {service.icon ? (
                    <div className="w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary-foreground/15 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                      <service.icon
                        className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500"
                        strokeWidth={1.75}
                      />
                    </div>
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-14 h-14 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <span className="absolute top-6 right-6 font-body text-xs text-muted-foreground/40 group-hover:text-primary-foreground/60 font-500 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {service.badge && (
                  <span className="absolute top-6 left-6 inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-body text-[10px] uppercase tracking-wider text-primary group-hover:bg-primary-foreground/15 group-hover:border-primary-foreground/40 group-hover:text-primary-foreground transition-colors duration-500">
                    {service.badge}
                  </span>
                )}
                <h3 className="font-heading text-xl font-600 text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-body text-sm font-300 text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors duration-500">
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
