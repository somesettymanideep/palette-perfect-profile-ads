import { motion } from "framer-motion";
import { Globe, Mail, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import adsLogoFull from "@/assets/ads-logo-full.png";

const ThankYouSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-28 md:py-36 bg-primary overflow-hidden">
      {/* Hexagon shape */}
      <div className="container-wide relative z-10 flex flex-col items-center">
        <motion.div
          className="relative w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Hexagon container on desktop, rounded card on mobile */}
          <div
            className="bg-primary-foreground py-12 md:py-24 px-6 md:px-20 flex flex-col items-center text-center rounded-3xl md:rounded-none"
            style={!isMobile ? { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" } : undefined}
          >
            <div className="flex flex-col items-center mb-10 mt-4">
              <span className="font-body text-[0.7rem] md:text-xs tracking-[0.5em] uppercase text-primary mb-3">
                With Gratitude
              </span>
              <h2 className="font-heading italic text-5xl md:text-7xl font-500 text-foreground leading-none tracking-tight">
                Thank <span className="text-primary">You</span>
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <span className="h-px w-10 bg-primary/40" />
                <span className="w-1.5 h-1.5 rotate-45 bg-primary" />
                <span className="h-px w-10 bg-primary/40" />
              </div>
            </div>

            {/* Logo area */}
            <div className="flex items-center justify-center mb-10">
              <img
                src={adsLogoFull}
                alt="ADS - Ayron Digital Solutions"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="https://www.ayrondigitalsolutions.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center font-body text-sm text-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4 text-primary" />
                www.ayrondigitalsolutions.in
              </a>
              <a
                href="mailto:info@ayrondigitalsolutions.in"
                className="flex items-center gap-2 justify-center font-body text-sm text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@ayrondigitalsolutions.in
              </a>
              <a
                href="tel:+919550860545"
                className="flex items-center gap-2 justify-center font-body text-sm text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 95508 60545 / +91 73869 09994
              </a>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919550860545"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-heading font-600 text-sm hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;
