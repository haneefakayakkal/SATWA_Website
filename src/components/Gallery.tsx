import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_DATA } from '../data/resortData';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'architecture' | 'wellness' | 'dining' | 'nature'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-[#0e2720] text-[#F7F4EC] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#183D32]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#B49A67]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] font-sans font-medium text-[#B49A67] mb-3"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Atmosphere &amp; Living Art</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F4EC] tracking-tight leading-[1.15]"
            >
              Cinematic Gallery
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#D8C8AC]/80 max-w-md font-light leading-relaxed"
          >
            A visual journey through sacred architecture, mist-veiled forests, and restorative retreats.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {[
            { id: 'all', label: 'All Perspectives' },
            { id: 'architecture', label: 'Architecture' },
            { id: 'wellness', label: 'Wellness' },
            { id: 'dining', label: 'Gastronomy' },
            { id: 'nature', label: 'Nature & Canopy' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.id as typeof activeFilter);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-sans transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#B49A67] text-[#0e2720] font-semibold shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-[#F7F4EC]/70 hover:text-[#F7F4EC] border border-[#B49A67]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: 0.08 * idx }}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#183D32]/30 border border-[#B49A67]/20 hover:border-[#B49A67]/60 transition-all duration-500 aspect-[4/3] shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-sans font-semibold bg-[#B49A67] text-[#0e2720]">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-[#F7F4EC]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F7F4EC] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#D8C8AC] font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between text-[#F7F4EC] z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-[#B49A67] font-sans">
                  Perspective {selectedImageIndex + 1} of {filteredItems.length}
                </span>
                <span className="text-[#D8C8AC]/40 hidden sm:inline">&bull;</span>
                <span className="text-xs text-[#D8C8AC]/80 font-sans hidden sm:inline">
                  {filteredItems[selectedImageIndex].categoryLabel}
                </span>
              </div>

              <button
                onClick={handleCloseLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#F7F4EC] transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Display Area with Prev/Next Controls */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#B49A67] hover:text-[#0e2720] text-[#F7F4EC] border border-[#B49A67]/30 flex items-center justify-center transition-all focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image with animation */}
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl max-h-[75vh] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
              >
                <img
                  src={filteredItems[selectedImageIndex].image}
                  alt={filteredItems[selectedImageIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#B49A67] hover:text-[#0e2720] text-[#F7F4EC] border border-[#B49A67]/30 flex items-center justify-center transition-all focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Caption */}
            <div className="text-center max-w-2xl mx-auto z-10">
              <h4 className="font-serif text-2xl text-[#F7F4EC] mb-1">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#D8C8AC] font-light">
                {filteredItems[selectedImageIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
