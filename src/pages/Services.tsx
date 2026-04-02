import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Smile, 
  HeartPulse, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth using high-quality titanium implants.',
    benefits: ['Natural look and feel', 'Prevents bone loss', 'Lasts a lifetime', 'No damage to adjacent teeth'],
    process: ['Consultation & X-ray', 'Implant Placement', 'Healing Period', 'Crown Attachment'],
    icon: <Stethoscope size={32} />,
    image: 'https://picsum.photos/seed/implant/600/400',
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Saving your natural teeth from infection with pain-free RCT procedures.',
    benefits: ['Relieves severe pain', 'Saves natural tooth', 'Prevents infection spread', 'Efficient chewing'],
    process: ['Diagnosis', 'Cleaning the Canal', 'Filling & Sealing', 'Crown Placement'],
    icon: <HeartPulse size={32} />,
    image: 'https://picsum.photos/seed/rct/600/400',
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Professional whitening for a brighter, more confident smile in just one visit.',
    benefits: ['Instant results', 'Safe for enamel', 'Boosts confidence', 'Removes deep stains'],
    process: ['Shade Assessment', 'Gum Protection', 'Gel Application', 'UV Light Activation'],
    icon: <Sparkles size={32} />,
    image: 'https://picsum.photos/seed/whitening/600/400',
  },
  {
    id: 'smile-design',
    title: 'Smile Designing',
    description: 'Complete aesthetic makeover using veneers, crowns, and contouring.',
    benefits: ['Perfect alignment', 'Improved aesthetics', 'Customized results', 'Youthful appearance'],
    process: ['Digital Mockup', 'Preparation', 'Temporary Smile', 'Final Bonding'],
    icon: <Smile size={32} />,
    image: 'https://picsum.photos/seed/smile/600/400',
  },
  {
    id: 'extraction',
    title: 'Tooth Extraction',
    description: 'Safe and gentle removal of damaged or problematic teeth, including wisdom teeth.',
    benefits: ['Pain relief', 'Prevents overcrowding', 'Stops infection', 'Quick recovery'],
    process: ['Numbing', 'Gentle Removal', 'Cleaning Area', 'Aftercare Guidance'],
    icon: <ShieldCheck size={32} />,
    image: 'https://picsum.photos/seed/extraction/600/400',
  },
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Dental Services</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We offer a full range of dental treatments using state-of-the-art technology 
            to ensure the best outcomes for our patients.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-secondary" size={18} />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-primary" size={18} />
                        The Process
                      </h4>
                      <ul className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                            <span className="font-bold text-primary text-[10px]">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all"
                  >
                    <Calendar size={18} />
                    Book This Service
                  </Link>
                </div>

                <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                    <p className="text-primary font-bold text-lg">Modern Tech</p>
                    <p className="text-xs text-slate-500">Advanced Equipment Used</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Need a Custom Treatment Plan?</h3>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Every smile is unique. Dr. Desai provides personalized consultations to understand 
            your specific needs and create a treatment plan that fits your goals and budget.
          </p>
          <Link
            to="/contact"
            className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm"
          >
            Contact for Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
