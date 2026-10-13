import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X, Calendar, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenBooking: (roomPref?: string) => void;
}

export const Navbar = ({ onOpenBooking }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio ambient sound synthesizer (subtle forest wind & river stream)
  const toggleAmbientSound = () => {
    if (!audioCtx) {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        
        // Pink noise buffer for gentle mountain breeze
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Warm lowpass filter for gentle wind
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(380, ctx.currentTime);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.08, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        whiteNoise.start(0);

        setAudioCtx(ctx);
        setGainNode(gain);
        setIsAudioPlaying(true);
      } catch (err) {
        console.warn('Audio context initialization prevented:', err);
      }
    } else {
      if (isAudioPlaying) {
        gainNode?.gain.setTargetAtTime(0, audioCtx.currentTime, 0.2);
        setIsAudioPlaying(false);
      } else {
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        gainNode?.gain.setTargetAtTime(0.08, audioCtx.currentTime, 0.2);
        setIsAudioPlaying(true);
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#about' },
    { name: 'Stay', href: '#stay' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = href === '#hero' ? 0 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0e2720]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#B49A67]/20 text-[#F7F4EC]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-[#F7F4EC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#B49A67]/50 rounded-sm"
              aria-label="SATVA Resort Home"
            >
              <div className="w-10 h-10 rounded-full border border-[#B49A67]/40 flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:scale-105 group-hover:border-[#B49A67]">
                <img
                  src="/favicon.svg"
                  alt="SATVA Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.24em] font-medium uppercase text-[#F7F4EC] transition-colors group-hover:text-[#B49A67]">
                  SATVA
                </span>
                <span className="text-[9px] tracking-[0.38em] uppercase text-[#B49A67] font-sans font-light -mt-1">
                  Resort &amp; Sanctuary
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs uppercase tracking-[0.24em] text-[#F7F4EC]/85 hover:text-[#B49A67] transition-all duration-300 py-1 relative group font-sans font-medium"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B49A67] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Actions: Sound & Book Button */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Forest Ambience Sound Toggle */}
              <button
                onClick={toggleAmbientSound}
                className="flex items-center gap-2 text-xs uppercase tracking-widest px-3 py-2 rounded-full border border-[#B49A67]/30 text-[#F7F4EC]/80 hover:text-[#F7F4EC] hover:border-[#B49A67] transition-all duration-300 backdrop-blur-sm"
                title={isAudioPlaying ? 'Mute Forest Ambient' : 'Play Forest Ambient'}
                aria-label="Toggle Forest Ambience"
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#B49A67] animate-pulse" />
                    <span className="text-[10px] hidden md:inline text-[#B49A67]">Sound On</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#F7F4EC]/60" />
                    <span className="text-[10px] hidden md:inline text-[#F7F4EC]/60">Ambient</span>
                  </>
                )}
              </button>

              {/* Book Your Stay CTA */}
              <button
                onClick={() => onOpenBooking()}
                id="nav-book-cta"
                className="btn-gold-shimmer relative px-5 py-2.5 rounded-full text-[#0e2720] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,154,103,0.4)] flex items-center gap-2 group"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Your Stay</span>
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F7F4EC] hover:text-[#B49A67] transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0e2720]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-10 px-8 text-[#F7F4EC] sm:hidden"
          >
            <div className="flex flex-col space-y-6 pt-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#B49A67] font-sans border-b border-[#B49A67]/20 pb-2">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-serif text-3xl tracking-wide hover:text-[#B49A67] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#B49A67]/60" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-[#B49A67]/20">
              <button
                onClick={toggleAmbientSound}
                className="w-full flex items-center justify-center gap-2 py-3 border border-[#B49A67]/40 rounded-full text-xs uppercase tracking-widest text-[#F7F4EC]/90"
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-4 h-4 text-[#B49A67]" />
                    <span>Forest Ambient: On</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-[#F7F4EC]/70" />
                    <span>Forest Ambient: Off</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-gold-shimmer py-3.5 rounded-full text-[#0e2720] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>

              <p className="text-center text-[10px] tracking-wider text-[#F7F4EC]/50 font-light pt-2">
                SATVA Resort &amp; Sanctuary • Highland Retreat
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
