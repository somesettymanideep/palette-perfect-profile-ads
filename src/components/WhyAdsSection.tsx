import { motion } from "framer-motion";
import whyAdsCharacter from "@/assets/why-ads-character.png";

const reasons = [
  "WE ARE APPROACHABLE",
  "WE DEFINE OUR OWN WAYS TO MEET THE CLIENT NEEDS",
  "WE ARE GOOD AT WHAT WE DO",
  "WE PRIORITIZE THE EACH AND EVERY DETAIL OF OUR CLIENT",
  "WE ARE TEAM OF PASSIONATE MEMBERS",
  "WE ENTIRELY FOCUS ON THE INCREASING THE AUDIENCE TO YOUR BUSINESS",
  "WE ARE SOCIALLY CONNECTED",
  "WE GUARANTEE THE RESULTS",
];

const WhyAdsSection = () => {
  return (
    <section id="why-ads" className="relative py-32 overflow-hidden bg-off-white">
      {/* Diagonal orange background */}
      <div
        className="absolute inset-0 bg-primary hidden md:block"
        style={{
          clipPath: "polygon(45% 0%, 100% 0%, 100% 100%, 30% 100%)",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="md:col-span-6 lg:col-span-7">
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-700 text-charcoal leading-tight mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              SO, WHY{" "}
              <span className="text-primary">A.D.S</span> ?
            </motion.h2>

            <ul className="space-y-5">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <span className="w-3 h-3 rounded-full bg-primary shrink-0" />
                  <span className="font-body text-sm md:text-base font-500 text-charcoal tracking-wide">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right - Character */}
          <motion.div
            className="md:col-span-6 lg:col-span-5 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={whyAdsCharacter}
              alt="Thinking character - Why choose ADS"
              className="w-72 md:w-96 lg:w-[28rem] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdsSection;
