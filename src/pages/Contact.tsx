import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or need to book an appointment? Reach out to us through any of the 
            channels below or visit our clinic in Indore.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Call Us</h4>
              <p className="text-slate-600 text-sm">+91 98765 43210</p>
              <p className="text-slate-600 text-sm">+91 0731 123456</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={28} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">WhatsApp</h4>
              <p className="text-slate-600 text-sm">+91 98765 43210</p>
              <a href="https://wa.me/919876543210" className="text-green-600 text-xs font-bold hover:underline mt-2 inline-block">Chat Now</a>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail size={28} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Email Us</h4>
              <p className="text-slate-600 text-sm">info@drdesaidental.com</p>
              <p className="text-slate-600 text-sm">support@drdesaidental.com</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={28} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Working Hours</h4>
              <p className="text-slate-600 text-sm">Mon - Sat: 10 AM - 8 PM</p>
              <p className="text-slate-600 text-sm">Sun: By Appointment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Address & Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Location</h3>
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Clinic Address</h4>
                    <p className="text-slate-600 leading-relaxed">
                      40, Sahid Bhagat Singh Society, <br />
                      Sapna Sangeeta Road, Indore, <br />
                      Madhya Pradesh - 452001
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">Nearby Landmarks</h4>
                <ul className="space-y-3">
                  {['Opposite Sapna Sangeeta Cinema', 'Near Tower Square', 'Walking distance from Bhawarkua'].map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all inline-block shadow-lg shadow-blue-100"
                >
                  Open in Google Maps
                </a>
              </div>
            </motion.div>

            {/* Map Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.463421111111!2d75.87111111111111!3d22.71111111111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1111111111%3A0x1111111111111111!2sSapna%20Sangeeta%20Road%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1621111111111!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
