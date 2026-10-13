import { motion } from 'framer-motion';
import { RESORT_INFO } from '../data/resortData';

export const SignatureStatement = () => {
  return (
    <section className="relative py-36 sm:py-48 w-full overflow-hidden flex items-center justify-center bg-[#0e2720] text-[#F7F4EC]">
      {/* Background Image with Fixed/Gentle Parallax Illusion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="/images/satva-statement.jpg"
            alt="Misty mountain forest ridgeline at SATVA Resort"
            className="w-full h-full object-cover object-center brightness-[0.45]"
            loading="lazy"
          />
        </motion.div>
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2720]/80 via-transparent to-[#0e2720]/80" />
      </div>

      {/* Floating Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle Decorative Golden Emblem */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-16 h-16 mx-auto mb-8 rounded-full border border-[#B49A67]/40 flex items-center justify-center p-3 bg-[#0e2720]/50 backdrop-blur-sm"
        >
          <img
            src="/favicon.svg"
            alt="SATVA Lotus Emblem"
            className="w-full h-full object-contain opacity-80"
          />
        </motion.div>

        {/* The Signature Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F7F4EC] font-light tracking-tight leading-[1.12] mb-8"
        >
          {RESORT_INFO.statementHeading}
        </motion.h2>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-20 h-[1.5px] bg-[#B49A67]/70 mx-auto mb-8"
        />

        {/* Subtitle / Philosophy Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#D8C8AC] font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          {RESORT_INFO.statementSub}
        </motion.p>
      </div>
    </section>
  );
};
