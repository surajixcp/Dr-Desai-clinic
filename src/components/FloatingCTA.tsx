import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919876543210"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-colors"
        title="Call Now"
      >
        <Phone size={24} />
      </motion.a>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-3 flex gap-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a
          href="tel:+919876543210"
          className="flex-1 bg-slate-100 text-slate-800 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <Phone size={18} />
          Call
        </a>
        <Link
          to="/appointment"
          className="flex-[2] bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <Calendar size={18} />
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
