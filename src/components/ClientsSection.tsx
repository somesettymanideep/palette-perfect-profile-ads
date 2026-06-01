import { motion } from "framer-motion";
import clientsLogos from "@/assets/clients-logos-new.png";

const clients = [
  "Honda BigWing", "Nirmaan", "Twills", "Crest Hospital", "Barbeque",
  "Blossoms", "Raymond", "Ather", "RS Jewellers", "Allin One",
  "UP Gym", "Sandy Jewels", "Goli Silks", "Prashanth Hospital",
  "Samatha Hospital", "Express Salon", "Bakshi Tyres", "Royal Home",
  "DLC", "S7 Group", "Rupa", "Pink Lotus", "Statinfer", "Louis Park",
  "Vignesh", "Signet Electricals", "Thyrocare", "Vidhata Hospital",
  "RACF", "Bombay Jewellers", "Bhargava Studios", "BNI Vijayawada",
  "Vijaya Krishna", "Reflexion", "BSP", "Heritage", "On Wall Interiors",
  "Smart e-World", "Sanghvi Car Shoppe", "LN Dental",
];

const ClientsSection = () => {
  return (
    <section id="clients" className="relative py-28 md:py-36 bg-foreground overflow-hidden">
      {/* Diagonal accent */}
      <div
        className="absolute inset-0 bg-primary/10"
        style={{ clipPath: "polygon(0% 0%, 35% 0%, 20% 100%, 0% 100%)" }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Our Valuable Clients
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-700 text-primary-foreground leading-[0.95]">
              FRIENDS WE
              <br />
              HAVE MADE
              <br />
              <span className="text-primary">THROUGH OUR JOURNEY</span>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-sm text-primary-foreground/40 leading-relaxed">
              We are proud to have partnered with over 100+ brands across healthcare,
              retail, automotive, hospitality, and more — building lasting relationships
              through impactful digital strategies.
            </p>
            <div className="flex items-center gap-6 mt-6">
              <div>
                <span className="font-heading text-4xl font-700 text-primary">100+</span>
                <p className="font-body text-xs text-primary-foreground/40 uppercase tracking-wider mt-1">Clients</p>
              </div>
              <div className="w-px h-10 bg-primary-foreground/10" />
              <div>
                <span className="font-heading text-4xl font-700 text-primary">10+</span>
                <p className="font-body text-xs text-primary-foreground/40 uppercase tracking-wider mt-1">Industries</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling marquee rows */}
        <div className="space-y-4 mb-16">
          {[0, 1, 2].map((row) => {
            const rowClients = clients.slice(row * 13, row * 13 + 13);
            const isReverse = row % 2 === 1;
            return (
              <div key={row} className="relative overflow-hidden">
                <motion.div
                  className="flex gap-3 whitespace-nowrap"
                  animate={{ x: isReverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
                  transition={{ duration: 25 + row * 5, repeat: Infinity, ease: "linear" }}
                >
                  {[...rowClients, ...rowClients].map((name, j) => (
                    <div
                      key={`${name}-${j}`}
                      className="flex-shrink-0 px-6 py-3 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03] hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group cursor-default"
                    >
                      <span className="font-body text-sm text-primary-foreground/60 group-hover:text-primary transition-colors duration-300">
                        {name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Full image below */}
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-primary-foreground/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={clientsLogos}
            alt="Our valuable clients logos"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
