import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Compass, Navigation, Car, Plane, Sparkles, ExternalLink } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export const ContactLocation: React.FC = () => {
  const [mapMode, setMapMode] = useState<'map' | 'satellite'>('map');

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#0e2720] text-[#F7F4EC] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#183D32]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#B49A67]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] font-sans font-medium text-[#B49A67] mb-3"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Highland Sanctuary Access</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F4EC] tracking-tight mb-4"
          >
            Location &amp; Concierge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#D8C8AC]/80 font-light leading-relaxed"
          >
            Secluded deep within ancient rainforest ridges, yet effortlessly accessible with dedicated private transfer assistance.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct Contact & Concierge Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#183D32]/40 rounded-3xl p-8 border border-[#B49A67]/20 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl text-[#F7F4EC] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B49A67]" />
                <span>Sanctuary Concierge</span>
              </h3>

              {/* Setting / Coordinates */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#B49A67]/30 flex items-center justify-center shrink-0 text-[#B49A67]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#D8C8AC]/60 font-sans block mb-0.5">
                    Sanctuary Setting
                  </span>
                  <p className="font-sans text-sm text-[#F7F4EC] font-medium">
                    {RESORT_INFO.contact.addressNote}
                  </p>
                  <p className="font-mono text-xs text-[#B49A67] mt-1">
                    {RESORT_INFO.contact.coordinates} &bull; {RESORT_INFO.contact.elevation}
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#B49A67]/30 flex items-center justify-center shrink-0 text-[#B49A67]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#D8C8AC]/60 font-sans block mb-0.5">
                    Reservations &amp; Concierge Direct
                  </span>
                  <p className="font-sans text-sm text-[#F7F4EC] font-medium">
                    {RESORT_INFO.contact.phone}
                  </p>
                  <p className="font-sans text-xs text-[#D8C8AC]/70 mt-0.5">
                    Available 24 hours daily for registered guests
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#B49A67]/30 flex items-center justify-center shrink-0 text-[#B49A67]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#D8C8AC]/60 font-sans block mb-0.5">
                    Written Enquiries
                  </span>
                  <a
                    href={`mailto:${RESORT_INFO.contact.email}`}
                    className="font-sans text-sm text-[#B49A67] hover:underline"
                  >
                    {RESORT_INFO.contact.email}
                  </a>
                  <p className="font-sans text-xs text-[#D8C8AC]/70 mt-0.5">
                    Concierge: {RESORT_INFO.contact.conciergeEmail}
                  </p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-4 pt-2 border-t border-[#B49A67]/20">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#B49A67]/30 flex items-center justify-center shrink-0 text-[#B49A67]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#D8C8AC]/60 font-sans block mb-0.5">
                    Arrival &amp; Departure
                  </span>
                  <p className="font-sans text-xs text-[#F7F4EC]">
                    Sanctuary Check-in: <strong>{RESORT_INFO.contact.checkInTime}</strong> &bull; Check-out: <strong>{RESORT_INFO.contact.checkOutTime}</strong>
                  </p>
                  <p className="font-sans text-xs text-[#D8C8AC]/70 mt-0.5">
                    Flexible arrival schedules accommodated upon prior request.
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Assistance Pill */}
            <div className="p-6 rounded-2xl bg-white/5 border border-[#B49A67]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-[#B49A67]" />
                <div>
                  <h4 className="font-serif text-base text-[#F7F4EC]">
                    Chauffeured Transfers &amp; Helipad
                  </h4>
                  <p className="font-sans text-xs text-[#D8C8AC]/70">
                    Bespoke luxury 4WD and helicopter arrival available
                  </p>
                </div>
              </div>
              <a
                href="#booking"
                className="text-xs uppercase tracking-wider text-[#B49A67] hover:text-[#F7F4EC] font-sans font-semibold transition-colors flex items-center gap-1"
              >
                <span>Request</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Location Visualizer / Map Interface */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden border border-[#B49A67]/30 bg-[#0a1a15] shadow-2xl flex-1 flex flex-col min-h-[440px]">
              {/* Map header toolbar */}
              <div className="p-4 bg-[#0e2720]/90 backdrop-blur-md border-b border-[#B49A67]/20 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-sans uppercase tracking-widest text-[#F7F4EC] font-medium">
                    SATVA Sanctuary Coordinates
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10 text-[11px] font-sans">
                  <button
                    onClick={() => setMapMode('map')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      mapMode === 'map' ? 'bg-[#B49A67] text-[#0e2720] font-semibold' : 'text-[#F7F4EC]/70 hover:text-white'
                    }`}
                  >
                    Topographic
                  </button>
                  <button
                    onClick={() => setMapMode('satellite')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      mapMode === 'satellite' ? 'bg-[#B49A67] text-[#0e2720] font-semibold' : 'text-[#F7F4EC]/70 hover:text-white'
                    }`}
                  >
                    Aerial View
                  </button>
                </div>
              </div>

              {/* Map Graphic Layer */}
              <div className="relative flex-1 overflow-hidden">
                <img
                  src={mapMode === 'map' ? '/images/satva-wilderness.jpg' : '/images/satva-hero.jpg'}
                  alt="Highland Valley aerial location view"
                  className="w-full h-full object-cover transition-all duration-700 brightness-75 hover:scale-102"
                />

                {/* Simulated Topographic Grid Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2720] via-black/30 to-black/30 pointer-events-none" />

                {/* Radar Pulse on Resort Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-24 h-24 rounded-full bg-[#B49A67]/20 animate-ping" />
                    <span className="absolute w-12 h-12 rounded-full bg-[#B49A67]/40" />
                    <div className="w-8 h-8 rounded-full bg-[#0e2720] border-2 border-[#B49A67] flex items-center justify-center shadow-2xl">
                      <img src="/favicon.svg" alt="SATVA" className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-3 px-4 py-1.5 rounded-full bg-[#0e2720]/90 backdrop-blur-md border border-[#B49A67]/50 text-center shadow-lg">
                    <span className="font-serif text-sm text-[#F7F4EC] font-semibold block">
                      SATVA Resort &amp; Sanctuary
                    </span>
                    <span className="text-[10px] text-[#B49A67] font-sans tracking-widest uppercase">
                      Private Estate Entrance
                    </span>
                  </div>
                </div>

                {/* Route markers indicator */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0e2720]/85 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Plane className="w-4 h-4 text-[#B49A67]" />
                    <div className="text-left">
                      <span className="text-[10px] uppercase tracking-wider text-[#D8C8AC]/60 block font-sans">
                        International Gateway
                      </span>
                      <span className="text-xs font-sans text-[#F7F4EC]">
                        110 km (Scenic 2h 15m private highway &amp; forest drive)
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-shimmer px-4 py-2 rounded-full text-[#0e2720] text-xs font-sans font-semibold uppercase tracking-wider flex items-center gap-1.5 shrink-0"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
