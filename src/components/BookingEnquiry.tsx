import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Mail, Phone, User, MessageSquare, Send, CheckCircle, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESORT_INFO, ROOMS_DATA } from '../data/resortData';
import type { EnquiryFormData } from '../types';

interface BookingEnquiryProps {
  initialRoomPreference?: string;
}

export const BookingEnquiry: React.FC<BookingEnquiryProps> = ({ initialRoomPreference }) => {
  // Tomorrow as default check-in, 3 days later as check-out
  const getInitialDates = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const departure = new Date(today);
    departure.setDate(today.getDate() + 4);

    return {
      checkIn: tomorrow.toISOString().split('T')[0],
      checkOut: departure.toISOString().split('T')[0],
    };
  };

  const dates = getInitialDates();

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    checkIn: dates.checkIn,
    checkOut: dates.checkOut,
    adults: 2,
    children: 0,
    roomPreference: initialRoomPreference || '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [enquiryRef, setEnquiryRef] = useState<string>('');

  // Update room preference when prop changes
  useEffect(() => {
    if (initialRoomPreference) {
      setFormData((prev) => ({ ...prev, roomPreference: initialRoomPreference }));
    }
  }, [initialRoomPreference]);

  // Real-time date calculation
  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = end.getTime() - start.getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days > 0 ? days : 0;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || phoneDigits.length < 7) {
      newErrors.phone = 'Please provide a valid phone number (minimum 7 digits)';
    }

    const todayStr = new Date().toISOString().split('T')[0];
    if (!formData.checkIn) {
      newErrors.checkIn = 'Please select a check-in date';
    } else if (formData.checkIn < todayStr) {
      newErrors.checkIn = 'Check-in date cannot be in the past';
    }

    if (!formData.checkOut) {
      newErrors.checkOut = 'Please select a check-out date';
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Check-out date must be after check-in date';
    }

    if (formData.adults < 1) {
      newErrors.adults = 'At least 1 adult guest is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API submission with generated booking enquiry reference
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = `SATVA-${Math.floor(100000 + Math.random() * 900000)}`;
      setEnquiryRef(generatedCode);
      setSubmissionSuccess(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B49A67', '#183D32', '#D8C8AC', '#F7F4EC'],
        });
      } catch (err) {
        console.warn('Confetti could not run:', err);
      }
    }, 1200);
  };

  const handleReset = () => {
    const newDates = getInitialDates();
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      checkIn: newDates.checkIn,
      checkOut: newDates.checkOut,
      adults: 2,
      children: 0,
      roomPreference: '',
      message: '',
    });
    setErrors({});
    setSubmissionSuccess(false);
  };

  const nightsCount = calculateNights();

  return (
    <section id="booking" className="py-28 sm:py-36 bg-[#F7F4EC] text-[#222823] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D8C8AC]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#183D32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] font-sans font-medium text-[#B49A67] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reservation Enquiry</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#183D32] tracking-tight mb-4"
          >
            {RESORT_INFO.enquiryHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#222823]/75 font-light leading-relaxed"
          >
            {RESORT_INFO.enquirySub}
          </motion.p>
        </div>

        {/* Interactive Form or Success Card */}
        <div className="bg-white rounded-3xl border border-[#D8C8AC]/60 shadow-2xl overflow-hidden p-6 sm:p-12">
          <AnimatePresence mode="wait">
            {!submissionSuccess ? (
              <motion.form
                key="enquiry-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-8"
              >
                {/* Stay Dates & Duration Bar */}
                <div className="bg-[#0e2720]/5 rounded-2xl p-5 border border-[#D8C8AC]/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#183D32] flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#B49A67]" />
                      <span>Stay Itinerary</span>
                    </span>
                    <span className="text-xs font-serif italic text-[#183D32]">
                      {nightsCount > 0 ? `${nightsCount} Night${nightsCount > 1 ? 's' : ''} Sanctuary Stay` : 'Select dates'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Check In Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#222823]/70 font-sans mb-1.5 font-medium">
                        Check-in Date *
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => {
                          setFormData({ ...formData, checkIn: e.target.value });
                          if (errors.checkIn) setErrors({ ...errors, checkIn: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B49A67] transition-all ${
                          errors.checkIn ? 'border-red-500 bg-red-50/20' : 'border-[#D8C8AC]'
                        }`}
                      />
                      {errors.checkIn && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.checkIn}
                        </p>
                      )}
                    </div>

                    {/* Check Out Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#222823]/70 font-sans mb-1.5 font-medium">
                        Check-out Date *
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => {
                          setFormData({ ...formData, checkOut: e.target.value });
                          if (errors.checkOut) setErrors({ ...errors, checkOut: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B49A67] transition-all ${
                          errors.checkOut ? 'border-red-500 bg-red-50/20' : 'border-[#D8C8AC]'
                        }`}
                      />
                      {errors.checkOut && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.checkOut}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Guest Count & Preferred Sanctuary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Adults */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#222823]/70 font-sans mb-1.5 font-medium flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#B49A67]" />
                      Adults (12+) *
                    </label>
                    <select
                      value={formData.adults}
                      onChange={(e) => setFormData({ ...formData, adults: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C8AC] bg-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B49A67]"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Adult' : 'Adults'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Children */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#222823]/70 font-sans mb-1.5 font-medium">
                      Children (0-11)
                    </label>
                    <select
                      value={formData.children}
                      onChange={(e) => setFormData({ ...formData, children: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C8AC] bg-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B49A67]"
                    >
                      {[0, 1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Child' : 'Children'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Room Preference */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#222823]/70 font-sans mb-1.5 font-medium">
                      Preferred Sanctuary
                    </label>
                    <select
                      value={formData.roomPreference}
                      onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C8AC] bg-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B49A67]"
                    >
                      <option value="">Any / Flexible Preference</option>
                      {ROOMS_DATA.map((room) => (
                        <option key={room.id} value={room.name}>
                          {room.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guest Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#222823]/70 font-sans mb-1.5 font-medium flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#B49A67]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B49A67] ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#D8C8AC]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#222823]/70 font-sans mb-1.5 font-medium flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#B49A67]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B49A67] ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D8C8AC]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#222823]/70 font-sans mb-1.5 font-medium flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#B49A67]" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B49A67] ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#D8C8AC]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message or Special Requests */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#222823]/70 font-sans mb-1.5 font-medium flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#B49A67]" />
                    Special Requests or Wellness Preferences (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about special occasions, dietary preferences, wellness goals, or transfer requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C8AC] bg-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B49A67] resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-[#222823]/60 font-sans max-w-sm">
                    Your enquiry connects directly with our concierge team. No payment details required at enquiry stage.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto btn-gold-shimmer px-8 py-4 rounded-full text-[#0e2720] font-sans font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success Confirmation View */
              <motion.div
                key="enquiry-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-[#183D32]/10 text-[#183D32] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-[#B49A67]" />
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-bold text-[#B49A67] block mb-2">
                    Enquiry Received
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#183D32]">
                    Thank you, {formData.fullName}.
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#222823]/80 font-light max-w-lg mx-auto mt-2 leading-relaxed">
                    We have registered your stay request with our reservations sanctuary.
                  </p>
                </div>

                {/* Reference Code Card */}
                <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#F7F4EC] border border-[#B49A67]/40 text-left space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D8C8AC]/60">
                    <span className="text-xs font-sans uppercase tracking-wider text-[#222823]/60">
                      Enquiry Reference
                    </span>
                    <span className="font-mono text-sm font-bold text-[#183D32]">
                      {enquiryRef}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-sans text-[#222823]">
                    <div>
                      <span className="text-[#222823]/60 block text-[10px] uppercase">Dates</span>
                      <span>{formData.checkIn} to {formData.checkOut}</span>
                    </div>
                    <div>
                      <span className="text-[#222823]/60 block text-[10px] uppercase">Party</span>
                      <span>{formData.adults} Adults {formData.children > 0 ? `, ${formData.children} Children` : ''}</span>
                    </div>
                    <div className="col-span-2 pt-1">
                      <span className="text-[#222823]/60 block text-[10px] uppercase">Sanctuary</span>
                      <span className="font-semibold text-[#183D32]">{formData.roomPreference || 'Flexible Choice'}</span>
                    </div>
                  </div>
                </div>

                <p className="font-sans text-xs text-[#222823]/60 max-w-md mx-auto italic">
                  A personal reservations host will contact you at <strong className="text-[#183D32]">{formData.email}</strong> within 24 hours with exact availability, rates, and customized stay itinerary.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-[#D8C8AC] hover:border-[#B49A67] text-xs font-sans font-medium uppercase tracking-wider text-[#183D32] hover:bg-[#F7F4EC] transition-all cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
