import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/resortData';

interface ExperiencesProps {
  onOpenBooking: () => void;
}

export const Experiences = ({ onOpenBooking }: ExperiencesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = EXPERIENCES_DATA[activeIndex];

  return (
    <section id="experiences" className="py-28 sm:py-36 bg-[#F7F4EC] text-[#222823] relative overflow-hidden">
      {/* Decorative Atmospheric Blur */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#D8C8AC]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#183D32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] font-sans font-medium text-[#B49A67] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Journeys</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#183D32] tracking-tight mb-4"
          >
            The SATVA Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#222823]/75 font-light leading-relaxed"
          >
            Moments tailored to slow the mind, awaken the senses, and deepen your communion with the living canopy.
          </motion.p>
        </div>

        {/* Interactive Editorial Navigation Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {EXPERIENCES_DATA.map((exp, idx) => (
            <button
              key={exp.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-3 rounded-full text-xs uppercase tracking-widest font-sans transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeIndex === idx
                  ? 'bg-[#183D32] text-[#F7F4EC] shadow-md'
                  : 'bg-white/80 hover:bg-white text-[#222823]/80 border border-[#D8C8AC]/50'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeIndex === idx ? 'bg-[#B49A67]' : 'bg-[#D8C8AC]'}`} />
              <span className="font-medium">{exp.title}</span>
            </button>
          ))}
        </div>

        {/* Feature Spotlight Asymmetrical Presentation */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#D8C8AC]/50 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]"
            >
              {/* Left Column: Image with Subtle Parallax feel */}
              <div className="lg:col-span-7 relative overflow-hidden bg-[#0e2720] min-h-[340px] lg:min-h-full">
                <img
                  src={activeExp.image}
                  alt={activeExp.title}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase font-sans font-semibold bg-[#B49A67] text-[#0e2720] shadow-md">
                    {activeExp.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-[#F7F4EC]">
                  <p className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                    {activeExp.tagline}
                  </p>
                </div>
              </div>

              {/* Right Column: Narrative & Highlights */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B49A67] font-sans font-medium mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeExp.duration}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#183D32] mb-4">
                    {activeExp.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#222823]/80 leading-relaxed font-light mb-8">
                    {activeExp.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#183D32] font-sans font-semibold block">
                      Curated Highlights:
                    </span>
                    {activeExp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#B49A67] shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-[#222823]/85 leading-normal">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D8C8AC]/40 flex items-center justify-between">
                  <span className="text-[11px] text-[#222823]/60 font-sans italic">
                    Bespoke scheduling arranged upon arrival
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 btn-gold-shimmer px-5 py-2.5 rounded-full text-[#0e2720] text-xs font-sans font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Secondary Asymmetrical Cards Preview */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeIndex === idx
                  ? 'bg-white border-[#B49A67] shadow-lg ring-1 ring-[#B49A67]/40'
                  : 'bg-white/60 hover:bg-white border-[#D8C8AC]/50 hover:border-[#B49A67]/50 shadow-sm'
              }`}
            >
              <div className="h-28 rounded-xl overflow-hidden mb-3 bg-[#0e2720]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#B49A67] font-sans font-semibold block mb-1">
                  {exp.category}
                </span>
                <h4 className="font-serif text-base text-[#183D32] line-clamp-1 mb-1">
                  {exp.title}
                </h4>
                <p className="font-sans text-[11px] text-[#222823]/70 line-clamp-2">
                  {exp.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
