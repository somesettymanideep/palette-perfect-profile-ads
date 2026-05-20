import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import reel1 from "@/assets/content-reel-1.mp4";
import reel2 from "@/assets/content-reel-2.mp4";
import reel3 from "@/assets/content-reel-3.mp4";
import reel4 from "@/assets/content-reel-4.mp4";
import reelJewellery from "@/assets/reel-jewellery.mp4";
import reelMetroCars from "@/assets/reel-metro-cars.mp4";
import reelJewellery2 from "@/assets/reel-jewellery-2.mp4";

const reels = [
  { src: reel1, label: "Brand Story", category: "Reel" },
  { src: reelJewellery, label: "Jewellery Brand", category: "Reel" },
  { src: reelMetroCars, label: "Metro Cars", category: "Reel" },
  { src: reel3, label: "Behind The Scenes", category: "Reel" },
  { src: reelJewellery2, label: "Jewellery Edit", category: "Short" },
  { src: reel4, label: "Campaign Edit", category: "Short" },
];

// Global coordinator: ensure only one reel plays sound at a time
const REEL_UNMUTE_EVENT = "ads-reel-unmute";

const PhoneReelComponent = ({ src, label, category, id }: { src: string; label: string; category: string; id: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<number>).detail;
      if (detail !== id) {
        const v = videoRef.current;
        if (v && !v.muted) {
          v.muted = true;
          setMuted(true);
        }
      }
    };
    window.addEventListener(REEL_UNMUTE_EVENT, handler);
    return () => window.removeEventListener(REEL_UNMUTE_EVENT, handler);
  }, [id]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) {
      window.dispatchEvent(new CustomEvent<number>(REEL_UNMUTE_EVENT, { detail: id }));
      v.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
  <div className="relative mx-auto w-full max-w-[240px]">
    <div className="relative bg-[#0d0d0d] rounded-[2.2rem] p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-off-white/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0d0d0d] rounded-b-2xl z-10" />
      <div className="absolute -right-[2px] top-20 w-[3px] h-12 bg-[#1a1a1a] rounded-l" />
      <div className="relative rounded-[1.7rem] overflow-hidden bg-black aspect-[9/16]">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-off-white/20 flex items-center justify-center text-off-white hover:bg-primary hover:border-primary transition-colors"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
    <div className="mt-5 text-center">
      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-primary font-700">
        {category}
      </span>
      <p className="font-heading text-lg text-off-white font-500 mt-1">{label}</p>
    </div>
  </div>
  );
};

const ContentCreationSection = () => {
  return (
    <section id="content-creation" className="py-32 bg-charcoal relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span aria-hidden className="h-px w-10 bg-primary" />
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-700">
              Content Creation
            </p>
          </motion.div>
          <motion.h2
            className="font-heading text-4xl md:text-6xl font-600 text-off-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Reels That <span className="text-primary">Stop The Scroll</span>
          </motion.h2>
          <motion.p
            className="font-body text-base md:text-lg text-off-white/60 leading-relaxed mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Concept, shoot, edit. We craft thumb-stopping short-form videos engineered to drive views, follows and conversions.
          </motion.p>
        </div>

        {/* Phone grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {reels.map((reel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transform: i % 2 === 0 ? "translateY(0)" : "translateY(28px)",
              }}
            >
              <PhoneReelComponent {...reel} id={i} />
            </motion.div>
          ))}
        </div>

        {/* Bottom highlights */}
        <motion.div
          className="mt-28 pt-12 border-t border-off-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { value: "10M+", label: "Reel Views" },
            { value: "120+", label: "Videos / Month" },
            { value: "4.9★", label: "Client Rating" },
            { value: "48h", label: "Avg. Turnaround" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-heading text-3xl md:text-4xl font-600 text-primary leading-none">
                {m.value}
              </div>
              <div className="font-body text-[11px] md:text-xs uppercase tracking-[0.2em] text-off-white/50 mt-3">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContentCreationSection;