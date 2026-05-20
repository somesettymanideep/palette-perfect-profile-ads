import { motion } from "framer-motion";
import { Instagram, Facebook, PenTool, Megaphone } from "lucide-react";
import socialInstagram from "@/assets/social-instagram-new.png";
import socialFacebook from "@/assets/social-facebook-new.png";
import socialContent from "@/assets/social-content.jpg";
import socialAdvertising from "@/assets/social-advertising.jpg";

const services = [
  {
    icon: Instagram,
    title: "Instagram Marketing",
    image: socialInstagram,
    description:
      "Scroll-stopping reels, stories and hashtag strategies that grow your following.",
    features: [
      "Profile Optimization",
      "Reels & Stories Strategy",
      "Hashtag Research",
      "Engagement Growth",
      "Analytics & Insights",
    ],
    stat: "400%",
    statLabel: "Avg. Follower Growth",
    extraStats: [
      { value: "10M+", label: "Reels Views" },
      { value: "85%", label: "Engagement Lift" },
      { value: "2.5×", label: "Story Reach" },
    ],
  },
  {
    icon: Facebook,
    title: "Facebook Marketing",
    image: socialFacebook,
    description:
      "Data-driven page management and lead-gen campaigns with high-converting ad creatives.",
    features: [
      "Page Management",
      "Lead Generation",
      "Community Building",
      "Facebook Groups",
      "Messenger Marketing",
    ],
    stat: "700%",
    statLabel: "ROI on Ad Spend",
    extraStats: [
      { value: "5K+", label: "Leads Generated" },
      { value: "−45%", label: "Cost Per Lead" },
      { value: "3.2×", label: "Page Reach" },
    ],
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    image: socialAdvertising,
    description:
      "Precision-targeted paid campaigns built to maximise ROI across every platform.",
    features: [
      "Audience Targeting",
      "A/B Testing",
      "Retargeting Campaigns",
      "Budget Optimization",
      "Performance Reports",
    ],
    stat: "3×",
    statLabel: "Lead Generation",
    extraStats: [
      { value: "8.5×", label: "Avg. ROAS" },
      { value: "−38%", label: "CPC Reduction" },
      { value: "92%", label: "Audience Match" },
    ],
  },
];

const PhoneMockup = ({ image, name }: { image: string; name: string }) => (
  <div className="relative mx-auto" style={{ width: "220px" }}>
    {/* Phone frame */}
    <div className="relative bg-[#1a1a1a] rounded-[2rem] p-2 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-10" />
      {/* Screen */}
      <div className="rounded-[1.5rem] overflow-hidden bg-black">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover aspect-[9/16] object-top"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

const SocialMediaSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-primary">





      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mb-24">
          <motion.p
            className="font-body text-sm uppercase tracking-[0.2em] text-off-white/40 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Social Media Marketing
          </motion.p>
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-600 text-off-white leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            We Make Your Brand{" "}
            <span className="text-primary">Go Viral</span>
          </motion.h2>
        </div>

        {/* Service cards */}
        <div className="space-y-32">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                className={`grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center ${
                  isEven ? "" : "md:[direction:rtl]"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                {/* Phone mockup side */}
                <div className={`md:col-span-4 ${isEven ? "" : "md:[direction:ltr]"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 80, rotate: isEven ? -5 : 5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <PhoneMockup image={service.image} name={service.title} />
                  </motion.div>
                </div>

                {/* Content side */}
                <div className={`md:col-span-8 ${isEven ? "" : "md:[direction:ltr]"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    {/* Icon + title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-3xl md:text-4xl font-600 text-off-white">
                        {service.title}
                      </h3>
                    </div>

                    <p className="font-body text-base md:text-lg font-300 text-off-white/60 leading-relaxed mb-8 max-w-xl">
                      {service.description}
                    </p>

                    {/* Stat highlight */}
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="font-heading text-5xl md:text-6xl font-600 text-primary">
                        {service.stat}
                      </span>
                      <span className="font-body text-sm uppercase tracking-wider text-off-white/40">
                        {service.statLabel}
                      </span>
                    </div>

                    {/* Extra metrics strip */}
                    {service.extraStats && (
                      <div className="grid grid-cols-3 gap-4 mb-8 border-y border-off-white/10 py-5 max-w-xl">
                        {service.extraStats.map((m, mi) => (
                          <motion.div
                            key={m.label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 + mi * 0.1 }}
                          >
                            <div className="font-heading text-2xl md:text-3xl font-600 text-off-white leading-none">
                              {m.value}
                            </div>
                            <div className="font-body text-[10px] md:text-xs uppercase tracking-wider text-off-white/40 mt-2">
                              {m.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-3">
                      {service.features.map((feature, fi) => (
                        <motion.span
                          key={feature}
                          className="font-body text-xs uppercase tracking-wider text-off-white/50 border border-off-white/10 px-4 py-2 hover:border-primary/40 hover:text-primary transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + fi * 0.06 }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
