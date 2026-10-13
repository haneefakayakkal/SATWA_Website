import { motion } from 'framer-motion';
import { Compass, Calendar, Sparkles } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplore }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0e2720]"
    >
      {/* Background Image with Slow Cinematic Zoom & Ambient Depth */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, filter: 'brightness(0.75)' }}
          animate={{ scale: 1, filter: 'brightness(0.85)' }}
          transition={{ duration: 3.5, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <img
            src="/images/satva-hero.jpg"
            alt="SATVA Luxury Eco Resort infinity pool and misty rainforest pavilion"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Multi-tier Editorial Gradient Overlays for High Legibility & Warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2720] via-[#0e2720]/45 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0e2720]/30 to-[#0e2720]/80 pointer-events-none" />
      </div>

      {/* Floating Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#B49A67]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center justify-center min-h-screen">
        {/* Subtle Luxury Sanctuary Crest / Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#B49A67]/40 bg-[#0e2720]/60 backdrop-blur-md mb-8 text-[#D8C8AC]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B49A67]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#F7F4EC]/90">
            Highland Nature Sanctuary &bull; Western Ridge
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F4EC] font-normal tracking-tight leading-[1.08] mb-6 max-w-4xl"
        >
          {RESORT_INFO.tagline}
        </motion.h1>

        {/* Subtle Decorative Golden Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#B49A67] to-transparent mb-6"
        />

        {/* Supporting Editorial Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#F7F4EC]/85 max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide"
        >
          {RESORT_INFO.subheading}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Explore the Resort */}
          <button
            onClick={onExplore}
            id="hero-explore-cta"
            className="w-full sm:w-auto btn-gold-shimmer px-8 py-4 rounded-full text-[#0e2720] text-xs font-semibold tracking-[0.22em] uppercase flex items-center justify-center gap-2.5 shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#0e2720]" />
            <span>Explore the Resort</span>
          </button>

          {/* Secondary CTA: Plan Your Stay */}
          <button
            onClick={onOpenBooking}
            id="hero-plan-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#F7F4EC]/40 bg-[#F7F4EC]/10 hover:bg-[#F7F4EC]/20 text-[#F7F4EC] text-xs font-medium tracking-[0.22em] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#B49A67] hover:text-[#B49A67] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Plan Your Stay</span>
          </button>
        </motion.div>

        {/* Subtle Sanctuary Highlights Ribbon at Bottom of Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 pt-8 border-t border-[#F7F4EC]/10 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 text-center max-w-3xl w-full"
        >
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-xl text-[#B49A67]">1,240m</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#F7F4EC]/70 font-sans mt-0.5">
              Highland Elevation
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-xl text-[#B49A67]">100% Biophilic</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#F7F4EC]/70 font-sans mt-0.5">
              Timber &amp; Stone Architecture
            </span>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <span className="font-serif text-lg sm:text-xl text-[#B49A67]">Total Seclusion</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#F7F4EC]/70 font-sans mt-0.5">
              Pristine Forest Basin
            </span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={onExplore}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#F7F4EC]/60 font-sans">
          Scroll to Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[#B49A67]/40 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-1.5 bg-[#B49A67] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
