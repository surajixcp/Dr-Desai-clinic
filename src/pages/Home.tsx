import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  Award,
  Stethoscope,
  HeartPulse,
  Smile,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Dental Implants',
    description: 'Restore your smile with permanent, natural-looking tooth replacements using advanced technology.',
    icon: <Stethoscope size={28} />,
  },
  {
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with traditional braces or modern clear aligners for a perfect smile.',
    icon: <Smile size={28} />,
  },
  {
    title: 'Root Canal Treatment',
    description: 'Pain-free root canal procedures to save your natural teeth and relieve dental discomfort.',
    icon: <HeartPulse size={28} />,
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your appearance with teeth whitening, veneers, and complete smile makeovers.',
    icon: <Sparkles size={28} />,
  },
];

const highlights = [
  { icon: <Award className="text-secondary" />, text: '12+ Years Experience' },
  { icon: <ShieldCheck className="text-secondary" />, text: 'Advanced Implant Tech' },
  { icon: <Clock className="text-secondary" />, text: 'Affordable Treatment' },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    text: "Dr. Desai is an expert! My dental implant procedure was completely painless and the results are amazing. Highly recommended.",
    rating: 5,
  },
  {
    name: 'Priya Verma',
    text: "The clinic is very clean and modern. The staff is friendly and Dr. Pushkar explains everything clearly. Best dentist in Indore!",
    rating: 5,
  },
  {
    name: 'Amit Gupta',
    text: "Got my root canal done here. Very professional approach and affordable pricing compared to other clinics.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-accent via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-100">
                <ShieldCheck size={16} />
                Trusted Dental Care in Indore
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Expert Dental Implants & <span className="text-primary">Smile Care</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Experience world-class dental treatments at Dr. Desai's Multispeciality Dental Clinic. 
                Affordable, advanced, and trusted by thousands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  to="/appointment"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Book Appointment
                </Link>
                <a
                  href="tel:+919876543210"
                  className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://picsum.photos/seed/dentist/800/600"
                  alt="Modern Dental Clinic"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Patient Satisfaction</p>
                    <p className="text-xl font-bold text-slate-900">99.9% Happy</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
                <p className="text-3xl font-bold">12+</p>
                <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Dental Care for Your Entire Family
            </h3>
            <p className="text-slate-600">
              From routine checkups to complex surgeries, we provide a wide range of dental services 
              using the latest technology and pain-free techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={idx * 0.1}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All Services <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="https://picsum.photos/seed/doctor/600/750"
                  alt="Dr. Pushkar Desai"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden xl:block">
                <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 max-w-xs">
                  <h4 className="font-bold text-lg mb-2">Dr. Pushkar Desai</h4>
                  <p className="text-primary font-semibold text-sm mb-4">MDS Prosthodontics</p>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    "My mission is to provide advanced dental care that is accessible to everyone in Indore."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Meet the Expert</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Dr. Pushkar Desai (MDS)
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dr. Pushkar Desai is a highly skilled Prosthodontist and Implantologist with over 12 years of clinical experience. 
                He specializes in complex dental rehabilitations, dental implants, and cosmetic smile designing.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'MDS in Prosthodontics & Crown Bridge',
                  'Certified Dental Implant Specialist',
                  'Expert in Full Mouth Rehabilitation',
                  'Member of Indian Dental Association',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 bg-blue-100 text-primary rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all inline-block"
              >
                Read Full Profile
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
            <h3 className="text-3xl font-bold text-slate-900">What Our Patients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {item.name[0]}
                  </div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Visit Our Clinic</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="font-bold text-slate-900">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Opening Hours</p>
                    <p className="font-bold text-slate-900">Mon - Sat: 10 AM - 8 PM</p>
                    <p className="font-bold text-slate-900">Sun: By Appointment</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Get Directions <ChevronRight size={20} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 h-[450px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.463421111111!2d75.87111111111111!3d22.71111111111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1111111111%3A0x1111111111111111!2sSapna%20Sangeeta%20Road%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1621111111111!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready for a Brighter, Healthier Smile?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Book your appointment today and experience the best dental care in Indore. 
            Limited slots available for this week!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl"
            >
              Book My Appointment
            </Link>
            <a
              href="https://wa.me/919876543210"
              className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
