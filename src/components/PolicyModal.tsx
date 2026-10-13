import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal = ({ type, onClose }: PolicyModalProps) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#F7F4EC] text-[#222823] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-[#B49A67]/40 z-10 p-6 sm:p-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#183D32]/10 hover:bg-[#183D32]/20 flex items-center justify-center text-[#183D32] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#183D32] text-[#F7F4EC] flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-5 h-5 text-[#B49A67]" /> : <FileText className="w-5 h-5 text-[#B49A67]" />}
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-sans text-[#B49A67] font-semibold">
                SATVA Resort &bull; Sanctuary Governance
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#183D32]">
                {isPrivacy ? 'Privacy & Confidentiality Policy' : 'Terms & Conditions of Stay'}
              </h3>
            </div>
          </div>

          <div className="max-h-[50vh] overflow-y-auto pr-2 text-xs sm:text-sm font-sans text-[#222823]/80 leading-relaxed space-y-4 font-light">
            {isPrivacy ? (
              <>
                <p>
                  At SATVA Resort, the privacy and confidentiality of our guests are treated with the highest standard of discretion. Personal information collected through reservation enquiries, dietary specifications, and concierge requests is used exclusively to curate your stay.
                </p>
                <p>
                  We do not sell, rent, or distribute guest information to third parties. All communications are securely encrypted, and our team adheres to stringent international data protection standards.
                </p>
                <p>
                  For any inquiries regarding your stored reservation information or to request deletion of your records, please contact our concierge team at <strong className="text-[#183D32]">privacy@satvaresort.com</strong>.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>1. Reservation &amp; Deposit:</strong> Enquiries submitted via this portal represent expressions of interest. Final room reservation is confirmed upon receipt of deposit and formal booking confirmation issued by SATVA Resort Reservations.
                </p>
                <p>
                  <strong>2. Sanctuary Conduct:</strong> SATVA is an ecological wilderness sanctuary. Guests are kindly requested to respect the quietude of the forest, native wildlife, and the serene privacy of neighboring guests.
                </p>
                <p>
                  <strong>3. Cancellation Policy:</strong> Full cancellation terms vary depending on the chosen seasonal package. Standard rates allow complimentary modification up to 14 days prior to arrival.
                </p>
              </>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-[#D8C8AC] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full btn-gold-shimmer text-[#0e2720] text-xs font-sans font-semibold uppercase tracking-wider"
            >
              I Understand
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
