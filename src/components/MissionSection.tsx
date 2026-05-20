import { motion } from "framer-motion";
import iconMission from "@/assets/icon-mission.png";
import iconVision from "@/assets/icon-vision.png";

const MissionSection = () => {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container-wide">
        {/* Section label */}
        <motion.p
          className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Purpose & Direction
        </motion.p>
        <motion.div
          className="w-16 h-1 bg-primary mb-16"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Two large cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <motion.div
            className="relative group p-10 md:p-14 border border-border bg-card rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.15)]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Large background number */}
            <span className="absolute -top-8 -right-4 font-heading text-[10rem] font-bold text-primary/[0.04] leading-none select-none pointer-events-none">
              01
            </span>

            <div className="relative z-10">
              <div className="mb-8">
                <img src={iconMission} alt="Mission" className="w-16 h-16" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
                Our <span className="text-primary italic">Mission</span>
              </h3>
              <p className="font-body text-lg font-light text-muted-foreground leading-relaxed">
                Our mission is always to progress ourselves in a smart way by delivering the desired outcome in the long run.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="relative group p-10 md:p-14 border border-primary/20 bg-foreground text-primary-foreground rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.3)]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Large background number */}
            <span className="absolute -top-8 -right-4 font-heading text-[10rem] font-bold text-primary/10 leading-none select-none pointer-events-none">
              02
            </span>

            <div className="relative z-10">
              <div className="mb-8">
                <img src={iconVision} alt="Vision" className="w-16 h-16" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                Our <span className="text-primary italic">Vision</span>
              </h3>
              <p className="font-body text-lg font-light text-primary-foreground/70 leading-relaxed">
                We want to be the most valued business partner for every small and medium company, to create local opportunity, growth and impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
