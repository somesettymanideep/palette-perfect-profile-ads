import { motion, AnimatePresence } from "framer-motion";
import adsBoothImage from "@/assets/ads-booth.png";
import adsLogoNew from "@/assets/ads-logo-new.png";

interface SplashScreenProps {
  onComplete: () => void;
  isVisible: boolean;
}

const SplashScreen = ({ onComplete, isVisible }: SplashScreenProps) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-foreground overflow-hidden cursor-pointer"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={onComplete}
        >
          {/* Background booth image — subtle and cinematic */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <img
              src={adsBoothImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content overlay */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Logo mark */}
            <motion.div
              className="mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={adsLogoNew}
                alt="ADS - Ayron Digital Solutions"
                className="h-64 md:h-96 w-auto object-contain"
              />
            </motion.div>

            {/* Taglines */}
            <div className="space-y-2">
              {["Creators", "Strategists", "Goal Oriented"].map((word, i) => (
                <motion.div
                  key={word}
                  className="overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.2, duration: 0.6 }}
                >
                  <motion.p
                    className="font-heading text-2xl md:text-3xl font-600 text-off-white/80"
                    initial={{ y: 40 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.9 + i * 0.2, duration: 0.6, ease: "easeOut" }}
                  >
                    We are <span className="text-primary">{word}</span>
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Enter CTA */}
            <motion.p
              className="mt-16 font-body text-xs uppercase tracking-[0.3em] text-off-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.4, 1] }}
              transition={{ delay: 2.2, duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              Click anywhere to enter
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
