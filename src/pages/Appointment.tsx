import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, MessageCircle, CheckCircle2, Clock, MapPin } from 'lucide-react';

export default function Appointment() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Book Your Appointment</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Take the first step towards a healthier smile. Fill out the form or use our 
              quick contact buttons for immediate assistance.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Clinic Timings</h4>
                  <p className="text-slate-600 text-sm">Mon - Sat: 10:00 AM - 08:00 PM</p>
                  <p className="text-slate-600 text-sm">Sunday: By Appointment Only</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">WhatsApp Booking</h4>
                  <p className="text-slate-600 text-sm">Fastest way to get a slot confirmed.</p>
                  <a href="https://wa.me/919876543210" className="text-green-600 font-bold text-sm hover:underline">
                    Chat with us now
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600 text-sm">40, Sahid Bhagat Singh Society, Indore</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-secondary" size={20} />
                Why Book With Us?
              </h4>
              <ul className="space-y-3">
                {['Minimal waiting time', 'Expert consultation', 'Advanced diagnostics', 'Personalized care'].map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden"
          >
            {/* Urgency Badge */}
            <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-1 text-[10px] font-bold uppercase tracking-widest">
              Limited Slots Available
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h3>
                <p className="text-slate-600 mb-8">
                  Thank you for choosing Dr. Desai's Dental Clinic. Our team will call you shortly 
                  to confirm your appointment slot.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Select Service</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    >
                      <option value="">Choose a service</option>
                      <option value="implants">Dental Implants</option>
                      <option value="braces">Braces & Aligners</option>
                      <option value="rct">Root Canal Treatment</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="checkup">General Checkup</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Preferred Date</label>
                    <input
                      required
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your dental concern"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Confirm Booking
                </button>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919876543210"
                    className="flex-1 bg-slate-100 text-slate-800 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    className="flex-1 bg-green-50 text-green-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-100 transition-all"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
