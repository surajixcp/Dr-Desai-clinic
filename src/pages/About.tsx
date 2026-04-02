import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">About Our Clinic</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dr. Desai's Multispeciality Dental Clinic & Implant Centre is dedicated to providing 
            high-quality, affordable dental care with a focus on patient comfort and advanced technology.
          </p>
        </div>
      </section>

      {/* Doctor Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img
                  src="https://picsum.photos/seed/dentist-work/800/1000"
                  alt="Dr. Pushkar Desai at work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 rounded-3xl shadow-2xl hidden xl:block">
                <p className="text-5xl font-bold mb-2">12+</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Doctor's Journey</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Dr. Pushkar Desai (MDS)</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  With a Master's degree in Prosthodontics and Crown Bridge, Dr. Pushkar Desai has spent over a decade 
                  perfecting the art of restorative and implant dentistry. His journey began with a vision to bring 
                  advanced dental technology to the heart of Indore.
                </p>
                <p>
                  Throughout his career, he has successfully treated thousands of patients, ranging from simple 
                  extractions to complex full-mouth rehabilitations. His expertise in dental implants has made him 
                  a sought-after specialist in the region.
                </p>
                <p>
                  Dr. Desai believes that every patient deserves a healthy smile. He combines his clinical expertise 
                  with a compassionate approach, ensuring that even the most anxious patients feel at ease.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-2">
                    <Award size={24} />
                  </div>
                  <p className="font-bold text-slate-900">MDS Specialist</p>
                  <p className="text-xs text-slate-500">Prosthodontics & Implants</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-2">
                    <Users size={24} />
                  </div>
                  <p className="font-bold text-slate-900">5000+ Patients</p>
                  <p className="text-xs text-slate-500">Successfully Treated</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-8">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted dental care provider in Indore, known for clinical excellence, 
                ethical practices, and patient-centric care. We aim to transform lives through healthy, 
                beautiful smiles.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide advanced multispeciality dental treatments at affordable prices. 
                We are committed to using the latest technology and maintaining the highest 
                standards of sterilization and hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-3xl font-bold text-slate-900">The Dr. Desai Advantage</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Technology',
                desc: 'We use digital X-rays, intraoral cameras, and modern implant systems for precise diagnosis and treatment.',
              },
              {
                title: 'Sterilization & Hygiene',
                desc: 'We follow international protocols for sterilization to ensure a safe and infection-free environment.',
              },
              {
                title: 'Patient Comfort',
                desc: 'Our clinic is designed to be relaxing, and we use pain-free techniques to make your visit comfortable.',
              },
              {
                title: 'Affordable Pricing',
                desc: 'Quality dental care shouldn\'t break the bank. We offer transparent and competitive pricing.',
              },
              {
                title: 'Expert Team',
                desc: 'Our staff is highly trained and dedicated to providing the best possible care for every patient.',
              },
              {
                title: 'Emergency Care',
                desc: 'We prioritize dental emergencies and provide quick relief for toothaches and injuries.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="shrink-0">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
