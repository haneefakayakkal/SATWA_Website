import { motion } from 'framer-motion';
import { Leaf, Wind, SunMedium, Compass } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface AboutProps {
  onExploreStay: () => void;
}

export const About = ({ onExploreStay }: AboutProps) => {
  const pillars = [
    {
      icon: Leaf,
      number: '01',
      title: 'Biophilic Harmony',
      desc: 'Architecture crafted to dissolve the boundary between luxury interior living and the surrounding botanical sanctuary.',
    },
    {
      icon: Wind,
      number: '02',
      title: 'Paced Living',
      desc: 'Unstructured time to reset your biological circadian rhythm, guided by mountain dawn and starry nightfalls.',
    },
    {
      icon: SunMedium,
      number: '03',
      title: 'Restorative Hospitality',
      desc: 'Intuitive, discreet hospitality where every comfort is anticipated with warmth, stillness, and quiet attentiveness.',
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#F7F4EC] text-[#222823] overflow-hidden">
      {/* Decorative Subtle Background Texture Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8C8AC]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#183D32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="text-center md:text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-sans font-medium text-[#B49A67] mb-3"
          >
            <span className="w-8 h-[1px] bg-[#B49A67]" />
            <span>Our Philosophy</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#183D32] tracking-tight max-w-3xl leading-[1.15]"
          >
            {RESORT_INFO.aboutHeading}
          </motion.h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="font-serif text-2xl sm:text-3xl text-[#183D32]/90 leading-snug font-normal italic">
                “{RESORT_INFO.aboutContent.split('.')[0]}.”
              </p>
              <p className="font-sans text-base sm:text-lg text-[#222823]/80 leading-relaxed font-light">
                {RESORT_INFO.aboutContent.split('.').slice(1).join('.').trim()}
              </p>
            </motion.div>

            {/* Guiding Principles Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5 pt-4 border-t border-[#D8C8AC]/60"
            >
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 * idx }}
                    className="group p-4 rounded-xl bg-white/70 hover:bg-white border border-[#D8C8AC]/40 hover:border-[#B49A67]/60 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#183D32]/5 text-[#183D32] flex items-center justify-center shrink-0 group-hover:bg-[#183D32] group-hover:text-[#F7F4EC] transition-colors duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-sans font-bold tracking-widest text-[#B49A67]">
                            {item.number}
                          </span>
                          <h3 className="font-serif text-lg text-[#183D32] group-hover:text-[#B49A67] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="font-sans text-xs text-[#222823]/75 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2"
            >
              <button
                onClick={onExploreStay}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] font-sans font-semibold text-[#183D32] hover:text-[#B49A67] transition-colors group cursor-pointer"
              >
                <span>Discover Accommodations</span>
                <span className="w-8 h-[1px] bg-[#183D32] group-hover:bg-[#B49A67] group-hover:w-12 transition-all" />
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Architectural Image & Design Frame */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              {/* Outer Decorative Border Frame */}
              <div className="absolute -inset-4 border border-[#B49A67]/35 rounded-2xl -z-10 translate-x-3 translate-y-3 hidden sm:block" />

              {/* Main Architectural Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#0e2720]">
                <img
                  src="/images/satva-about.jpg"
                  alt="Biophilic architecture and reflective water gardens at SATVA Resort"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating Image Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#0e2720]/80 backdrop-blur-md border border-[#B49A67]/30 text-[#F7F4EC]">
                  <p className="font-serif text-lg tracking-wide text-[#F7F4EC]">
                    A Sanctuary Founded in Harmony
                  </p>
                  <p className="font-sans text-xs text-[#D8C8AC] font-light mt-0.5">
                    Preserving 120 hectares of natural high-canopy flora and natural water basins.
                  </p>
                </div>
              </div>

              {/* Decorative Accent Seal */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full border border-[#B49A67]/50 bg-[#F7F4EC] p-2 flex items-center justify-center shadow-lg hidden md:flex">
                <img
                  src="/favicon.svg"
                  alt="SATVA Seal"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
