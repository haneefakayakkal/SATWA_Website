import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Maximize, Bed, Check, Calendar, Sparkles } from 'lucide-react';
import type { Room } from '../types';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onEnquire: (roomName: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose, onEnquire }) => {
  if (!room) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#F7F4EC] text-[#222823] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-[#B49A67]/30 z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-[#F7F4EC] hover:bg-black/80 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Hero Image Banner */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#0e2720]">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2720] via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F7F4EC]">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.25em] uppercase font-sans font-semibold bg-[#B49A67] text-[#0e2720] mb-2">
                {room.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F7F4EC]">
                {room.name}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#D8C8AC] font-light mt-1">
                {room.priceSample}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-8">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/80 border border-[#D8C8AC]/40 text-center">
              <div className="flex flex-col items-center justify-center">
                <Users className="w-4 h-4 text-[#B49A67] mb-1" />
                <span className="text-[10px] tracking-wider uppercase text-[#222823]/60 font-sans">
                  Capacity
                </span>
                <span className="font-serif text-sm sm:text-base font-semibold text-[#183D32]">
                  {room.capacity}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center border-x border-[#D8C8AC]/40">
                <Maximize className="w-4 h-4 text-[#B49A67] mb-1" />
                <span className="text-[10px] tracking-wider uppercase text-[#222823]/60 font-sans">
                  Living Space
                </span>
                <span className="font-serif text-sm sm:text-base font-semibold text-[#183D32]">
                  {room.size}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Bed className="w-4 h-4 text-[#B49A67] mb-1" />
                <span className="text-[10px] tracking-wider uppercase text-[#222823]/60 font-sans">
                  Bedding
                </span>
                <span className="font-serif text-sm sm:text-base font-semibold text-[#183D32]">
                  {room.bedType}
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h3 className="font-serif text-2xl text-[#183D32] mb-3">
                Architectural Overview
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#222823]/80 leading-relaxed font-light">
                {room.fullDescription}
              </p>
            </div>

            {/* Gallery Previews */}
            {room.gallery.length > 1 && (
              <div>
                <h3 className="font-serif text-xl text-[#183D32] mb-3">
                  Interior &amp; Terrace Perspective
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {room.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-lg overflow-hidden h-28 sm:h-36 bg-[#0e2720]"
                    >
                      <img
                        src={img}
                        alt={`${room.name} angle ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Curated Amenities List */}
            <div>
              <h3 className="font-serif text-2xl text-[#183D32] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B49A67]" />
                <span>Sanctuary Amenities &amp; Services</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/60 border border-[#D8C8AC]/30 text-xs font-sans text-[#222823]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#183D32]/10 text-[#183D32] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#B49A67]" />
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-[#222823]/60 italic border-t border-[#D8C8AC]/50 pt-4">
              * Note: Exact seasonal rates, minimum night requirements, and custom dining arrangements are confirmed upon reservation enquiry.
            </div>
          </div>

          {/* Bottom Actions Bar */}
          <div className="p-4 sm:p-6 bg-white border-t border-[#D8C8AC]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#222823]/60 font-sans block">
                Selected Accommodation
              </span>
              <span className="font-serif text-lg font-bold text-[#183D32]">
                {room.name}
              </span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-[#D8C8AC] text-xs font-sans font-medium uppercase tracking-wider hover:bg-[#F7F4EC] transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onEnquire(room.name);
                }}
                className="flex-1 sm:flex-none btn-gold-shimmer px-6 py-2.5 rounded-full text-[#0e2720] text-xs font-sans font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Enquire About This Room</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
