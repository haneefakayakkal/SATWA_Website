import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stay } from './components/Stay';
import { SignatureStatement } from './components/SignatureStatement';
import { Experiences } from './components/Experiences';
import { Gallery } from './components/Gallery';
import { BookingEnquiry } from './components/BookingEnquiry';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { PolicyModal } from './components/PolicyModal';

export function App() {
  const [selectedRoomPreference, setSelectedRoomPreference] = useState<string>('');
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenBooking = (roomPref?: string) => {
    if (roomPref) {
      setSelectedRoomPreference(roomPref);
    }
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      const topOffset = 70;
      const elementPosition = bookingElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleExplore = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      const topOffset = 70;
      const elementPosition = aboutElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleExploreStay = () => {
    const stayElement = document.getElementById('stay');
    if (stayElement) {
      const topOffset = 70;
      const elementPosition = stayElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#222823] flex flex-col font-sans selection:bg-[#B49A67]/30 selection:text-[#183D32]">
      {/* Premium Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} onExplore={handleExplore} />

        {/* 2. Editorial About SATVA Section */}
        <About onExploreStay={handleExploreStay} />

        {/* 3. Stay Experience — Rooms & Accommodations */}
        <Stay onOpenBooking={handleOpenBooking} />

        {/* 4. Signature Statement Divider */}
        <SignatureStatement />

        {/* 5. Curated Resort Experiences */}
        <Experiences onOpenBooking={handleOpenBooking} />

        {/* 6. Cinematic Gallery with Lightbox */}
        <Gallery />

        {/* 7. Reservation Enquiry Form */}
        <BookingEnquiry initialRoomPreference={selectedRoomPreference} />

        {/* 8. Contact & Location Information */}
        <ContactLocation />
      </main>

      {/* Premium Footer */}
      <Footer onOpenPolicy={(type) => setPolicyType(type)} />

      {/* Privacy & Terms Modal */}
      <PolicyModal type={policyType} onClose={() => setPolicyType(null)} />
    </div>
  );
}

export default App;
