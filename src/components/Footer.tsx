import { useState } from 'react';
import { ArrowUp, Send, Check, Sparkles } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e2720] text-[#F7F4EC] border-t border-[#B49A67]/20 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#183D32]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#B49A67]/20">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#B49A67]/40 flex items-center justify-center p-1.5">
                <img
                  src="/favicon.svg"
                  alt="SATVA Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.24em] font-medium uppercase text-[#F7F4EC]">
                  SATVA
                </span>
                <span className="text-[9px] tracking-[0.38em] uppercase text-[#B49A67] font-sans font-light -mt-1">
                  Resort &amp; Sanctuary
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#D8C8AC]/80 leading-relaxed font-light max-w-sm">
              An architectural and ecological sanctuary nestled within ancient highland forest canopy. Dedicated to mindful living, bespoke hospitality, and wilderness preservation.
            </p>

            <div className="pt-2 text-xs font-sans text-[#D8C8AC]/70">
              <p>Elevation: 1,240m &bull; Western Ridge</p>
              <p className="text-[#B49A67] mt-0.5">Harmonious with Nature</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B49A67] font-sans font-semibold">
              Sanctuary
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-[#F7F4EC]/80">
              <li>
                <a href="#hero" className="hover:text-[#B49A67] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B49A67] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#stay" className="hover:text-[#B49A67] transition-colors">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#B49A67] transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B49A67] transition-colors">
                  Cinematic Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B49A67] transition-colors">
                  Location &amp; Access
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B49A67] font-sans font-semibold">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs font-sans text-[#F7F4EC]/80">
              <p className="hover:text-[#B49A67] transition-colors">
                <a href={`tel:${RESORT_INFO.contact.phone}`}>{RESORT_INFO.contact.phone.split('/')[0].trim()}</a>
              </p>
              <p className="hover:text-[#B49A67] transition-colors">
                <a href={`mailto:${RESORT_INFO.contact.email}`}>{RESORT_INFO.contact.email}</a>
              </p>
              <p className="text-[#D8C8AC]/60">
                Check-in: {RESORT_INFO.contact.checkInTime}
              </p>
              <p className="text-[#D8C8AC]/60">
                Check-out: {RESORT_INFO.contact.checkOutTime}
              </p>
            </div>
          </div>

          {/* Newsletter / Seasonal Journal Subscription */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B49A67] font-sans font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sanctuary Journal</span>
            </h4>
            <p className="font-sans text-xs text-[#D8C8AC]/80 font-light leading-relaxed">
              Receive seasonal reflections, wellness insights, and private villa releases from SATVA.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-[#B49A67]/30 text-xs font-sans text-[#F7F4EC] placeholder-[#F7F4EC]/40 focus:outline-none focus:border-[#B49A67] pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 w-7 h-7 rounded-full bg-[#B49A67] text-[#0e2720] flex items-center justify-center hover:bg-[#D4BD8D] transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-sans flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Welcome to the SATVA Sanctuary Journal.</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-[#D8C8AC]/60">
          <p>
            &copy; {new Date().getFullYear()} {RESORT_INFO.name}. All rights reserved. Built with Antigravity.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#B49A67] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#B49A67] transition-colors cursor-pointer"
            >
              Terms of Stay
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#B49A67] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
