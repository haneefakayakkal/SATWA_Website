import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Maximize, Eye, Calendar, Sparkles } from 'lucide-react';
import { ROOMS_DATA } from '../data/resortData';
import type { Room } from '../types';
import { RoomModal } from './RoomModal';

interface StayProps {
  onOpenBooking: (roomPref?: string) => void;
}

export const Stay: React.FC<StayProps> = ({ onOpenBooking }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'villa' | 'suite' | 'residence'>('all');

  const filteredRooms = activeFilter === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeFilter);

  return (
    <section id="stay" className="py-28 sm:py-36 bg-[#0e2720] text-[#F7F4EC] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#183D32]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#B49A67]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Editorial Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-sans font-medium text-[#B49A67] mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Living Sanctuaries</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F4EC] tracking-tight leading-[1.15]"
            >
              Rooms &amp; Accommodations
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#D8C8AC]/80 max-w-md font-light leading-relaxed"
          >
            Conceived to dissolve the threshold between sanctuary comfort and ancient rainforest canopy.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-12 scrollbar-none"
        >
          {[
            { id: 'all', label: 'All Sanctuaries' },
            { id: 'villa', label: 'Villas' },
            { id: 'suite', label: 'Suites' },
            { id: 'residence', label: 'Private Residences' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-sans transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#B49A67] text-[#0e2720] font-semibold shadow-lg'
                  : 'bg-white/5 text-[#F7F4EC]/70 hover:bg-white/10 hover:text-[#F7F4EC] border border-[#B49A67]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.15 * idx }}
              className="group bg-[#183D32]/40 rounded-2xl overflow-hidden border border-[#B49A67]/25 hover:border-[#B49A67]/60 transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Image Container with Zoom & Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1a15]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183D32]/90 via-transparent to-black/30 pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-sans font-semibold bg-[#B49A67] text-[#0e2720] shadow-md">
                      {room.tag}
                    </span>
                  </div>

                  {/* Quick Metrics Bar overlay on image bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-sans text-[#F7F4EC]/90 backdrop-blur-sm bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#B49A67]" />
                      {room.capacity}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize className="w-3.5 h-3.5 text-[#B49A67]" />
                      {room.size}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl text-[#F7F4EC] group-hover:text-[#B49A67] transition-colors">
                      {room.name}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#D8C8AC]/80 font-light leading-relaxed mb-4 line-clamp-3">
                    {room.shortDescription}
                  </p>

                  {/* Key Features Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {room.features.slice(0, 3).map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] font-sans px-2.5 py-1 rounded-md bg-[#F7F4EC]/5 text-[#F7F4EC]/75 border border-[#B49A67]/20"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Pricing line */}
                  <div className="pt-3 border-t border-[#B49A67]/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#D8C8AC]/60 block font-sans">
                        Rate Indicator
                      </span>
                      <span className="text-xs sm:text-sm font-sans font-medium text-[#B49A67]">
                        {room.priceSample}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedRoom(room)}
                  className="px-4 py-2.5 rounded-full border border-[#B49A67]/40 hover:border-[#B49A67] text-[#F7F4EC] hover:text-[#B49A67] text-xs font-sans uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer bg-white/5 hover:bg-white/10"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Explore</span>
                </button>

                <button
                  onClick={() => onOpenBooking(room.name)}
                  className="btn-gold-shimmer px-4 py-2.5 rounded-full text-[#0e2720] text-xs font-sans font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Detail Modal */}
      <RoomModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onEnquire={(roomName) => {
          setSelectedRoom(null);
          onOpenBooking(roomName);
        }}
      />
    </section>
  );
};
